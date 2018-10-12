import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import _has from 'lodash/has';
import _omit from 'lodash/omit';
import _isArray from 'lodash/isArray';
import _keys from 'lodash/keys';
import _pick from 'lodash/pick';
import _isEmpty from 'lodash/isEmpty';
import _filter from 'lodash/filter';
import $ from 'jquery';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import CustomPopOver from 'src/components/customPopOver/customPopOver';
import CustomGrid from 'src/components/customGrid/customGrid';
import RightPane from './rightPane';
import Modal from './../BootstrapComponent/Modal';
import CommentModal from './commentModal';
import AlertsFilter from 'src/alerts/filter/alertsFilter/alertsFilter';
import CasesFilter from 'src/alerts/filter/casesFilter/casesFilter';
import Parameters from 'src/alerts/Parameters/parameters';
import RpDetails from 'src/alerts/RpDetails/rpDetails';
import { alertsFilterFields, casesFilterFields } from 'src/constants/alerts';
import CusRadioButtonGroup from '../components/CusRadioButtonGroup/cusRadioButtonGroup';
import CusButton from '../components/CusButton/cusButton';
import CusCheckBoxGrp from '../components/CusCheckBoxGrp/cusCheckBoxGrp';

import {
  getRightPaneRelated,
  getRightPaneHistory,
  getAllAlertSortedList,
  getAllCasesSortedList,
  getAllAlertFilterList,
  getAllCaseFilterList,
  getCommentHistory,
  saveComment,
  uploadDocument,
  downloadDocument
} from './service/action';

import {
  saveUserPreferenceDisplay
} from 'src/login/service/action';

import 'src/common/css/mockcss/style.css';
import 'src/common/css/owncss/style.css';

// Todo: need to change the constant location
const sortDirection = {
  asc: 'Ascending',
  desc: 'Descending'
}

