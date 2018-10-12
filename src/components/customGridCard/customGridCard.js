import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import _isEmpty from 'lodash/isEmpty';
import { FormattedMessage } from 'react-intl';

import GridCardOptions from './gridCardOptions';
import GridCardContent from './gridCardContent';

import 'src/common/css/mockcss/style.css';
import 'src/common/css/owncss/style.css';

export default class CustomGridCard extends Component {
  constructor() {
    super()
    this.state = {
      gridCardProperties: false
    }
  }
  render() {
    const { gridCardProperties } = this.state;
    const { toggleFilter, toggleParameters, adminDataList, toggleRisksVisible, isRisk, isUser, isGroup, isRole, addButton } = this.props;

    if (_isEmpty(adminDataList)) {
      return (
        <div className="no-more-alert">
          <FormattedMessage id={ 'global.noMoreItem' } />
        </div>
      )
    }

    const gridCardMenu = () => {
      this.setState({ gridCardProperties: !this.state.gridCardProperties });
    }
    return (
      <div className="c-content__inner-wrapper">
        <GridCardOptions toggleFilter={toggleFilter}
          toggleParameters={toggleParameters} addButton={addButton} />
        <GridCardContent adminDataList={adminDataList} gridCardProperties={gridCardProperties} gridCardMenu={gridCardMenu} toggleRisksVisible={toggleRisksVisible} isRisk={isRisk} isUser={isUser} isGroup={isGroup} isRole={isRole} />
      </div>
    )
  }
}

CustomGridCard.propTypes = {
  toggleFilter: PropTypes.func,
  toggleRisksVisible: PropTypes.func,
  adminDataList: PropTypes.array.isRequired,
  isRisk: PropTypes.bool,
  isUser: PropTypes.bool,
  isGroup: PropTypes.bool,
  isRole: PropTypes.bool,
  toggleParameters: PropTypes.func,
  addButton: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]) 
}
CustomGridCard.defaultProps = {
  toggleFilter: _noop,
  isRisk: false,
  isUser: false,
  isGroup: false,
  isRole: false,
  toggleParameters: _noop,
  toggleRisksVisible: _noop,
  addButton: ''
}
