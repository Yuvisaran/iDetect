import * as React from 'react';

class Sidebar extends React.Component {


  render() {

    return (
      <div className="c-content__sidebar js-content__sidebar">
        <div className="c-tabs js-tabs c-sidebar__tabs c-popover-- is-ready">
          <nav className="c-tabs__nav">
            <ul className="c-tabs__list">
              <li className="c-tabs__title">
                <button className="c-tabs__link u-text-medium js-tabs-link is-active" type="button">
                  Related
                </button>
              </li>
              <li className="c-tabs__title">
                <button className="c-tabs__link u-text-medium js-tabs-link " type="button">
                  Details
                </button>
              </li>
              <li className="c-tabs__title">
                <button className="c-tabs__link u-text-medium js-tabs-link " type="button">
                  History
                </button>
              </li>
            </ul>
          </nav>
          <div className="c-tabs__content">
            <div className="c-tabs__item js-tabs-content is-active">
              <div className="o-heading o-heading--small c-sidebar__tabs">
                <h1 className="o-heading__title">Hello</h1>
              </div>
              <dl aria-label="Rule: KY_HYG_100_7" className="o-attribute o-attribute--inline">
                <dt className="o-attribute__term">
                  Rule
                </dt>
                <dd className="o-attribute__value">
                  KY_HYG_100_7
                  </dd>
                </dl>
              <dl aria-label="Rule: KY_HYG_100_8" className="o-attribute o-attribute--inline">
                <dt className="o-attribute__term">
                  Rule
                </dt>
                <dd className="o-attribute__value">
                  KY_HYG_100_8
                  </dd>
              </dl>
              <div className="o-heading o-heading--small c-sidebar__tabs">
                <h1 className="o-heading__title">Hello</h1>
              </div>
              <nav className="c-explorer">
                <button className="c-explorer__item js-explorer-item" type="button">
                  Users
                </button>
                <button className="c-explorer__item js-explorer-item" type="button">
                  Groups
                </button>
                <button className="c-explorer__item js-explorer-item" type="button">
                  Roles
                </button>
                <button className="c-explorer__item js-explorer-item" type="button">
                  Organization Units
                </button>
                <button className="c-explorer__item js-explorer-item" type="button">
                  Risks
                </button>
              </nav>
            </div>
            <div className="c-tabs__item js-tabs-content ">
              content
            </div>
            <div className="c-tabs__item js-tabs-content ">
              content
            </div>
          </div>
        </div>
        <div className="c-content__sidebar-footer">
          <button className="o-btn o-btn--primary c-content__sidebar-btn" type="button">
            Analysis
          </button>
          <button className="o-btn c-content__sidebar-btn js-modal-trigger" type="button" data-modal="comments">
            Comments (8)
          </button>
        </div>
      </div>
    )


  }


}
