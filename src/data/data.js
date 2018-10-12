import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { getTreeFolderList, getChildrenListByParentID } from 'src/data/service/action';
import _noop from 'lodash/noop';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import { FormattedMessage } from 'react-intl';

import { topBarTitleSelectedSb } from 'src/alerts/service/action';

import CusRowCard from 'src/components/CusRowCard';
import CustomBtn from 'src/components/customBtn/customBtn';

const mapListTypeToIcon = {
  0: 'folder',
  1: 'document',
  2: 'list',
  3: 'list'
}

const mapStateToProps = (state) => ({
  childrenListByParentId: state.dataReducer.childrenListByParentId,
  userId: state.loginReducer.userDetails.user.userId,
  id: state.loginReducer.userDetails.user.id,
  name: state.loginReducer.userDetails.user.name
})

const mapDispatchToProps = (dispatch) => ({
  getChildrenListByParentID: (dataID, id, userId, name) => dispatch(getChildrenListByParentID(dataID, id, userId, name)),
  topBarTitleSelectedSb: (data) => dispatch(topBarTitleSelectedSb(data)),
  getTreeFolderList: (id, userId, name) => dispatch(getTreeFolderList(id, userId, name))
})

@connect(mapStateToProps, mapDispatchToProps)
export default class DataDashboard extends Component {
  static propTypes = {
    getTreeFolderList: PropTypes.func,
    topBarTitleSelectedSb: PropTypes.func,
    getChildrenListByParentID: PropTypes.func,
    userId: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    childrenListByParentId: PropTypes.array
  }

  static defaultProps = {
    getTreeFolderList: _noop,
    getChildrenListByParentID: _noop
  }

  componentDidMount() {
    const { id, userId, name } = this.props;

    this.props.getTreeFolderList(id, userId, name);
    this.props.topBarTitleSelectedSb('My Data')
  }

  dataListAction = (dataID) => {
    const { id, userId, name } = this.props;
    this.props.getChildrenListByParentID(dataID, id, userId, name)
  }

  toggleFilter = () => {

  }

  showingAlert = () => {
    return (
      <div className="no-more-alert">
        <FormattedMessage id={ 'global.noMoreFileAvailable' } />
      </div>);
  }

  render() {
    const addButton = <FormattedMessage id={ 'global.new' } />;

    return (
      <div className="c-content__view">
        <div className="c-content__inner-wrapper">
          <div className="c-content__actions">
            <ul className="g-list g-list--spacing g-list--inline">
              <li className="g-list__item">
                {(addButton && <button className="o-btn o-btn--primary" type="button" style={{ top: '15px' }}>
                  {addButton}
                </button>)}
              </li>
            </ul>
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

          <div style={{ paddingLeft: '2.5rem' }} className="c-content__scrollable">
            {_isEmpty(this.props.childrenListByParentId) && this.showingAlert()}
            {_map(this.props.childrenListByParentId,
              (item, i) => (
                <CusRowCard key={i}
                  id={item.id}
                  icon={mapListTypeToIcon[item.listType]}
                  label={item.label}
                  name={item.description}
                  onAction={this.dataListAction} />
              ))}

          </div>
        </div>
      </div>
    )
  }
}