class AlertsDashboard extends Component {
  static propTypes = {
    allAlertList: PropTypes.array,
    alertUserPreferenceList: PropTypes.array,
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    alertId: PropTypes.string,
    userId: PropTypes.string,
    availableLists: PropTypes.array,
    isLoading: PropTypes.bool.isRequired,
    alertIdSelectedSb: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    allRightPaneRelatedData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]).isRequired,
    getAllAlertFilterList: PropTypes.func,
    getAllAlertList: PropTypes.func,
    getAllAlertSortedList: PropTypes.func,
    getAllCasesSortedList: PropTypes.func,
    allRightPaneHistoryData: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ]).isRequired,
    getAllCaseFilterList: PropTypes.func,
    getAllCaseList: PropTypes.func,
    getRightPaneRelated: PropTypes.func,
    getRightPaneHistory: PropTypes.func,
    AlertsListFields: PropTypes.array,
    alertListDetails: PropTypes.object,
    caseListDetails: PropTypes.object,
    maxRecords: PropTypes.number,
    page: PropTypes.number,
    recordsPerPage: PropTypes.number,
    // Todo one of type to stable one type
    maxRecordPerAlertPage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    maxRecordPerCasePage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    pageReturned: PropTypes.number,
    pageNumber: PropTypes.number,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    saveUserPreferenceDisplay: PropTypes.func,
    saveComment: PropTypes.func,
    getCommentHistory: PropTypes.func,
    commentHistory: PropTypes.array,
    uploadDocument: PropTypes.func,
    downloadDocument: PropTypes.func,
    paginatedList: PropTypes.array,
    alertCaseAvailableFields: PropTypes.array
  }

  static defaultProps = {
    allAlertList: [],
    alertUserPreferenceList: [],
    id: '',
    userId: '',
    availableLists: [],
    getAllAlertList: _noop,
    getAllCaseList: _noop,
    getRightPaneRelated: _noop,
    getRightPaneHistory: _noop,
    getAllAlertSortedList: _noop,
    getAllCasesSortedList: _noop,
    location: {
      pathname: ''
    },
    fieldTypeSelected: []
  }

  state = {
    isCommentModalVisible: false,
    isDescPopoverVisible: false,
    selectedListId: '',
    isRpOpen: false,
    rightPaneDetails: {},
    isAlertsFilterVisible: false,
    isCasesFilterVisible: false,
    isAlertParametersVisible: false,
    isCaseParametersVisible: false,
    isRpDetailsVisible: false,
    isParametersVisible: false,
    isFilterPatternVisible: false,
    isAlertSortVisible: false,
    isCaseSortVisible: false,
    isDisplayUpVisbile: false,
    isCaseDisplayUpVisbile: false,
    isfilterRemove: false,
    alertSortBy: '',
    alertSortOrder: '',
    caseSortBy: '',
    caseSortOrder: '',
    alertHiddenFields: {},
    caseHiddenFields: {},
    sendHiddenFields: {},
    sendCaseHiddenFields: {},
    fieldInArray: []
  }

  componentDidMount() {
    const { id, userId, availableLists, alertUserPreferenceList, getAllAlertSortedList, defaultAlertDisplay,
      pageNumber } = this.props;
    // take values of alert & Cases  sort from user preference

    let defaultAlertSortBy, defaultAlertSortOrder, defaultCaseSortBy, defaultCaseSortOrder, alertField, caseField;
    let alertHiddenFields = {};
    let caseHiddenFields = {};
    _map(alertUserPreferenceList, (each) => {
      if (each.preferenceCode === 'sortFieldAlert') {
        defaultAlertSortBy = each.preferenceValue;
      } else if (each.preferenceCode === 'sortOrderAlert') {
        defaultAlertSortOrder = each.preferenceValue;
      } else if (each.preferenceCode === 'sortFieldCase') {
        defaultCaseSortBy = each.preferenceValue;
      } else if (each.preferenceCode === 'sortOrderCase') {
        defaultCaseSortOrder = each.preferenceValue;
      } else if (each.preferenceCode === 'hideField') {
        if (each.preferenceValue.includes('Alert')) {
          alertField = each.preferenceValue.replace('Alert', '');
          alertHiddenFields[alertField] = alertField;
        } else if (each.preferenceValue.includes('Case')) {
          caseField = each.preferenceValue.replace('Case', '');
          caseHiddenFields[caseField] = caseField;
        }
        // todo: some problem here. undefined is passing all the time
        // alertHiddenFields[alertField] = alertField;
        // caseHiddenFields[caseField] = caseField;
      }
    });

    this.setState({
      alertSortBy: _isEmpty(defaultAlertSortBy) || defaultAlertSortBy === 'null' ? null : defaultAlertSortBy,
      alertSortOrder: _isEmpty(defaultAlertSortOrder) || defaultAlertSortOrder === 'null' ? null : defaultAlertSortOrder,
      caseSortBy: _isEmpty(defaultCaseSortBy) || defaultCaseSortBy === 'null' ? null : defaultCaseSortBy,
      caseSortOrder: _isEmpty(defaultCaseSortOrder) || defaultCaseSortOrder === 'null' ? null : defaultCaseSortOrder,
      alertHiddenFields: _isEmpty(alertHiddenFields) ? {} : alertHiddenFields,
      caseHiddenFields: _isEmpty(caseHiddenFields) ? {} : caseHiddenFields
    }, () => {
      getAllAlertSortedList(1, id, userId, availableLists, this.state.alertSortBy, this.state.alertSortOrder, pageNumber, this.props.maxRecordPerAlertPage, defaultAlertDisplay);
      this.setState({ sendHiddenFields: alertHiddenFields, sendCaseHiddenFields: caseHiddenFields });
    })
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      // to hide rightpane when moved to some other url eg: today -> lastweek.
      // reset selectedListId so that reclicking on the item first time shows right pane
      this.setState({ isRpOpen: false, selectedListId: '' })
    }
  }
  closeRightPane = () => {
    this.setState({ isRpOpen: false, selectedListId: '' })
  }
  handleCommentSubmit = (newComment) => {
    const { userId, saveComment } = this.props;
    let uid, alertUid;
    if (this.state.rightPaneDetails.userAlert) {
      uid = this.state.rightPaneDetails.userAlert.uid;
      alertUid = this.state.rightPaneDetails.userAlert.alertUid;
    } else {
      uid = this.state.rightPaneDetails.uid;
      alertUid = this.state.rightPaneDetails.uid;
    }
    saveComment(uid, newComment, alertUid, userId);
  };

  renderDescriptionPopover = () => {
    return (
      <Modal
        saveDisabled
        isOpen={this.state.isDescPopoverVisible}
        title="Description"
        changeVisbility={this.handleDescModal}>
        <dl className="o-attribute__value">
          <p>{this.state.rightPaneDetails.description}</p>
        </dl>
      </Modal>);
  };

  toggleHasVeil = () => {
    const { isDescPopoverVisible, isCommentModalVisible, isAlertParametersVisible, isCaseParametersVisible, isRpDetailsVisible } = this.state;
    if (isDescPopoverVisible || isCommentModalVisible || isAlertParametersVisible || isCaseParametersVisible || isRpDetailsVisible) {
      $('body').addClass('has-veil');
    } else {
      $('body').removeClass('has-veil');
    }
  };

  handleCommentModal = () => {
    this.setState({ isCommentModalVisible: !this.state.isCommentModalVisible },
      () => this.toggleHasVeil());
  };

  handleDescModal = () => {
    this.setState({ isDescPopoverVisible: !this.state.isDescPopoverVisible },
      () => this.toggleHasVeil());
  };

  rightPaneRelatedFetch = () => {
    const { userId, availableLists } = this.props;
    this.props.getRightPaneRelated(this.state.selectedListId, userId, availableLists);
  };

  rightPaneHistoryFetch = () => {
    this.props.getRightPaneHistory(this.state.selectedListId, this.props.userId);
  };

  rightPaneDetailsFetch = (id) => {
    _map(this.props.allAlertList, (each) => {
      if (each.uid === id) {
        this.setState({ rightPaneDetails: each }, () =>
          this.props.getCommentHistory(id)
        // this.state.rightPaneDetails.userAlert &&
        // this.props.getCommentHistory(this.state.rightPaneDetails.userAlert.alertUid))
        )
      }
    })
  };

  toggleRightPane = (id = null) => {
    const isRpOpen = this.state.selectedListId !== id;
    this.setState({ selectedListId: isRpOpen ? id : '', isRpOpen: isRpOpen },
      () => {
        if (this.state.isRpOpen && _isArray(id)) {
          this.rightPaneRelatedFetch();
        } else if (this.state.isRpOpen) {
          this.rightPaneRelatedFetch();
          this.rightPaneHistoryFetch();
          this.rightPaneDetailsFetch(id);
        }
      });
  };

  sortedAlertListFetch = (pageNumber = this.props.page, maxRecordPerAlertPage, orderField = this.state.alertSortBy, orderDirection = this.state.alertSortOrder) => {
    const { alertIdSelectedSb, id, userId, availableLists, defaultAlertDisplay } = this.props;
    this.props.getAllAlertSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay);
  };
  sortedAlertTableListFetch = (orderField, orderDirection) => {
    const { alertIdSelectedSb, id, userId, availableLists, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay } = this.props;
    this.props.getAllAlertSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay);
  }
  sortedCasesTableListFetch = (orderField, orderDirection) => {
    const { alertIdSelectedSb, id, userId, availableLists, pageNumber, defaultCaseDisplay } = this.props;
    this.props.getAllCasesSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, this.props.maxRecordPerCasePage, defaultCaseDisplay);
  };
  sortedCasesListFetch = (pageNumber = this.props.page, maxRecordPerCasePage, orderField = this.state.caseSortBy, orderDirection = this.state.caseSortOrder) => {
    const { alertIdSelectedSb, id, userId, availableLists, defaultCaseDisplay } = this.props;
    this.props.getAllCasesSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, this.props.maxRecordPerCasePage, defaultCaseDisplay);
  };

  toggleAlertsFilter = () => {
    this.setState({ isAlertsFilterVisible: !this.state.isAlertsFilterVisible });
  };

  toggleCasesFilter = () => {
    this.setState({ isCasesFilterVisible: !this.state.isCasesFilterVisible });
  };

  handleAlertCheckBox = (event) => {
    let field = event.target.id
    let allHiddenFields = this.state.alertHiddenFields;
    if (_has(allHiddenFields, field)) {
      allHiddenFields = _omit(allHiddenFields, field);
      // todo: undefined object was added so removing here . find the cause and fix it
      allHiddenFields = _omit(allHiddenFields, 'undefined')
    } else {
      allHiddenFields[field] = field;
    }
    this.setState({ alertHiddenFields: allHiddenFields });
  };

  handleCaseCheckBox = (event) => {
    let field = event.target.id
    let allHiddenFields = this.state.caseHiddenFields;
    if (_has(allHiddenFields, field)) {
      allHiddenFields = _omit(allHiddenFields, field);
      // todo: undefined object was added so removing here . find the cause and fix it
      allHiddenFields = _omit(allHiddenFields, 'undefined');
    } else {
      allHiddenFields[field] = field;
    }
    this.setState({ caseHiddenFields: allHiddenFields });
  };

  toggleDisplayUp = () => {
    this.setState({ isDisplayUpVisbile: !this.state.isDisplayUpVisbile });
  };

  toggleCaseDisplayUp = () => {
    this.setState({ isCaseDisplayUpVisbile: !this.state.isCaseDisplayUpVisbile });
  };

  toggleFilterPattern = (index) => {
    this.setState({ isFilterPatternVisible: !this.state.isFilterPatternVisible, filterPatternIndex: index });
  };

  toggleFilterRemove = () => {
    this.setState({ isfilterRemove: !this.state.isfilterRemove });
  };

  toggleAlertParameters = () => {
    this.setState({ isAlertParametersVisible: !this.state.isAlertParametersVisible },
      () => {
        this.toggleHasVeil();
      });
  };

  toggleCaseParameters = () => {
    this.setState({ isCaseParametersVisible: !this.state.isCaseParametersVisible },
      () => this.toggleHasVeil());
  };

  toggleRpDetails = (event) => {
    this.rightPaneDetailsFetch(event.target.id);
    this.setState({ isRpDetailsVisible: !this.state.isRpDetailsVisible },
      () => this.toggleHasVeil());
  };

  hideRpDetailsPopOver = () => {
    this.setState({isRpDetailsVisible: false}, () => this.toggleHasVeil())
  }

  alertToggleSort = () => {
    this.setState({ isAlertSortVisible: !this.state.isAlertSortVisible });
  };

  caseToggleSort = () => {
    this.setState({ isCaseSortVisible: !this.state.isCaseSortVisible });
  };

  saveAlertPreferenceList = () => {
    const { id, userId, saveUserPreferenceDisplay } = this.props;
    let upArray = [];
    this.setState({ sendHiddenFields: this.state.alertHiddenFields, isDisplayUpVisbile: false },
      () => {
        upArray = _map(_keys(this.state.sendHiddenFields), (each) => {
          return each + 'Alert';
        });
        saveUserPreferenceDisplay(id, userId, upArray)
      });
  };

  saveCasePreferenceList = () => {
    const { id, userId, saveUserPreferenceDisplay } = this.props;
    let upArray;
    this.setState({ sendCaseHiddenFields: this.state.caseHiddenFields, isCaseDisplayUpVisbile: false },
      () => {
        upArray = _map(_keys(this.state.sendCaseHiddenFields), (each) => {
          return each + 'Case';
        });
        saveUserPreferenceDisplay(id, userId, upArray);
      });
  };

  hidePopOver = () => {
    this.setState({
      isAlertsFilterVisible: false,
      isCasesFilterVisible: false,
      isAlertSortVisible: false,
      isCaseSortVisible: false,
      isPropertyVisible: false,
      isDisplayUpVisbile: false,
      isCaseDisplayUpVisbile: false
    });
  };

  alertSortPopOver = () => {
    const { isAlertSortVisible, alertSortBy, alertSortOrder } = this.state;
    return (
      <CustomPopOver hidePopOver={this.hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isAlertSortVisible ? '' : 'is-hidden'}`} style={{ top: '117px', left: '905px' }} >
          <div className="c-modal__body">
            <div className="g-radio-buttons">
              <ul className="g-list g-list--borders">
                <li className="g-list__item">
                  <CusRadioButtonGroup
                    // TODO : Need to maintain entityId as const
                    radioList={_filter(this.props.alertCaseAvailableFields, {entityId: 11})}
                    asChecked={alertSortBy}
                    asName='name'
                    asLabel='description'
                    onChange={(event) => {
                      this.setState({ alertSortBy: event.target.value },
                        () => this.sortedAlertTableListFetch(this.state.alertSortBy, this.state.alertSortOrder));
                    }} />

                </li>
                <li className="g-list__item">
                  <CusRadioButtonGroup
                    keyValues
                    radioList={sortDirection}
                    asChecked={alertSortOrder}
                    onChange={(event) => {
                      this.setState({ alertSortOrder: event.target.value },
                        () => this.sortedAlertTableListFetch(this.state.alertSortBy, this.state.alertSortOrder))
                    }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CustomPopOver>);
  };

  caseSortPopOver = () => {
    const { isCaseSortVisible, caseSortBy, caseSortOrder } = this.state;
    return (
      <CustomPopOver hidePopOver={this.hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isCaseSortVisible ? '' : 'is-hidden'}`} style={{ top: '117px', left: '905px' }} >
          <div className="c-modal__body">
            <div className="g-radio-buttons">
              <ul className="g-list g-list--borders">
                <li className="g-list__item">
                  <CusRadioButtonGroup
                    // TODO : Need to maintain entityId as const
                    radioList={_filter(this.props.alertCaseAvailableFields, {entityId: 13})}
                    asChecked={caseSortBy}
                    asName='name'
                    asLabel='description'
                    onChange={(event) => {
                      this.setState({ caseSortBy: event.target.value },
                        () => this.sortedCasesTableListFetch(caseSortBy, caseSortOrder));
                    }} />
                </li>
                <li className="g-list__item">
                  <CusRadioButtonGroup
                    keyValues
                    radioList={sortDirection}
                    asChecked={caseSortOrder}
                    onChange={(event) => {
                      this.setState({ caseSortOrder: event.target.value },
                        () => this.sortedCasesTableListFetch(caseSortBy, caseSortOrder));
                    }} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CustomPopOver>
    );
  };

  displayUserPreference = () => {
    const { alertHiddenFields, isDisplayUpVisbile } = this.state

    return (
      <CustomPopOver hidePopOver={this.hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isDisplayUpVisbile ? '' : 'is-hidden'}`} style={{ top: '117px', left: '1020px' }} >
          <div className="c-modal__body">
            <CusCheckBoxGrp
              // TODO : Need to maintain entityId as const
              checkList={_filter(this.props.alertCaseAvailableFields, {entityId: 11})}
              asName='name'
              asLabel='description'
              onChange={this.handleAlertCheckBox}
              asChecked={_keys(alertHiddenFields)} />
          </div>
          <div className="c-modal__foot">
            <div className="c-modal__actions c-modal__actions--secondary">
              <CusButton onClick={this.saveAlertPreferenceList} ariaLabel='apply'>
                <FormattedMessage id={ 'global.apply' } />
              </CusButton>
            </div>
          </div>
        </div>
      </CustomPopOver>
    );
  };

  caseDisplayUserPreference = () => {
    const { caseHiddenFields, isCaseDisplayUpVisbile } = this.state;

    return (
      <CustomPopOver hidePopOver={this.hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isCaseDisplayUpVisbile ? '' : 'is-hidden'}`} style={{ top: '117px', left: '1020px' }} >
          <div className="c-modal__body">
            <CusCheckBoxGrp
              // TODO : Need to maintain entityId as const
              checkList={_filter(this.props.alertCaseAvailableFields, {entityId: 13})}
              asName='name'
              asLabel='description'
              onChange={this.handleCaseCheckBox}
              asChecked={_keys(caseHiddenFields)} />
          </div>
          <div className="c-modal__foot">
            <div className="c-modal__actions c-modal__actions--secondary">
              <CusButton onClick={this.saveCasePreferenceList} ariaLabel='apply'>
                <FormattedMessage id={ 'global.apply' } />
              </CusButton>
            </div>
          </div>
        </div>
      </CustomPopOver>
    );
  };

  parametersPopOver = () => {
    const { isAlertParametersVisible, isCaseParametersVisible } = this.state;
    return (
      <Fragment>
        <Parameters
          // note: to display any one.alert parameter or case parameter
          isParametersVisible={isAlertParametersVisible || isCaseParametersVisible}
          toggleParameters={isAlertParametersVisible ? this.toggleAlertParameters : this.toggleCaseParameters}
          isCase={isCaseParametersVisible} />
      </Fragment>
    )
  };

  rpDetailsPopOver = () => {
    const { isRpDetailsVisible, rightPaneDetails } = this.state;
    const { commentHistory } = this.props;
    return (
      <RpDetails
        isRpDetailsVisible={isRpDetailsVisible}
        rightPaneDetails={rightPaneDetails}
        toggleRpDetails={this.toggleRpDetails}
        onCommentModal={this.handleCommentModal}
        hideMe={this.hideRpDetailsPopOver}
        commentsLength={commentHistory && commentHistory.length} />
    )
  };

  alertsFilterPopOver = () => {
    const { userId, availableLists, id, alertIdSelectedSb,
      getAllAlertFilterList, alertId, alertListDetails, AlertsListFields, defaultAlertDisplay } = this.props;
    const { isfilterRemove, filterPatternIndex, isAlertsFilterVisible, isFilterPatternVisible, fieldInArray } = this.state;
    let allProps = {
      allFieldDisplay: _map(_filter(this.props.alertCaseAvailableFields, {entityId: 11}), (each, i) => _pick(each, ['name', 'type', 'description'])),
      fieldInArray: fieldInArray,
      isFilterPatternVisible: isFilterPatternVisible,
      filterPatternIndex: filterPatternIndex,
      isfilterRemove: isfilterRemove,
      toggleFilterPattern: this.toggleFilterPattern,
      toggleFilterRemove: this.toggleFilterRemove,
      AlertsListFields: AlertsListFields,
      getAllAlertFilterList: getAllAlertFilterList,
      alertId: alertId,
      id: id,
      userId: userId,
      availableLists: availableLists,
      name: userId,
      allListDetails: alertListDetails,
      alertIdSelectedSb: alertIdSelectedSb,
      defaultAlertDisplay: defaultAlertDisplay
    }
    return (
      <CustomPopOver hidePopOver={this.hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isAlertsFilterVisible ? '' : 'is-hidden'} custom-popover`} style={{ top: '117px', left: '705px' }}>
          <AlertsFilter allProps={allProps} />
        </div>
      </CustomPopOver>
    );
  };

  CasesFilterPopOver = () => {
    const { userId, availableLists, id, alertIdSelectedSb,
      getAllCaseFilterList, caseListDetails, AlertsListFields } = this.props;
    const { isfilterRemove, filterPatternIndex, isCasesFilterVisible, isFilterPatternVisible, fieldInArray } = this.state;
    let allProps = {
      allFieldDisplay: _map(_filter(this.props.alertCaseAvailableFields, {entityId: 13}), (each, i) => _pick(each, ['name', 'type', 'description'])),
      fieldInArray: fieldInArray,
      isFilterPatternVisible: isFilterPatternVisible,
      filterPatternIndex: filterPatternIndex,
      isfilterRemove: isfilterRemove,
      toggleFilterPattern: this.toggleFilterPattern,
      toggleFilterRemove: this.toggleFilterRemove,
      AlertsListFields: AlertsListFields,
      getAllAlertFilterList: getAllCaseFilterList,
      // alertId: alertId,
      id: id,
      userId: userId,
      availableLists: availableLists,
      name: userId,
      allListDetails: caseListDetails,
      alertIdSelectedSb: alertIdSelectedSb
    }
    return (
      <CustomPopOver hidePopOver={this.hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isCasesFilterVisible ? '' : 'is-hidden'} custom-popover`} style={{ top: '117px', left: '705px' }}>
          <CasesFilter allProps={allProps} />
        </div>
      </CustomPopOver>
    );
  };

  renderAlert = (name) => {
    const { pageReturned, maxRecords, allAlertList, defaultAlertDisplay, rightPaneDetails, maxRecordPerAlertPage } = this.props;
    const { isRpOpen, sendHiddenFields } = this.state;
    return (
      <CustomGrid
        maxRecordPerAlertPage={maxRecordPerAlertPage}
        onDescPopover={this.handleDescModal}
        rightPaneDetails={rightPaneDetails}
        sortedCasesTableListFetch={this.sortedCasesTableListFetch}
        sortedAlertTableListFetch={this.sortedAlertTableListFetch}
        sortedCasesListFetch={this.sortedCasesListFetch}
        sortedAlertListFetch={this.sortedAlertListFetch}
        pageReturned={pageReturned}
        maxRecords={maxRecords}
        allAlertList={allAlertList}
        toggleRightPane={this.toggleRightPane}
        toggleFilter={this.toggleAlertsFilter}
        toggleParameters={this.toggleAlertParameters}
        toggleRpDetails={this.toggleRpDetails}
        toggleSort={this.alertToggleSort}
        isRpOpen={isRpOpen}
        toggleDisplayUp={this.toggleDisplayUp}
        closeRightPane={this.closeRightPane}
        alertHiddenFields={sendHiddenFields}
        defaultDisplay={defaultAlertDisplay}
        name={name} />);
  };

  renderCase = (name) => {
    const { maxRecords, allAlertList, pageReturned, rightPaneDetails, maxRecordPerCasePage } = this.props;
    const { isRpOpen, sendCaseHiddenFields, defaultCaseDisplay } = this.state;

    return (
      <CustomGrid
        maxRecordPerCasePage={maxRecordPerCasePage}
        isCase
        onDescPopover={this.handleDescModal}
        rightPaneDetails={rightPaneDetails}
        sortedCasesTableListFetch={this.sortedCasesTableListFetch}
        sortedAlertTableListFetch={this.sortedAlertTableListFetch}
        sortedCasesListFetch={this.sortedCasesListFetch}
        sortedAlertListFetch={this.sortedAlertListFetch}
        pageReturned={pageReturned}
        maxRecords={maxRecords}
        allAlertList={allAlertList}
        toggleRightPane={this.toggleRightPane}
        toggleFilter={this.toggleCasesFilter}
        toggleParameters={this.toggleCaseParameters}
        toggleRpDetails={this.toggleRpDetails}
        toggleSort={this.caseToggleSort}
        isRpOpen={isRpOpen}
        toggleDisplayUp={this.toggleCaseDisplayUp}
        closeRightPane={this.closeRightPane}
        alertHiddenFields={sendCaseHiddenFields}
        defaultDisplay={defaultCaseDisplay}
        name={name} />)
  }

  render() {
    const { allAlertList, allRightPaneHistoryData, allRightPaneRelatedData,
      isLoading, uploadDocument, downloadDocument, userId, availableLists, commentHistory } = this.props;
    const { isRpOpen, rightPaneDetails, isAlertsFilterVisible, isCasesFilterVisible,
      isAlertSortVisible, isCaseSortVisible, isDisplayUpVisbile,
      isCaseDisplayUpVisbile, isAlertParametersVisible, isCaseParametersVisible } = this.state;
    return (
      <div className="c-content__view js-content__view">
        <div className={`o-loader js-loader ${isLoading ? 'is-loading' : ''}`}></div>
        {isAlertsFilterVisible && this.alertsFilterPopOver()}
        {isCasesFilterVisible && this.CasesFilterPopOver()}
        {isAlertParametersVisible && this.parametersPopOver()}
        {isCaseParametersVisible && this.parametersPopOver()}

        <CommentModal
          isOpen={this.state.isCommentModalVisible}
          title="Comment"
          author={this.props.userId}
          comments={this.props.commentHistory}
          handleSubmit={this.handleCommentSubmit}
          changeVisbility={this.handleCommentModal} />

        {this.state.isRpDetailsVisible && this.rpDetailsPopOver()}
        {this.renderDescriptionPopover()}
        {isAlertSortVisible && this.alertSortPopOver()}
        {isCaseSortVisible && this.caseSortPopOver()}
        {isDisplayUpVisbile && this.displayUserPreference()}
        {isCaseDisplayUpVisbile && this.caseDisplayUserPreference()}
        <Switch>
          <Redirect exact path="/dashboard/alerts" to="/dashboard/alerts/my_alerts" />
          <Route path="/dashboard/alerts/my_alerts" render={() => this.renderAlert('my_alerts')} />
          <Route path="/dashboard/alerts/today" render={() => this.renderAlert('today')} />
          <Route path="/dashboard/alerts/yesterday" render={() => this.renderAlert('yesterday')} />
          <Route path="/dashboard/alerts/earlier_this_week" render={() => this.renderAlert('earlier_this_week')} />
          <Route path="/dashboard/alerts/last_week" render={() => this.renderAlert('last_week')} />
          <Route path="/dashboard/alerts/two_weeks_ago" render={() => this.renderAlert('two_weeks_ago')} />
          <Route path="/dashboard/alerts/three_weeks_ago" render={() => this.renderAlert('three_weeks_ago')} />
          <Route path="/dashboard/alerts/four_weeks_ago" render={() => this.renderAlert('four_weeks_ago')} />
          <Route path="/dashboard/alerts/alerts_older" render={() => this.renderAlert('alerts_older')} />
          <Route path="/dashboard/alerts/my_cases" render={() => this.renderCase('my_cases')} />
          <Route path="/dashboard/alerts/this_month" render={() => this.renderCase('this_month')} />
          <Route path="/dashboard/alerts/earlier_this_semester" render={() => this.renderCase('earlier_this_semester')} />
          <Route path="/dashboard/alerts/last_semester" render={() => this.renderCase('last_semester')} />
          <Route path="/dashboard/alerts/cases_older" render={() => this.renderCase('cases_older')} />
        </Switch>
        <RightPane
          rightPaneRelatedFetch={this.rightPaneRelatedFetch}
          rightPaneHistoryFetch={this.rightPaneHistoryFetch}
          isRpOpen={isRpOpen}
          allRightPaneHistoryData={allRightPaneHistoryData}
          allAlertList={allAlertList}
          allRightPaneRelatedData={allRightPaneRelatedData}
          rightPaneDetails={rightPaneDetails}
          onCommentModal={this.handleCommentModal}
          onDescPopover={this.handleDescModal}
          onFileUpload={uploadDocument}
          onFileDownload={downloadDocument}
          userId={userId}
          availableLists={availableLists}
          commentsLength={commentHistory && commentHistory.length} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  commentHistory: state.alertsReducer.entityCommentForEntityWithHistory,
  allAlertList: state.alertsReducer.allAlertList,
  paginatedList: state.alertsReducer.paginatedList,
  maxRecords: state.alertsReducer.maxRecords,
  pageReturned: state.alertsReducer.pageReturned,
  alertIdSelectedSb: state.alertsReducer.alertIdSelectedSb,
  allRightPaneHistoryData: state.alertsReducer.allRightPaneHistoryData,
  allRightPaneRelatedData: state.alertsReducer.allRightPaneRelatedData,
  userId: state.loginReducer.userDetails.user.userId,
  id: state.loginReducer.userDetails.user.id,
  availableLists: state.loginReducer.availableLists,
  isLoading: state.commonReducer.isLoading,
  alertUserPreferenceList: state.loginReducer.alertUserPreferenceList,
  AlertsListFields: state.loginReducer.AlertsListFields,
  caseListFields: state.loginReducer.caseListFields,
  alertListDetails: state.loginReducer.alertListDetails,
  caseListDetails: state.loginReducer.caseListDetails,
  defaultCaseDisplay: state.loginReducer.defaultCaseDisplay,
  defaultAlertDisplay: state.loginReducer.defaultAlertDisplay,
  maxRecordPerAlertPage: state.loginReducer.maxRecordPerAlertPage,
  maxRecordPerCasePage: state.loginReducer.maxRecordPerCasePage,
  alertCaseAvailableFields: state.loginReducer.alertCaseAvailableFields
})

