import React from 'react';
import PropTypes from 'prop-types';

const CusRadioButton = (props) => {
  const { name, label, checked, onChange } = props;

  return (
    <fieldset className='o-radio-button'>
      <input className='o-radio-button__input' type='radio' value={name} name={name} id={name} checked={checked} onChange={onChange}/>
      <label className='o-radio-button__label' htmlFor={name}>
        {label}
      </label>
    </fieldset>
  );
}

CusRadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool
}

CusRadioButton.defaultProps = {
  checked: false
}

export default CusRadioButton;
