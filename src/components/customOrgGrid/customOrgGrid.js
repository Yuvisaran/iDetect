import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import _isEmpty from 'lodash/isEmpty';
import { FormattedMessage } from 'react-intl';

import CustomOrgGridOptions from './customOrgGridOptions';
import CustomOrgGridContent from './customOrgGridContent';

import 'src/common/css/mockcss/style.css';
import 'src/common/css/owncss/style.css';

export default class CustomOrgGrid extends Component {
  constructor() {
    super()
    this.state = {
      gridCardProperties: false
    }
  }
  render() {
    const { gridCardProperties } = this.state;
    const { toggleFilter, adminDataList, addButton, isOrgUnit } = this.props;

    if (_isEmpty(adminDataList)) {
      return (
        <div className="no-more-alert">
          <FormattedMessage id={ 'global.noMoreItems' } />
        </div>
      )
    }
    const gridCardMenu = () => {
      this.setState({ gridCardProperties: !this.state.gridCardProperties });
    }
    return (
      <div className="c-content__inner-wrapper">
        <CustomOrgGridOptions toggleFilter={toggleFilter}
          addButton={addButton} />
        <CustomOrgGridContent adminDataList={adminDataList} gridCardProperties={gridCardProperties} gridCardMenu={gridCardMenu} isOrgUnit={isOrgUnit}/>
      </div >
    )
  }
}

CustomOrgGrid.propTypes = {
  toggleFilter: PropTypes.func,
  adminDataList: PropTypes.array.isRequired,
  isOrgUnit: PropTypes.bool,
  toggleParameters: PropTypes.func,
  addButton: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}
CustomOrgGrid.defaultProps = {
  toggleFilter: _noop,
  isOrgUnit: false,
  addButton: ''
}
