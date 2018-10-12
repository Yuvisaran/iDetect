import React from 'react';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _includes from 'lodash/includes';

import CusCheckBox from '../CusCheckBox/cusCheckBox';

const CusCheckBoxGrp = (props) => {
  const { keyValues, checkList, asName, asLabel, asChecked, asDisabled, onChange } = props;

  return (
    <div className='g-toggles'>
      {keyValues
        ? _map(checkList, (value, key) =>
          <CusCheckBox key={key} name={key} label={value}
            checked={_includes(asChecked, key)}
            disabled={_includes(asDisabled, key)}
            onChange={onChange}/>)
        : _map(checkList, (each, i) =>
          <CusCheckBox key={i} name={each[asName]} label={each[asLabel]}
            checked={_includes(asChecked, each[asName])}
            disabled={_includes(asDisabled, each[asName])}
            onChange={onChange}/>)
      }
    </div>
  );
}

CusCheckBoxGrp.propTypes = {
  keyValues: PropTypes.bool,
  checkList: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.objectOf(PropTypes.string)
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  asName: PropTypes.string,
  asLabel: PropTypes.string,
  asDisabled: PropTypes.array,
  asChecked: PropTypes.array
}

CusCheckBoxGrp.defaultProps = {
  keyValues: false,
  asName: '',
  asLabel: '',
  asChecked: [],
  asDisabled: []
}

export default CusCheckBoxGrp;
