import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'src/common/css/mockcss/style.css';
import 'src/common/css/owncss/style.css';

export class CustomInput extends Component {
  render() {
    const {
      input,
      label,
      type,
      disabled,
      customClass,
      placeholder,
      meta: { touched, error, warning } } = this.props;

    /* eslint-disable */
    const className = touched && error == 'Invalid email address' || touched && error == 'Required' ? "error" : "success";
    /* eslint-enable */

    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input {...input} placeholder={placeholder} type={type} className={`${customClass} ${className}`} disabled={disabled} />
          <br />
          {touched &&
            ((error &&
              <span className='showError'>
                {error}
              </span>) ||
              (warning &&
                <span>
                  {warning}
                </span>))}
        </div>
      </div>
    );
  }
}

CustomInput.propTypes = {
  disabled: PropTypes.bool,
  input: PropTypes.any,
  label: PropTypes.string,
  type: PropTypes.string,
  customClass: PropTypes.string,
  placeholder: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string
  })
};

CustomInput.defaultProps = {
  diasbled: false,
  input: null,
  label: '',
  type: '',
  customClass: '',
  placeholder: '',
  meta: ''
};
