import React from 'react';
import PropTypes from 'prop-types';

import 'src/common/css/mockcss/style.css';

const CustomSvg = (props) => {
  const {
    width,
    height,
    viewBox,
    d,
    stroke,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    fill,
    title
  } = props;

  return (
    <svg width={width} height={height} viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
      <title>{title}</title>
      <path d={d} stroke={stroke} strokeWidth={strokeWidth} fill={fill} strokeLinecap={strokeLinecap} strokeLinejoin={strokeLinejoin} />
    </svg>
  );
}

CustomSvg.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string.isRequired,
  d: PropTypes.string.isRequired,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  fill: PropTypes.string,
  title: PropTypes.string
}

CustomSvg.defaultProps = {
  width: '12',
  height: '14',
  stroke: '#888D95',
  strokeWidth: '1.6',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
  title: ''
}

export default CustomSvg;
