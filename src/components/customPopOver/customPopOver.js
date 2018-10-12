import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import onClickOutside from 'react-onclickoutside';

class CustomPopOver extends Component {
  handleClickOutside(event) {
    this.props.hidePopOver();
  }
  render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default onClickOutside(CustomPopOver);

CustomPopOver.propTypes = {
  hidePopOver: PropTypes.func,
  children: PropTypes.element
}
CustomPopOver.defaultProps = {
  hidePopOver: _noop
}
