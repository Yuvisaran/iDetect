import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';

import CusRadioButton from '../CusRadioButton/cusRadioButton';

const CusRadioButtonGroup = (props) => {
  const { keyValues, radioList, asName, asLabel, asChecked, onChange } = props;

  return (
    <div className='g-radio-buttons'>
      {keyValues
        ? _map(radioList, (value, key) =>
          <CusRadioButton key={key} name={key} label={value} checked={key === asChecked}
            onChange={onChange}/>)
        : _map(radioList, (each, i) =>
          <CusRadioButton key={i} name={each[asName]} label={each[asLabel]} checked={each[asName] === asChecked}
            onChange={onChange}/>)
      }
    </div>
  );
}

CusRadioButtonGroup.propTypes = {
  keyValues: PropTypes.bool,
  radioList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.objectOf(PropTypes.string)
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  asName: PropTypes.string,
  asLabel: PropTypes.string,
  asChecked: PropTypes.string
}

CusRadioButtonGroup.defaultProps = {
  keyValues: false,
  asName: '',
  asLabel: '',
  asChecked: ''
}

export default CusRadioButtonGroup;
