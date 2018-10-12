import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import _isArray from 'lodash/isArray';
import Popover from 'react-popover';

import { SVG_PATH } from '../../constants';

export default class RowCard extends Component {
  static propTypes = {
    // Todo: {state: "implicity required"} is nothing changed in given mocks
    id: PropTypes.string,
    cardList: PropTypes.array,
    cardContains: PropTypes.array,
    badge: PropTypes.string,
    name: PropTypes.string,
    onAction: PropTypes.func
  };

  static defaultProps = {
    id: '',
    badge: '',
    name: '',
    onAction: _noop
  };

  state = {
    isOptionVisible: false
  }

  componentWillReceiveProps (newProps) {
    if (this.props !== newProps) {
      this.forceUpdate();
    }
  }

  render() {
    const { cardList, cardContains } = this.props;

    return (
      _map(cardList, (each, i) =>
        <div key={i} style={{paddingLeft: '18px'}} className="c-horizontal-card js-horizontal-card has-visible-checkbox" data-alert="alert1">
          <ul style={{ listStyle: 'none' }} className="c-horizontal-card__data js-card-data">
            <span className="c-horizontal-card__color-coding c-horizontal-card__color-coding--low js-card-color" aria-label="Risk level"></span>
            <li className="c-horizontal-card__data-value" title="Bank on watchlist" aria-label="Title">
              <fieldset className="o-toggle ">
                <input className="o-toggle__checkbox" type="checkbox" name="alert" id={each[cardContains[0]]} value="1" />
                <label className="o-toggle__label" htmlFor={each[cardContains[0]]}>
                  <span className="u-visually-hidden">
								Select this alert
                  </span>
                </label>
              </fieldset>
              <p className="c-horizontal-card__label">{each[cardContains[0]]}</p>
            </li>
            <li className="c-horizontal-card__data-value" title="OALE-659002" aria-label="Reference">
              <span className="o-badge c-horizontal-card__badge">
                {each[cardContains[1]]}
              </span>
            </li>
            <li className="c-horizontal-card__data-value" title="High" aria-label="Priority">{each[cardContains[2]]}</li>
            <li className="c-horizontal-card__data-value" title="30/100" aria-label="Rating">{each[cardContains[3]]}</li>
            <li className="c-horizontal-card__data-value" title="Wed aug 23 19:03:19" aria-label="Creation date">{each[cardContains[4]]}</li>
            <li className="c-horizontal-card__tag" aria-label="Status">
            </li>
          </ul>
          <button className="o-more-btn c-horizontal-card__more-btn o-more-btn--thin js-popover-trigger" type="button">
            <span className="u-visually-hidden">Actions</span>
          </button>
          <div className="c-popover is-hidden js-popover">
            <div className="c-popover__body">
              <ul className="g-list">
                <li className="g-list__item">
                  <button className="o-btn o-btn--inline" type="button">
										Validate
                  </button>
                </li>
                <li className="g-list__item">
                  <button className="o-btn o-btn--inline js-row-card-switch" type="button">
										Proprieties
                  </button>
                </li>
                <li className="g-list__item">
                  <button className="o-btn o-btn--inline" type="button">
										History
                  </button>
                </li>
                <li className="g-list__item">
                  <button className="o-btn o-btn--inline" type="button">
										Duplicate
                  </button>
                </li>
                <li className="g-list__item">
                  <button className="o-btn o-btn--inline js-row-card-lock" type="button">
										Lock
                  </button>
                </li>
                <li className="g-list__item">
                  <button className="o-btn o-btn--inline" type="button">
										Delete
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    );
  }
}
