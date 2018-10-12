import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import _noop from 'lodash/noop';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import CusRowCard from 'src/components//CusRowCard';
import CustomBtn from 'src/components/customBtn/customBtn';
import { topBarTitleSelectedSb } from 'src/alerts/service/action';

class AdminGrid extends Component {
  static propTypes = {
    userId: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    history: PropTypes.object,
    push: PropTypes.func,
    topBarTitleSelectedSb: PropTypes.func,
    adminDataList: PropTypes.array,
    fetchAttribute: PropTypes.array
  }

  static defaultProps = {
    userId: '',
    id: null,
    name: '',
    history: {},
    push: _noop,
    topBarTitleSelectedSb: _noop,
    adminDataList: [],
    fetchAttribute: []
  }

  emptyAdminList = () => {
    return (
      <div className="no-more-alert">
        <FormattedMessage id={ 'global.noMoreData' } />
      </div>);
  }
  render() {
    const { adminDataList, fetchAttribute } = this.props;

    const customProperties = [{
      property: <FormattedMessage id={ 'global.edit' } />,
      actionOnClick: _noop
    }, {
      property: <FormattedMessage id={ 'global.showAttributes' } />,
      actionOnClick: () => {
        this.props.history.push('/dashboard/admin/logical_views/attribute');
        this.props.topBarTitleSelectedSb("Logical view's Attribute");
      }
    }];

    return (
      <div className="c-content__view">
        <div className="c-content__inner-wrapper">
          <div className="c-content__actions">
            <ul className="g-list g-list--spacing g-list--inline">
              <li className="g-list__item">
                <CustomBtn className="o-btn o-btn--neutral js-popover-trigger  o-btn has-popover-displayed" onClick={this.toggleFilter}>
                  <svg width="16" height="10" viewBox="0 0 16 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--prepended">
                    <title>filter-icon</title>
                    <path d="M1.438 1.5h13.124M3.188 5h9.624M4.938 8.5h6.125" stroke="#4F40F4" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <FormattedMessage id={ 'global.filter' } />
                </CustomBtn>
              </li>
              <li className="g-list__item">
                <CustomBtn className="o-btn o-btn--neutral">
                  <svg width="16" height="13" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.37 11.64" className="o-icon o-icon--prepended">
                    <title>sort-icon</title>
                    <path d="M3.72.23a.7.7 0 0 0-1 0L.2 2.77a.7.7 0 0 0 1 1l1.37-1.39v8.56a.7.7 0 0 0 1.4 0V2.47l1.27 1.29a.7.7 0 0 0 1-1zm9.44 7.56a.7.7 0 0 0-1 0L10.8 9.17V.7a.7.7 0 0 0-1.4 0v8.38L8.12 7.79a.7.7 0 1 0-1 1l2.52 2.54a.7.7 0 0 0 1 0l2.52-2.54a.7.7 0 0 0 0-1z" />
                  </svg>
                  <FormattedMessage id={ 'global.sort' } /></CustomBtn>
              </li>
              <li className="g-list__item">
                <div className="c-multi-btn">
                  <CustomBtn className="o-btn o-btn--tooltip c-multi-btn__item is-active js-row-cards-view-trigger">
                    <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                      <title>Combined Shape</title>
                      <path d="M4.136 1.69a.7.7 0 0 1 0-1.4H13.3a.7.7 0 0 1 0 1.4H4.136zm0 4.01a.7.7 0 0 1 0-1.4H13.3a.7.7 0 0 1 0 1.4H4.136zm0 4.01a.7.7 0 0 1 0-1.4H13.3a.7.7 0 0 1 0 1.4H4.136zM.7 1.69a.7.7 0 0 1 0-1.4h.573a.7.7 0 0 1 0 1.4H.7zm0 4.01a.7.7 0 0 1 0-1.4h.573a.7.7 0 0 1 0 1.4H.7zm0 4.01a.7.7 0 0 1 0-1.4h.573a.7.7 0 0 1 0 1.4H.7z" />
                    </svg>
                  </CustomBtn>
                  <CustomBtn className="o-btn o-btn--tooltip c-multi-btn__item is-active js-row-cards-view-trigger">
                    <svg width="14" height="10" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg" className="o-icon o-icon--list c-multi-btn__icon">
                      <title>Combined Shape</title>
                      <path d="M2.29 13.3a.7.7 0 0 1-1.4 0V.7a.7.7 0 0 1 1.4 0v12.6zm4.41 0a.7.7 0 0 1-1.4 0V.7a.7.7 0 0 1 1.4 0v12.6zm4.41 0a.7.7 0 0 1-1.4 0V.7a.7.7 0 0 1 1.4 0v12.6z" />
                    </svg>
                  </CustomBtn>
                </div>
              </li>
              <li className="g-list__item">
                <button className="o-btn o-btn--neutral o-btn--tooltip o-btn--tooltip-right" type="button" aria-label="Toggle sidebar">
                  <svg title="Toggle sidebar" className="o-icon o-icon--sidebar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 12" id="sidebar-icon" width="100%" height="100%"><title>Sidebar</title>
                      <path d="M9.332 11h-1.33V1h1.33v10zm3.797-.665a.206.206 0 0 0 .206-.206V1.871a.206.206 0 0 0-.206-.206H1.871a.206.206 0 0 0-.206.206v8.258c0 .114.092.206.206.206h11.258zm0 1.33H1.871a1.536 1.536 0 0 1-1.536-1.536V1.871c0-.848.688-1.536 1.536-1.536h11.258c.848 0 1.536.688 1.536 1.536v8.258c0 .848-.688 1.536-1.536 1.536z"></path></svg>
                  </svg>
                </button>
              </li>
            </ul>
          </div>

          <div className="c-content__scrollable">
            {_isEmpty(adminDataList) && this.emptyAdminList()}
            {_map(adminDataList,
              (item, i) => (
                <CusRowCard key={i}
                  id={item.id.toString()}
                  icon='logicalView'
                  label={item.description}
                  name={item.entityUid}
                  cardIndex={i}
                  fetchAttribute={fetchAttribute}
                  customProperties={customProperties} />
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  topBarTitleSelectedSb: (data) => dispatch(topBarTitleSelectedSb(data))
})
/* eslint-disable */
AdminGrid = connect(
  null,
  mapDispatchToProps
)(AdminGrid)
/* eslint-enable */

export default withRouter(AdminGrid);
