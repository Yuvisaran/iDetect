import * as React from 'react';
import icon, { iconInterface } from './../../constants/icons/IconsEnum';
import {formatMessage} from './../../common/translation/Translate';

interface Props {
  analysis?: boolean,
  dashboard?: boolean,
  data?: boolean,
  detection?: boolean,
  admin?: boolean
}

interface State {
  closed: boolean, //whether or not the panel is closed
  analysis?: boolean, //a boolean to chose wich panel is active ? should switch to an enum  probably TODO
  dashboard?: boolean,
  data?: boolean,
  detection?: boolean,
  admin?: boolean
}

export class SecondaryNav extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {closed: false};
    this.buttonOnClickClose = this.buttonOnClickClose.bind(this);
  }

  buttonOnClickClose() {
    this.setState({closed: !this.state.closed});
  }

  render() {
    let className = 'c-main-nav__inner c-main-nav__inner--primary js-navigation-primary' + (this.state.closed ? ' is-hidden' : '');
    return (
      <div className={className} id="main-nav">
        <button className="c-main-nav__close-btn" id="close-btn" onClick={this.buttonOnClickClose}>
          <img className="o-icon o-icon--caret-left" src={icon.CARETLEFTCLOSE.url}></img>
        </button>
        <div className="c-main-nav__brand"></div>
        <ul className="c-main-nav__list">
          {dashboard(this.props.dashboard)}
          {analysis(this.props.analysis)}
          {detection(this.props.detection)}
          {data(this.props.data)}
          {admin(this.props.admin)}
        </ul>
      </div>
    );
  }

}

const activeLink = (active: boolean) => {
  if (active) {
    return ('c-main-nav__button js-navigation-trigger is-active');
  } else {
    return ('c-main-nav__button js-navigation-trigger');
  }
}

const dashboard = (active: boolean) => {
  return navButton(icon.ALERTSNAV, 'dashboard', active);
}

const analysis = (active: boolean) => {
  return navButton(icon.ANALYSISNAV, 'analysis', active);
}

const detection = (active: boolean) => {
  return navButton(icon.DETECTIONNAV, 'detection', active);
}

const data = (active: boolean) => {
  return navButton(icon.DATANAV, 'data', active);
}

const admin = (active: boolean) => {
  return navButton(icon.ADMINNAV, 'admin', active);
}

const navButton = (icon: iconInterface, nav: string, active: boolean ) => {
  return(
  <li className="c-main-nav__item">
    <a className={activeLink(active)} href={'/' + nav} data-navigation={nav}> <span className="c-main-nav__icon">
      <img className="o-icon o-icon--rules-medium" src={icon.url}></img>

      <span className="o-tooltip o-tooltip--main-nav">
        <span className="o-tooltip__arrow"></span> {formatMessage('global.' + nav)} </span>
    </span> <span className="c-main-nav__text">{formatMessage('global.' + nav)}</span> </a>
  </li>)
}
