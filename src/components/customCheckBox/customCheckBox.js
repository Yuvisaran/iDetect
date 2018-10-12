import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

export default class CustomCheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.checked
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.id !== this.props.id) {
      this.setState({ isChecked: false })
    }
  }
  render() {
    const { className, name, id, onClick } = this.props;
    const { isChecked } = this.state;
    const toggleState = () => {
      this.setState({ isChecked: !this.state.isChecked })
    }
    return (
      <input type="checkbox" className={className} name={name} id={id} onClick={(event) => {
        toggleState();
        onClick(event);
      }} checked={isChecked} />
    )
  }
}

CustomCheckBox.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onClick: PropTypes.func,
  checked: PropTypes.bool
};

CustomCheckBox.defaultProps = {
  className: '',
  name: '',
  id: '',
  onClick: _noop,
  checked: false
};
