import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop'
import _map from 'lodash/map';
import _includes from 'lodash/includes';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';

import Custombtn from 'src/components/customBtn/customBtn';
import CustomCheckBox from 'src/components/customCheckBox/customCheckBox';
import CustomPopOver from 'src/components/customPopOver/customPopOver';
import CusTableView from 'src/components/CusTableView/cusTableView';
import CusPagination from 'src/components/CusPagination/cusPagination';
import CusCheckBox from '../CusCheckBox/cusCheckBox';
// import CusHorizontalCard from '../CusHorizontalCard/cusHorizontalCard';

import 'src/common/css/mockcss/style.css';

export default class GridContent extends Component {
  static propTypes = {
    toggleRightPane: PropTypes.func,
    addSelectedItems: PropTypes.func,
    selectedItems: PropTypes.array,
    gridMenu: PropTypes.func,
    gridProperties: PropTypes.bool,
    contentGridCheckBox: PropTypes.bool,
    allAlertList: PropTypes.array.isRequired,
    name: PropTypes.string,
    isCase: PropTypes.bool,
    isTableView: PropTypes.bool,
    sortedAlertListFetch: PropTypes.func,
    sortedCasesListFetch: PropTypes.func,
    sortedCasesTableListFetch: PropTypes.func,
    hideGridMenu: PropTypes.func,
    sortedAlertTableListFetch: PropTypes.func,
    maxRecords: PropTypes.number,
    pageReturned: PropTypes.number,
    // Todo one of type to stable one type
    maxRecordPerAlertPage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    maxRecordPerCasePage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    isIconView: PropTypes.bool,
    alertHiddenFields: PropTypes.object,
    rightPaneDetails: PropTypes.object,
    isRpOpen: PropTypes.bool
  }
  static defaultProps = {
    toggleRightPane: _noop,
    addSelectedItems: _noop,
    selectedItems: [],
    gridMenu: _noop,
    rightPaneDetails: {},
    gridProperties: false,
    contentGridCheckBox: false,
    name: 'customcheckbox',
    isCase: false,
    isTableView: false
  }

