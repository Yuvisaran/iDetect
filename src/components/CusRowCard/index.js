import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import _isArray from 'lodash/isArray';
import Popover from 'react-popover';
import { FormattedMessage } from 'react-intl';


import { SVG_PATH } from '../../constants';

const defaultProperties = [{
  property: <FormattedMessage id={ 'global.properties' } />,
  actionOnClick: _noop
}, {
  property: <FormattedMessage id={ 'global.rename' } />,
  actionOnClick: _noop
}, {
  property: <FormattedMessage id={ 'global.duplicate' } />,
  actionOnClick: _noop
}, {
  property: <FormattedMessage id={ 'global.delete' } />,
  actionOnClick: _noop
}]

export default class CusRowCard extends Component {
  static propTypes = {
    // Todo: {state: "implicity required"} is nothing changed in given mocks
    id: PropTypes.string,
    icon: PropTypes.string,
    label: PropTypes.string,
    badge: PropTypes.string,
    name: PropTypes.string,
    onAction: PropTypes.func,
    customProperties: PropTypes.array,
    fetchAttribute: PropTypes.func,
    cardIndex: PropTypes.number
  };

  static defaultProps = {
    id: '',
    icon: 'folder',
    label: '',
    badge: '',
    name: '',
    onAction: _noop,
    customProperties: [],
    fetchAttribute: _noop,
    cardIndex: null
  };

  state = { isOptionVisible: false }

  renderSvg = () => {
    return (
      <svg title="rules" className="o-icon o-icon--rules o-icon--prepended" width="14" height="14" viewBox="0 0 14 14">
        <title>{this.props.icon}</title>
        {_isArray(SVG_PATH[this.props.icon])
          ? _map(SVG_PATH[this.props.icon],
            (item, i) => (<path key={i} d={item} />))
          : <path d={SVG_PATH[this.props.icon]} />}
      </svg>
    );
  }

  hideOption = () => {
    this.setState({ isOptionVisible: false })
  }

  toggleOption = () => {
    this.setState({ isOptionVisible: !this.state.isOptionVisible });
  }

  handleAction = () => {
    this.props.onAction(this.props.id);
  }
  render() {
    const { customProperties, fetchAttribute, cardIndex } = this.props;
    const allProperties = customProperties.length ? customProperties : defaultProperties;

    return (
      <div className="c-row-card js-row-card">
        <div className="c-row-card__toggle-wrapper">
          <fieldset className="o-toggle ">
            <input className="o-toggle__checkbox js-row-card__checkbox" type="checkbox" name="Alert" id="" value="1" />
            <label className="o-toggle__label" htmlFor="">
              <span className="u-visually-hidden">
                Data source language
              </span>
            </label>
          </fieldset>
          {this.renderSvg()}
        </div>
        <div className="c-row-card__content" onClick={this.handleAction}>
          <p className="c-row-card__label">
            {this.props.label}
          </p>
          <p className="c-row-card__name">
            {this.props.name.slice(0, 50)}
          </p>
          {this.props.badge && <span className="o-badge u-positive c-row-card__badge">
            {this.props.badge}
          </span>}
        </div>
        <Popover isOpen={this.state.isOptionVisible}
          place='below'
          tipSize={0.01}
          onOuterAction={this.hideOption}
          body={
            <div className="c-popover">
              <div className="c-popover__body">
                <div className="c-actions-list">
                  <ul className="c-actions-list__list">
                    {_map(allProperties, (item, index) => {
                      return (
                        <li className="c-actions-list__item" key={index} onClick={() => {
                          item.actionOnClick();
                          fetchAttribute(cardIndex);
                        }}>
                          <span className="o-btn o-btn--inline js-row-card-switch">
                            {item.property}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>}>

          <button className="o-more-btn c-row-card__more-btn o-more-btn--thin js-popover-trigger"
            type="button" onClick={this.toggleOption}>
            <span className="u-visually-hidden">Actions</span>
          </button>
        </Popover>
      </div>
    );
  }
}
