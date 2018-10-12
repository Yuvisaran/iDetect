import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = { isExpand: false };
    this.expandToggle = this.expandToggle.bind(this);
  }

  expandToggle() {
    this.setState({ isExpand: !this.state.isExpand })
  }

  render() {
    const { isExpand } = this.state;
    const { content, title } = this.props;
    return (
      <div className={`c-accordion ${isExpand ? 'is-open' : ''}`}>
        <div className="c-accordion__heading" onClick={this.expandToggle}>
          <div className="o-heading o-heading--subtitle o-heading--collapsable">
            <h1 className="o-heading__title">{title}</h1>
            <div className="o-heading__actions-wrapper">
              <button className="o-btn o-btn--transparent" >
                <svg className={`o-icon ${isExpand ? '' : 'o-icon-rotate90'}`} width="9" height="6" viewBox="0 0 9 6" xmlns="http://www.w3.org/2000/svg">
                  <title>Icon</title>
                  <path d="M4.5 3.771L7.478.657l1.012.968-3.255 3.404a1.017 1.017 0 0 1-1.438.032l-.032-.032L.51 1.625 1.522.657 4.5 3.771z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="c-accordion__components">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string,

  content: PropTypes.any,
  children: PropTypes.element,
  maxValue: PropTypes.number
};

Accordion.defaultProps = {
  title: 'Title',
  content: []
};
