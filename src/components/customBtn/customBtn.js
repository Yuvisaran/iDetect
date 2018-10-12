import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

import 'src/common/css/mockcss/style.css';

const CustomBtn = (props) => {
  const { className, children, disabled, onClick, id, name, ariaLabel } = props;

  return (
    <button className={className} disabled={disabled} onClick={onClick} id={id} aria-label={ariaLabel} name={name}>{children}</button>
  );
}

CustomBtn.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node
  ]),
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  name: PropTypes.string,
  ariaLabel: PropTypes.string
}

CustomBtn.defaultProps = {
  disabled: false,
  onClick: _noop,
  className: '',
  children: '',
  id: null,
  name: '',
  ariaLabel: ''
}

export default CustomBtn;
