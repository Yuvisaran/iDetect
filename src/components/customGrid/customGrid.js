import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import _difference from 'lodash/difference';
import _remove from 'lodash/remove';
import _noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';

import GridOptions from './gridOptions';
import GridContent from './gridContent';

import 'src/common/css/mockcss/style.css';
import '../../common/css/owncss/style.css';

export default class CustomGrid extends Component {
  static propTypes = {
    allAlertList: PropTypes.array.isRequired,
    toggleRightPane: PropTypes.func,
    sortedAlertTableListFetch: PropTypes.func,
    sortedCasesTableListFetch: PropTypes.func,
    sortedAlertListFetch: PropTypes.func,
    sortedCasesListFetch: PropTypes.func,
    toggleFilter: PropTypes.func,
    toggleParameters: PropTypes.func,
    pageReturned: PropTypes.number,
    maxRecords: PropTypes.number,
    // Todo one of type to stable one type
    maxRecordPerAlertPage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    maxRecordPerCasePage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    toggleSort: PropTypes.func,
    rightPaneDetails: PropTypes.object,
    toggleDisplayUp: PropTypes.func,
    alertHiddenFields: PropTypes.object,
    isRpOpen: PropTypes.bool,
    isCase: PropTypes.bool,
    name: PropTypes.string
  }

  static defaultProps = {
    toggleRightPane: _noop,
    toggleFilter: _noop,
    toggleParameters: _noop,
    toggleSort: _noop,
    toggleDisplayUp: _noop,
    alertHiddenFields: {},
    isRpOpen: false,
    isCase: false,
    name: ''
  }

  state = {
    gridProperties: false,
    isTableView: false,
    isIconView: true,
    selectedItems: []
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.allAlertList !== this.props.allAlertList) {
      this.setState({ selectedItems: [] });
    }
  }

  render() {
    const toggleBtnGrp = () => {
      this.setState({ contentGridCheckBox: !this.state.contentGridCheckBox });
    }
    const toggleTableView = () => {
      this.setState({ isTableView: true }, this.setState({ isIconView: false }))
    }
    const toggleIconView = () => {
      this.setState({ isIconView: true }, this.setState({ isTableView: false }))
    }
    const addSelectedItems = (item) => {
      let selectedItems = this.state.selectedItems;
      let currentItem = [item];
      if (_isEmpty(selectedItems)) {
        selectedItems.push(item);
        this.setState({ selectedItems: selectedItems });
      } else {
        let diff = _difference(currentItem, selectedItems);
        if (!_isEmpty(diff)) {
          selectedItems.push(item);
          this.setState({ selectedItems: selectedItems });
        } else {
          _remove(selectedItems, (each) => {
            return item === each;
          })
          this.setState({ selectedItems: selectedItems });
        }
      }
    }
    const { selectedItems, gridProperties, isIconView, isTableView } = this.state;
    const { allAlertList, toggleRightPane, toggleFilter, toggleParameters, name, toggleSort, isRpOpen,
      toggleDisplayUp, alertHiddenFields, isCase, sortedAlertTableListFetch, sortedCasesTableListFetch,
      rightPaneDetails, maxRecordPerCasePage, maxRecordPerAlertPage,
      pageReturned, maxRecords, sortedAlertListFetch, sortedCasesListFetch, toggleRpDetails,
      closeRightPane, commentsLength, onCommentModal } = this.props;
    if (_isEmpty(allAlertList)) {
      return (
        <div>
          {(isCase ? <div className="no-more-alert">
            <FormattedMessage id={ 'global.noMoreCases' } />
          </div> : <div className="no-more-alert">
            <FormattedMessage id={ 'global.noMoreAlerts' } />
          </div>)}
        </div>
      )
    }
    const gridMenu = () => {
      this.setState({ gridProperties: true });
    }
    const hideGridMenu = () => {
      this.setState({ gridProperties: false });
    }
    return (
      <div className="c-content__inner-wrapper ow__overflow-scroll">
        <GridOptions
          maxRecordPerCasePage={maxRecordPerCasePage}
          maxRecordPerAlertPage={maxRecordPerAlertPage}
          isCase={isCase}
          sortedAlertListFetch={sortedAlertListFetch}
          sortedCasesListFetch={sortedCasesListFetch}
          toggleFilter={toggleFilter}
          selectedItems={selectedItems}
          toggleRightPane={toggleRightPane}
          toggleParameters={toggleParameters}
          toggleSort={toggleSort}
          toggleDisplayUp={toggleDisplayUp}
          toggleTableView={toggleTableView}
          toggleIconView={toggleIconView}
          isTableView={isTableView}
          isRpOpen={isRpOpen}
          closeRightPane={closeRightPane} />
        <GridContent
          isCase={isCase}
          maxRecordPerAlertPage={maxRecordPerAlertPage}
          maxRecordPerCasePage={maxRecordPerCasePage}
          toggleRpDetails={toggleRpDetails}
          commentsLength={commentsLength}
          onCommentModal={onCommentModal}
          rightPaneDetails={rightPaneDetails}
          sortedAlertListFetch={sortedAlertListFetch}
          sortedAlertTableListFetch={sortedAlertTableListFetch}
          sortedCasesTableListFetch={sortedCasesTableListFetch}
          sortedCasesListFetch={sortedCasesListFetch}
          toggleBtnGrp={toggleBtnGrp}
          toggleRightPane={toggleRightPane}
          allAlertList={allAlertList}
          addSelectedItems={addSelectedItems}
          selectedItems={selectedItems}
          gridMenu={gridMenu}
          gridProperties={gridProperties}
          name={name}
          hideGridMenu={hideGridMenu}
          isRpOpen={isRpOpen}
          alertHiddenFields={alertHiddenFields}
          isIconView={isIconView}
          isTableView={isTableView}
          maxRecords={maxRecords}
          pageReturned={pageReturned} />
      </div>
    )
  }
}
