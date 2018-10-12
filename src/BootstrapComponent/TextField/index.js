import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop'
// import { SIGABRT } from 'constants';

const TextField = (props) => {
  const { varients, name, value, label, placeHolder, onChange, onBlur } = props;
  // Todo: need to optimize
  switch (varients) {
    case 'hidden-label':
      return (
        <fieldset className="c-form__field">
          <label className="o-label u-visually-hidden c-form__label" htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" type="text" name={name} onChange={onChange} onBlur={onBlur}/>
        </fieldset>);
    case 'placeholder':
      return (
        <fieldset className="c-form__field">
          <label className="o-label u-visually-hidden c-form__label" htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" type="text" name={name} placeholder={placeHolder} onChange={onChange} onBlur={onBlur}/>
        </fieldset>
      );
    case 'placeholder+label':
      return (
        <fieldset className="c-form__field">
          <label className="o-label c-form__label" htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" type="text" name={name} placeholder={placeHolder} onChange={onChange} onBlur={onBlur}/>
        </fieldset>
      );
    case 'multiline':
      return (
        <fieldset className="c-form__field">
          <label className="o-label c-form__label" htmlFor={name}>{label}</label>
          <textarea className="o-input o-input--multiline" name={name} placeholder={placeHolder} onChange={onChange} onBlur={onBlur}/>
        </fieldset>);
    case 'inline':
      return (
        <div className="c-form__field c-form__field--inline">
          <label className="o-label c-form__label" htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" type="text" name={name} onChange={onChange} onBlur={onBlur}/>
        </div>);
    case 'comment-box':
      return (
        <div className="c-comment-box js-comment-box">
          <span className="c-comment-box__placeholder"></span>
          <input className="o-input o-input--bg c-comment-box__input js-comment-box-content"
            name={name} placeholder={placeHolder} value={value} type="text" onChange={onChange} onBlur={onBlur}/>
        </div>
      );
    default:
      return (
        <fieldset className="c-form__field">
          <label className="o-label c-form__label" htmlFor={name}>{label}</label>
          <input className="o-input c-form__input" type="text" name={name} onChange={onChange} onBlur={onBlur}/>
        </fieldset>
      )
  }
}

TextField.propTypes = {
  // Todo: {state: "implicity required"} is nothing changed in given mocks
  varients: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  name: PropTypes.name,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
};

TextField.defaultProps = {
  varients: 'default',
  label: '',
  value: '',
  placeHolder: '',
  name: '',
  onBlur: _noop,
  onChange: _noop
};

export default TextField;