const mapDispatchToProps = (dispatch) => ({
  getAllAlertSortedList: (alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay) => dispatch(getAllAlertSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay)),
  getAllCasesSortedList: (alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerCasePage, defaultCaseDisplay) => dispatch(getAllCasesSortedList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerCasePage, defaultCaseDisplay)),
  getRightPaneRelated: (id, userId, availableLists) => dispatch(getRightPaneRelated(id, userId, availableLists)),
  getRightPaneHistory: (selectedListId, userId) => dispatch(getRightPaneHistory(selectedListId, userId)),
  saveUserPreferenceDisplay: (id, userId, UpArray) => dispatch(saveUserPreferenceDisplay(id, userId, UpArray)),
  getAllAlertFilterList: (alertId, id, userId, availableLists, name, filterArray, alertListDetails, defaultAlertDisplay) => dispatch(getAllAlertFilterList(alertId, id, userId, availableLists, name, filterArray, alertListDetails, defaultAlertDisplay)),
  getAllCaseFilterList: (caseId, id, userId, availableLists, name, filterArray, caseListDetails, defaultCaseDisplay) => dispatch(getAllCaseFilterList(caseId, id, userId, availableLists, name, filterArray, caseListDetails, defaultCaseDisplay)),
  saveComment: (uid, comment, alertUid, userId) => dispatch(saveComment(uid, comment, alertUid, userId)),
  uploadDocument: (uid, file, userId, availableLists) => dispatch(uploadDocument(uid, file, userId, availableLists)),
  downloadDocument: (filePath) => dispatch(downloadDocument(filePath)),
  getCommentHistory: (alertID) => dispatch(getCommentHistory(alertID))
})

/* eslint-disable */
export default AlertsDashboard = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertsDashboard))
