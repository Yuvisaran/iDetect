import * as React from 'react';

export const HorizontalCard = () => {
  return (
    <div className="c-horizontal-card js-horizontal-card" data-alert="alert1">
      <ul className="c-horizontal-card__data js-card-data">
        <span className="c-horizontal-card__color-coding c-horizontal-card__color-coding--low js-card-color" aria-label="Risk level"></span>
        <li className="c-horizontal-card__data-value" title="Bank on watchlist" aria-label="Title">
          <fieldset className="o-toggle ">
              <input className="o-toggle__checkbox js-horizontal-card__checkbox" type="checkbox" name="alert" id="alert1" value="1"></input>
              <label className="o-toggle__label" htmlFor="alert1">
                <span className="u-visually-hidden">Select this alert</span>
              </label>
          </fieldset>
          <p className="c-horizontal-card__label">Bank on watchlist</p>
        </li>
        <li className="c-horizontal-card__data-value" title="OALE-659002" aria-label="Reference">
          <span className="o-badge c-horizontal-card__badge">OALE-659002</span>
        </li>
        <li className="c-horizontal-card__data-value" title="High" aria-label="Priority">High</li>
        <li className="c-horizontal-card__data-value" title="30/100" aria-label="Rating">30/100</li>
        <li className="c-horizontal-card__data-value" title="Wed aug 23 19:03:19" aria-label="Creation date">Wed aug 23 19:03:19</li>
        <li className="c-horizontal-card__tag" aria-label="Status"></li>
      </ul>
      <button className="o-more-btn c-horizontal-card__more-btn o-more-btn--thin js-popover-trigger" type="button">
          <span className="u-visually-hidden">Actions</span>
      </button>
      <div className="c-popover is-hidden js-popover" >{/*data-alert={alert1} data-container={.js-content-scrollable}*/}
        <div className="c-popover__body">
          <ul className="g-list">
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">Validate</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline js-row-card-switch" type="button">Proprieties</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">History</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">Duplicate</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline js-row-card-lock" type="button">Lock</button>
            </li>
            <li className="g-list__item">
              <button className="o-btn o-btn--inline" type="button">Delete</button>
            </li>
          </ul>
        </div>
      </div>
</div>);
}
