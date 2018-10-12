import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { logoutUser } from './../../login/service/action';
import {formatMessage} from './../../common/translation/Translate';
import { LoginInfoDTO } from './../../model/dto/loginInfoDTO';
import icon from './../../constants/icons/IconsEnum';


interface stateTopbar {
  notification: boolean,
  message: boolean,
  userMenuOpened: boolean
}

interface propsTopBar {
  title: string,
  loginInfoDTO: LoginInfoDTO
}

export class Topbar extends React.Component<propsTopBar, stateTopbar> {
  constructor(props: propsTopBar) {
    super(props);
    this.state = {
      notification: false,
      message: false,
      userMenuOpened: false
    }
    this.openUserMenu = this.openUserMenu.bind(this);
  }

  notification(notification: boolean) {
    if(notification) {
      return(<span className="o-notification "></span>)
    }
  }

  //for the onclick message/notification/settings/logout/help and about use an actions

  openUserMenu() {
    this.setState({...this.state, userMenuOpened: !this.state.userMenuOpened});
  }


  render() {
    return (
      <header className="c-top-bar js-top-bar">
        <div className="c-top-bar__inner">
          <div className="o-heading js-top-bar__title">
            <h1 className="o-heading__title">{this.props.title}</h1>
          </div>
          <ul className="g-list g-list--extra-spacing g-list--inline">
            <li className="g-list__item">
              <button className="o-btn o-btn--transparent" type="button">{formatMessage('topbar.messages')}{this.notification}</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--transparent" type="button">{formatMessage('topbar.notification')}{this.notification}</button>
            </li>
            <li className="g-list__item">
            <button className="o-btn o-btn--transparent o-btn--small-icon js-popover-trigger" type="button" onClick={this.openUserMenu}>{/* TODO this.props.loginInfoDTO.user.name*/ 'adminesch'}
                <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.98 4.97" width="100%" height="100%" className="o-icon">
                  <title>{icon.CARETDOWN.title}</title>
                  <use xlinkHref={icon.CARETDOWN.url}></use>
                </svg>
            </button>
          </li>
        </ul>
    </div>
    <div className={!this.state.userMenuOpened? 'c-popover js-popover is-hidden' : 'c-popover js-popover'}  >
      <div className="c-popover__body">
        <ul className="g-list">
          <li className="g-list__item">
            <button className="o-btn o-btn--inline" type="button">{formatMessage('topbar.settings')}</button>
          </li>
          <li className="g-list__item">
            <button className="o-btn o-btn--inline" type="button">{formatMessage('topbar.help')}</button>
          </li>
          <li className="g-list__item">
            <button className="o-btn o-btn--inline" type="button">{formatMessage('topbar.about')}</button>
          </li>
          <li className="g-list__item">
            <button className="o-btn o-btn--inline" type="button">{formatMessage('topbar.logout')}</button>
          </li>
        </ul>
      </div>
    </div>
</header>
    );
  }
}
