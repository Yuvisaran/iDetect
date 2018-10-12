import React from 'react';
import PropTypes from 'prop-types';

import 'src/common/css/mockcss/style.css';

const CustomBadge = (props) => {
  const {
    value,
    className
  } = props;

  return (
    <div>
      <span className={className}>{value}</span>
    </div>
  );
}

CustomBadge.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string
}

CustomBadge.defaultProps = {
  className: ''
}

export default CustomBadge;
