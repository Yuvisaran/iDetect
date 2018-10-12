import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import _pick from 'lodash/pick';
import _values from 'lodash/values';
import _assign from 'lodash/assign';
import _map from 'lodash/map';
import { FormattedMessage } from 'react-intl';
import Custombtn from 'src/components/customBtn/customBtn';
import CustomPopOver from 'src/components/customPopOver/customPopOver';
import CusRiskAllocation from './../CusRiskAllocation/cusRiskAllocation';

import 'src/common/css/mockcss/style.css';

// Note: value of low is no need to RiskAllocation comp
const riskLevelAlert = [
  // 'low',
  'guarded', 'elevated', 'high', 'severe' ];
const riskLevelFlag = [
  // 'overallRiskLow',
  'overallRiskGuarded', 'overallRiskElevated', 'overallRiskHigh', 'overallRiskSevere' ];

export default class GridCardContent extends Component {
  constructor() {
    super()
    this.state = {
      popUpStyle: ''
    }
  }
  render() {
    const { popUpStyle } = this.state;
    const { gridCardProperties, gridCardMenu, adminDataList, toggleRisksVisible, isUser, isGroup, isRole, isRisk } = this.props;
    const isContentMenuVisible = gridCardProperties ? '' : 'is-hidden';
    const popUpSize = (i) => {
      this.setState({ popUpStyle: 55 + i * 66 });
    }
    const hidePopOver = () => {
      this.props.gridCardMenu();
    }
    const propertiesPopOver = () => (
      <CustomPopOver hidePopOver={hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isContentMenuVisible}`} data-container=".js-content__scrollable"
          style={{ top: popUpStyle, left: '905px' }}>
          <div className="c-popover__body">
            <div className="c-actions-list">
              <ul className="c-actions-list__list">
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.validate' } />        </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.properties' } />        </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.history' } />        </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.duplicate' } />        </button>
                </li>
                <li className="c-actions-list__item">
                  <button className="o-btn o-btn--inline" type="button">
                    <FormattedMessage id={ 'global.delete' } />         </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CustomPopOver>
    )

    return (
      <div className="c-content__scrollable js-content__scrollable">
        {_map(adminDataList, (item, i) =>
          <div className="c-row-card js-row-card" key={i}>
            <div className="c-row-card__toggle-wrapper">
              <fieldset className="o-toggle Array">
                <input className="o-toggle__checkbox js-row-card__checkbox" type="checkbox" name="Alert" id="Alert" value="1" />
                <label className="o-toggle__label" htmlFor="Alert">
                </label>
              </fieldset>
              {(isRisk && <div> <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg" ><title>Risk</title><g fillRule="evenodd"><path d="M10.066 18.848a9.2 9.2 0 1 1 0-18.4 9.2 9.2 0 0 1 0 18.4zm0-1.4a7.8 7.8 0 1 0 0-15.6 7.8 7.8 0 0 0 0 15.6z" fillRule="nonzero" /><circle cx="10.066" cy="13.548" r="1" /><path fillRule="nonzero" d="M9.366 4.948h1.4v5.9h-1.4z" /></g></svg>
              </div>) || (isUser && <div>  <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg"><title>user</title><path d="M6 7.93a4 4 0 1 1 4-4 4 4 0 0 1-4 4zM6 1.4A2.56 2.56 0 1 0 8.54 4 2.57 2.57 0 0 0 6 1.4zm5.29 14.82a.7.7 0 0 1-.7-.7v-3.4a1.19 1.19 0 0 0-1.19-1.19H2.59a1.19 1.19 0 0 0-1.19 1.19v2.46a.24.24 0 0 0 .24.24H6a.7.7 0 1 1 0 1.4H1.64A1.65 1.65 0 0 1 0 14.58v-2.46a2.59 2.59 0 0 1 2.59-2.59H9.4a2.59 2.59 0 0 1 2.6 2.59v3.41a.7.7 0 0 1-.71.69z" /></svg>
                </div>) || (isGroup && <div> <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg"><title>People</title><path d="M6.834 7.99c-2.148 0-3.895-1.719-3.895-3.845C2.939 2.019 4.686.3 6.834.3c2.15 0 3.896 1.719 3.896 3.845 0 2.126-1.747 3.845-3.896 3.845zm0-1.4c1.381 0 2.496-1.097 2.496-2.445C9.33 2.797 8.215 1.7 6.834 1.7c-1.38 0-2.495 1.097-2.495 2.445 0 1.348 1.115 2.445 2.495 2.445zm5.902 5.44h5.467a2.306 2.306 0 0 1 2.306 2.306v3.494a.7.7 0 0 1-1.4 0v-3.494c0-.5-.405-.906-.906-.906h-5.467v1.85a.7.7 0 1 1-1.4 0v-3.494c0-.5-.405-.906-.905-.906H3.278c-.5 0-.905.405-.905.906v2.691c0 .057.046.103.102.103h4.38a.7.7 0 0 1 0 1.4h-4.38c-.83 0-1.502-.673-1.502-1.503v-2.691A2.306 2.306 0 0 1 3.278 9.48h7.153a2.306 2.306 0 0 1 2.305 2.306v.244zm2.734-1.49c-2.148 0-3.895-1.719-3.895-3.845 0-2.126 1.747-3.845 3.896-3.845s3.895 1.719 3.895 3.845c0 2.126-1.746 3.845-3.895 3.845zm0-1.4c1.382 0 2.496-1.097 2.496-2.445 0-1.348-1.114-2.445-2.495-2.445-1.38 0-2.496 1.097-2.496 2.445 0 1.348 1.115 2.445 2.496 2.445z" /></svg>
                </div>) || (isRole && <div> <svg className="o-icon" width="20" height="19" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg"><title>Role</title><path d="M7.504 8.23a3.965 3.965 0 1 1 0-7.93 3.965 3.965 0 0 1 0 7.93zm0-1.4a2.565 2.565 0 1 0 0-5.13 2.565 2.565 0 0 0 0 5.13zm.02 8.294a.7.7 0 0 1 0 1.4h-5.35A1.644 1.644 0 0 1 .53 14.879v-2.46a2.59 2.59 0 0 1 2.59-2.59h6.904a.7.7 0 1 1 0 1.4H3.12a1.19 1.19 0 0 0-1.189 1.19v2.46c0 .135.11.245.245.245h5.35zm8.469-4.58a.7.7 0 1 1 1.063.912l-4.289 5a.7.7 0 0 1-1.062 0L9.993 14.46a.7.7 0 0 1 1.063-.912l1.18 1.376 3.757-4.38z" /></svg>
                </div>)}
            </div>
            <div className="c-row-card__content">
              <p className="c-row-card__label">{item.name}</p>
              <p className="c-row-card__name">{item.fullName}</p>
            </div>
            {
              isRisk && <div className="c-row-card__risk" onClick={() => toggleRisksVisible(_assign({}, item.riskLevel), item.id, item.name)}>
                <CusRiskAllocation varients='static' defaultValue={_values(_pick(item.riskLevel, riskLevelAlert))}/>
                <CusRiskAllocation varients='static' defaultValue={_values(_pick(item.riskLevel, riskLevelFlag))}/>
              </div>
            }

            <Custombtn className="o-more-btn c-row-card__more-btn" onClick={() => {
              gridCardMenu();
              popUpSize(i)
            }
            }>
              <span className="u-visually-hidden">Actions</span>
            </Custombtn>
          </div>
        )}
        {gridCardProperties && propertiesPopOver()}

      </div>
    )
  }
}
GridCardContent.propTypes = {
  toggleBtnGrp: PropTypes.func,
  gridCardProperties: PropTypes.bool,
  gridCardMenu: PropTypes.func,
  toggleRisksVisible: PropTypes.func,
  contentGridCheckBox: PropTypes.bool,
  isRisk: PropTypes.bool,
  isUser: PropTypes.bool,
  isGroup: PropTypes.bool,
  isRole: PropTypes.bool,
  adminDataList: PropTypes.array.isRequired
}
GridCardContent.defaultProps = {
  toggleBtnGrp: _noop,
  gridCardProperties: false,
  gridCardMenu: _noop,
  toggleRisksVisible: _noop,
  isRisk: false,
  isUser: false,
  isGroup: false,
  isRole: false,
  contentGridCheckBox: false
}
