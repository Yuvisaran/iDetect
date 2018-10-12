import React from 'react';
import PropTypes from 'prop-types';

const CusCheckBox = (props) => {
  const { name, label, checked, onChange, disabled } = props;

  return (
    <fieldset className='o-toggle '>
      <input className='o-toggle__checkbox ' type='checkbox' value={name} name={name} id={name} checked={checked} disabled={disabled} onChange={onChange} />
      <label className='o-toggle__label' htmlFor={name}>
        {label}
      </label>
    </fieldset>
  );
}

CusCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool
}

CusCheckBox.defaultProps = {
  checked: false,
  disabled: false
}

export default CusCheckBox;