  state = {
    pageNumber: 1,
    popUpStyle: '',
    isAlertDetails: false,
    tableViewPopUpStyle: '',
    name: 'default',
    creationUser: 'default',
    uid: 'default',
    priority: 'default',
    score: 'default',
    creationDtg: 'default',
    lastUpdateUser: 'default',
    lastUpdateDtg: 'default',
    assignTo: 'default',
    assignToGroup: 'default',
    dueDate: 'default',
    workflowStatusData: 'default',
    description: 'default',
    ruleName: 'default',
    organizationId: 'default'
  }
  riskLevelColor = (riskLevel, score) => {
    switch (true) {
      case (riskLevel.severe < score):
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--severe';
      case (riskLevel.high < score && riskLevel.severe >= score):
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--high';
      case (riskLevel.elevated < score && riskLevel.high >= score):
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--elevated';
      case (riskLevel.guarded < score && riskLevel.elevated >= score):
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--guarded';
      default:
        return 'c-horizontal-card__color-coding c-horizontal-card__color-coding--low';
    }
  }
  priorityStatus = (priority) => {
    switch (priority) {
      case 0:
        return 'Low';
      case 1 :
        return 'Medium';
      default :
        return 'High';
    }
  }
  toggleMap = { default: 'asc', asc: 'desc', desc: 'default' }
  orderMap = { default: '', asc: 'is-asc', desc: 'is-desc' };
  togglePaginate = (pageNumber) => {
    // NOTE : Actual api pagenumber and UI pagenumber differnt is 1 so here -1 is availed
    this.setState({ pageNumber: pageNumber - 1 }, () => !this.props.isCase ? this.props.sortedAlertListFetch(this.state.pageNumber, this.props.maxRecordPerAlertPage) : this.props.isCase ? this.props.sortedCasesListFetch(this.state.pageNumber, this.props.maxRecordPerCasePage) : null)
  }
  tmpMapCase = (event) => {
    const key = event.target.id;
    const value = this.toggleMap[this.state[key]];
    this.setState({ [key]: value });
    this.props.sortedCasesTableListFetch(key, value !== 'default' ? value : null);
  }
  tmpMap = (event) => {
    const key = event.target.id;
    const value = this.toggleMap[this.state[key]];
    this.setState({ [key]: value });
    this.props.sortedAlertTableListFetch(key, value !== 'default' ? value : null);
  }
  title = [{ id: 'description', label: 'NAME' }, { id: 'creationUser', label: 'CREATED BY' }, { id: 'uid', label: 'UID NUMBER' },
    { id: 'priority', label: 'PRIORITY' }, { id: 'score', label: 'SCORE' }, { id: 'creationDtg', label: 'CREATION DATE' },
    { id: 'lastUpdateUser', label: 'UPDATED BY' }, { id: 'lastUpdateDtg', label: 'LAST UPDATED DATE' }, { id: 'assignTo', label: 'ASSIGN TO' },
    { id: 'assignToGroup', label: 'ASSIGN TO GROUP' }, { id: 'dueDate', label: 'DUE DATE' }, { id: 'workflowStatusData', label: 'WORKFLOW STATUS' },
    { id: 'description', label: 'DESCRIPTION' }, { id: 'ruleName', label: 'RULE NAME' }, { id: 'organizationId', label: 'ORGANIZATION UNIT' }]
  render() {
    const { allAlertList, toggleRightPane, addSelectedItems, isCase, hideGridMenu, toggleRpDetails,
      selectedItems, gridMenu, gridProperties, name, isRpOpen, alertHiddenFields,
      isIconView, isTableView, maxRecords, pageReturned, commentsLength, onCommentModal,
      maxRecordPerCasePage, maxRecordPerAlertPage } = this.props;
    const { popUpStyle, isAlertDetails } = this.state;
    const hasVisibleCheckbox = selectedItems.length === 0 ? '' : 'has-visible-checkbox';
    const isContentMenuVisible = gridProperties ? '' : 'is-hidden';
    const popUpSize = (i) => {
      this.setState({ popUpStyle: 55 + i * 66 });
    }
    const hidePopOver = () => {
      hideGridMenu();
    }
    const toggleAlertDetails = () => {
      this.setState({isAlertDetails: !isAlertDetails})
    }
    const propertiesPopOver = () => (
      <CustomPopOver hidePopOver={hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isContentMenuVisible}`} data-container=".js-content__scrollable"
          style={{ top: popUpStyle, left: isRpOpen ? '625px' : '905px' }}>
          <div className="c-popover__body">
            <div className="c-actions-list">
              <ul className="c-actions-list__list">
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.validate' } />        </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.properties' } />
                  </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.history' } />
                  </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.duplicate' } />
                  </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.delete' } />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CustomPopOver>
    )
    // const tableViewPropertiesPopOver = () => (
    //   <CustomPopOver hidePopOver={hidePopOver}>
    //     <div className={`c-popover js-popover is-ready ${isContentMenuVisible}`} data-container=".js-content__scrollable"
    //       style={{ top: tableViewPopUpStyle }}>
    //       <div className="c-popover__body">
    //         <div className="c-actions-list">
    //           <ul className="c-actions-list__list">
    //             <li className="c-actions-list__item">
    //               <button className="o-btn o-btn--inline" type="button">
    //                 Edit        </button>
    //             </li>
    //             <li className="c-actions-list__item">
    //               <button className="o-btn o-btn--inline" type="button">
    //                 Validate        </button>
    //             </li>
    //             <li className="c-actions-list__item">
    //               <button className="o-btn o-btn--inline" type="button">
    //                 Properties         </button>
    //             </li>
    //             <li className="c-actions-list__item">
    //               <button className="o-btn o-btn--inline" type="button">
    //                 History        </button>
    //             </li>
    //             <li className="c-actions-list__item">
    //               <button className="o-btn o-btn--inline" type="button">
    //                 Duplicate        </button>
    //             </li>
    //             <li className="c-actions-list__item">
    //               <button className="o-btn o-btn--inline" type="button">
    //                 Delete        </button>
    //             </li>
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </CustomPopOver>
    // )
    return (
      <Fragment>
        <div className="c-content__scrollable js-content__scrollable">
          {isIconView && <Fragment>
            {/* <CusHorizontalCard cardList={allAlertList} cardContains={['name', 'uid', 'score', 'priority', 'dueDate']} /> */}
            {!isCase && allAlertList.map((each, i) =>
              <Fragment key={i}>
                <div className={`c-horizontal-card  js-horizontal-card ${hasVisibleCheckbox}`} key={i + 1}>
                  <ul className="c-horizontal-card__data js-card-data"
                    onClick={() => {
                      toggleRightPane(each.uid);
                    }}>
                    {each.orgUnitObj ? <span className={this.riskLevelColor(each.orgUnitObj.riskLevel, each.score)}></span>
                      : <span className="c-horizontal-card__color-coding c-horizontal-card__color-coding--severe js-card-color">
                      </span>}
                    <li className="c-horizontal-card__data-value" title={each.scenarioName} aria-label="Title">
                      <CusCheckBox name={each.uid} label=''
                        checked={_includes(selectedItems, each.uid)}
                        onChange={() => addSelectedItems(each.uid)}/>
                      {/* TODO : put scenarioName instead of name once backend name changed */}
                      <p className="c-horizontal-card__label">{!alertHiddenFields.name && each.name}</p>
                    </li>
                    <li className="c-horizontal-card__data-value" title={each.uid} aria-label="Reference"
                      onDoubleClick={toggleRpDetails}>
                      <span id={each.uid} className='o-badge c-horizontal-card__badge'>
                        {!alertHiddenFields.uid && each.uid}
                      </span>
                    </li>
                    <li className="c-horizontal-card__data-value" title={each.score} aria-label="Rating">{!alertHiddenFields.score && each.score}</li>
                    <li className={`c-horizontal-card__data-value ${this.priorityStatus(each.priority)}`} title={each.priority} aria-label="Priority">{!alertHiddenFields.priority && this.priorityStatus(each.priority)}</li>
                    <li className="c-horizontal-card__data-value" title={each.dueDate} aria-label="dueDate">{moment(each.dueDate, 'DD/MM/YYYY HH:mm:ss').format('ddd MMM YY HH:mm:ss')}</li>
                  </ul>
                  <Custombtn className="o-more-btn c-horizontal-card__more-btn js-popover-trigger"
                    onClick={() => {
                      gridMenu();
                      popUpSize(i)
                    }}>
                    <span className="u-visually-hidden">Actions</span>
                  </Custombtn>
                </div>
              </Fragment>
            )}
            {isCase && allAlertList.map((each, i) =>
              <Fragment key={i}>
                <div className={`c-horizontal-card  js-horizontal-card ${hasVisibleCheckbox}`} key={i + 1} onClick={() => {
                  toggleRightPane(each.uid);
                }}>
                  <ul className="c-horizontal-card__data js-card-data">
                    {each.orgUnitObj ? <span className={this.riskLevelColor(each.orgUnitObj.riskLevel, each.score)}></span>
                      : <span className="c-horizontal-card__color-coding c-horizontal-card__color-coding--severe js-card-color">
                      </span>}
                    <li className="c-horizontal-card__data-value" title={each.description} aria-label="Title">
                      <fieldset className="o-toggle">
                        <CustomCheckBox type="checkbox" className="o-toggle__checkbox js-horizontal-card__checkbox" name={name}
                          id={`${name}-${i}`} onClick={() => {
                            addSelectedItems(each);
                          }} />
                        <label className="o-toggle__label" htmlFor={`${name}-${i}`}>
                          <span className="u-visually-hidden">Alert
                          </span>
                        </label>
                      </fieldset>
                      <p className="c-horizontal-card__label">{!alertHiddenFields.description && each.description}</p>
                    </li>
                    <li className="c-horizontal-card__data-value" title={each.uid} aria-label="Reference"
                      onDoubleClick={toggleRpDetails}>
                      <span id={each.uid} className='o-badge c-horizontal-card__badge'>
                        {!alertHiddenFields.uid && each.uid}
                      </span>
                    </li>
                    <li className="c-horizontal-card__data-value" title={each.assignTo} aria-label="Rating">{!alertHiddenFields.assignTo && each.assignTo}</li>
                    <li className="c-horizontal-card__data-value" title={each.assignToGroup} aria-label="Rating">{!alertHiddenFields.assignToGroup && each.assignToGroup}</li>
                  </ul>
                  <Custombtn className="o-more-btn c-horizontal-card__more-btn js-popover-trigger" onClick={() => {
                    gridMenu();
                    popUpSize(i)
                  }
                  }>
                    <span className="u-visually-hidden">Actions</span>
                  </Custombtn>
                </div>
              </Fragment>
            )}
            {gridProperties && propertiesPopOver()}
          </Fragment>}
          {!isCase && isTableView && <CusTableView
            head={this.title}
            body={allAlertList}
            alertHiddenFields={alertHiddenFields}
            toggleRightPane={toggleRightPane}
            id={_map(this.title, (each, i) => this.orderMap[this.state[each.id]])}
            click={this.tmpMap}/>}
          {isCase && isTableView && <CusTableView
            head={this.title}
            body={allAlertList}
            alertHiddenFields={alertHiddenFields}
            toggleRightPane={toggleRightPane}
            id={_map(this.title, (each, i) => this.orderMap[this.state[each.id]])}
            click={this.tmpMapCase}/>}
        </div>
        {isCase && <CusPagination
          maxRecords={parseInt(maxRecords, 10)}
          pageReturned={pageReturned}
          recordsPerPage={parseInt(maxRecordPerCasePage, 10)}
          onChange={this.togglePaginate}
        />}
        {!isCase && <CusPagination
          maxRecords={parseInt(maxRecords, 10)}
          pageReturned={pageReturned}
          recordsPerPage={parseInt(maxRecordPerAlertPage, 10)}
          onChange={this.togglePaginate}
        />}
      </Fragment>
    )
  }
}
