import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl';
import Popover from 'react-popover';

import {
  logoutUser
} from 'src/login/service/action';
import { topBarTitleSelectedSb } from 'src/alerts/service/action';

import Custombtn from 'src/components/customBtn/customBtn';
import 'src/common/css/mockcss/style.css';

class Topbar extends Component {
  constructor() {
    super()
    this.state = {
      topBarMenuVisible: false
    }
  }
  render() {
    const { topBarMenuVisible } = this.state;
    const { topBarTitleSelectedTitle, loggedUser } = this.props;

    const menuClick = () => {
      this.setState({ topBarMenuVisible: !this.state.topBarMenuVisible });
    }
    const hidePopOver = () => {
      this.setState({ topBarMenuVisible: false });
    }

    const handleLogoutUser = () => {
      this.props.logoutUser();
    }
    const topBarMenuPopOver = () => (
      <div className={`c-popover js-popover is-ready`} style={{ left: '-124px' }}>
        <div className="c-popover__body">
          <ul className="g-list">
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">
                <FormattedMessage id={ 'topBar.settings' } />
              </button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">
                <FormattedMessage id={ 'topBar.help' } />
              </button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">
                <FormattedMessage id={ 'topBar.about' } />
              </button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button" onClick={handleLogoutUser}>
                <FormattedMessage id={ 'topBar.logout' } />
              </button>
            </li>
          </ul>
        </div>
      </div>
    )
    return (
      <header className="c-top-bar">
        <div className="c-top-bar__inner">
          <div className="o-heading js-top-bar__title">
            {topBarTitleSelectedTitle === "Logical view's Attribute" &&
              <svg className='o-icon o-icon--folder c-tree-view__icon o-icon-rotate90'
                width="9" height="6" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  this.props.history.goBack();
                  this.props.topBarTitleSelectedSb('Logical views');
                }}>
                <title>Icon</title>
                <path d="M4.5 3.771L7.478.657l1.012.968-3.255 3.404a1.017 1.017 0 0 1-1.438.032l-.032-.032L.51 1.625 1.522.657 4.5 3.771z" />
              </svg>}
            <h1 className="o-heading__title">

              {topBarTitleSelectedTitle}</h1>
          </div>
          <ul className="c-button-group">
            <li className="c-button-group__item">
              <Custombtn className="o-btn o-btn--transparent">
                <FormattedMessage id={ 'topBar.messages' } />
                <span className="o-notification"></span>
              </Custombtn>
            </li>
            <li className="c-button-group__item">
              <Custombtn className="o-btn o-btn--transparent">
                <FormattedMessage id={ 'topBar.notifications' } />
              </Custombtn>
            </li>
            <li className="c-button-group__item">
              <Popover
                preferPlace ='row'
                place='below'
                isOpen={topBarMenuVisible}
                body={topBarMenuPopOver()}
                onOuterAction={hidePopOver}>
                <Custombtn className="o-btn o-btn--transparent o-btn--small-icon js-popover-trigger" onClick={menuClick}>
                  {loggedUser}
                  <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.98 4.97" width="100%" height="100%" className="o-icon o-icon--caret-down o-icon--appended">
                    <title>arrow-down-icon</title>
                    <path d="M3.92 4.97L0 1.13l.98-1 2.94 2.88L7 0l.98 1-4.06 3.97z" data-name="layouts/top-bar" />
                  </svg>
                </Custombtn>
              </Popover>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

Topbar.propTypes = {
  topBarTitleSelectedTitle: PropTypes.string.isRequired,
  logoutUser: PropTypes.func,
  history: PropTypes.object,
  topBarTitleSelectedSb: PropTypes.func,
  loggedUser: PropTypes.string
}

Topbar.defaultProps = {
  logoutUser: _noop,
  history: {}
}
const mapStateToProps = (state) => ({
  topBarTitleSelectedTitle: state.alertsReducer.topBarTitleSelectedSb
})

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
  topBarTitleSelectedSb: (data) => dispatch(topBarTitleSelectedSb(data))

})

/* eslint-disable */
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Topbar))
/* eslint-enable */
