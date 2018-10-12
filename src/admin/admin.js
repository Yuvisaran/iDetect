import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import $ from 'jquery';
import _pick from 'lodash/pick';
import _values from 'lodash/values';
import _map from 'lodash/map';
import { FormattedMessage } from 'react-intl';

import CustomGridCard from 'src/components/customGridCard/customGridCard';
import CustomOrgGrid from 'src/components/customOrgGrid/customOrgGrid';
import AdminGrid from 'src/admin/AdminGrid/adminGrid';
import AdminTable from 'src/admin/AdminTable/adminTable';

import CusRiskAllocation from './../components/CusRiskAllocation/cusRiskAllocation'
import CustomPopOver from 'src/components/customPopOver/customPopOver';
import {
  getAllAdminUserList,
  getAllAdminGroupList,
  getAllAdminRoleList,
  getAllAdminRisksList,
  getAllAdminOrgUnitList,
  riskMergeRequest
} from './service/action';

// Note: value of low is no need to RiskAllocation comp
const riskLevelAlert = [
  // 'low',
  'guarded', 'elevated', 'high', 'severe' ];
const riskLevelFlag = [
  // 'overallRiskLow',
  'overallRiskGuarded', 'overallRiskElevated', 'overallRiskHigh', 'overallRiskSevere' ];

const mapStateToProps = (state) => ({
  adminDataList: state.adminReducer.adminDataList,
  adminRiskList: state.adminReducer.adminRiskList,
  userId: state.loginReducer.userDetails.user.userId,
  adminOrgUnitList: state.adminReducer.adminOrgUnitList,
  isLoading: state.commonReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  getAllAdminUserList: (userId) => dispatch(getAllAdminUserList(userId)),
  getAllAdminGroupList: (userId) => dispatch(getAllAdminGroupList(userId)),
  getAllAdminRoleList: (userId) => dispatch(getAllAdminRoleList(userId)),
  getAllAdminRisksList: (userId) => dispatch(getAllAdminRisksList(userId)),
  getAllAdminOrgUnitList: (userId) => dispatch(getAllAdminOrgUnitList(userId)),
  riskMergeRequest: (userId, id, name, riskLevel) => dispatch(riskMergeRequest(userId, id, name, riskLevel))
})

class AdminDashboard extends Component {
  static propTypes = {
    adminDataList: PropTypes.array.isRequired,
    adminRiskList: PropTypes.array.isRequired,
    adminOrgUnitList: PropTypes.array.isRequired,
    getAllAdminOrgUnitList: PropTypes.func,
    getAllAdminUserList: PropTypes.func,
    riskMergeRequest: PropTypes.func,
    userId: PropTypes.string,
    isLoading: PropTypes.bool.isRequired
  }

  state = {
    isFilterVisible: false,
    isParametersVisible: false,
    isFilterPatternVisible: false,
    isRisksVisible: false,
    attributeList: []
  }

  componentDidMount() {
    const { userId } = this.props;
    this.props.getAllAdminUserList(userId);
  }

  toggleRisksVisible = (riskLevel, id, name) => {
    this._riskLevel = riskLevel;
    this._riskLevelID = id;
    this._riskLevelName = name;
    this.setState({ isRisksVisible: !this.state.isRisksVisible }, () => {
      if (this.state.isRisksVisible) {
        $('body').addClass('has-veil');
      } else {
        $('body').removeClass('has-veil');
      }
    });
  };

  updateRiskLevel(keys, vals) {
    _map(keys, (key, i) => (this._riskLevel[key] = vals[i]));
  }

  handleRiskAllocationSubmit = () => {
    const { userId } = this.props;
    this.props.riskMergeRequest(userId, this._riskLevelID, this._riskLevelName, this._riskLevel);
    this.toggleRisksVisible();
  }

  toggleFilter = () => {
    this.setState({ isFilterVisible: !this.state.isFilterVisible });
  }
  toggleFilterPattern = () => {
    this.setState({ isFilterPatternVisible: !this.state.isFilterPatternVisible });
  }

  hidePopOver = () => {
    this.setState({ isFilterVisible: false });
  }

  riskPopOver = () => {
    return (
      this.state.isRisksVisible && <div className='c-modal js-modal'>
        <div className="c-modal__view">
          <div className="c-modal__head">
            <legend className="c-modal__title">
            <FormattedMessage id={ 'admin.manageRisks' } />
            </legend>
          </div>
          <div className="c-modal__body">
            <CusRiskAllocation
              varients='labelled'
              title='Alerts colors'
              onChange={(val) => this.updateRiskLevel(riskLevelAlert, val)}
              defaultValue={_values(_pick(this._riskLevel, riskLevelAlert))} />
            <CusRiskAllocation
              varients='labelled'
              title='Flags colors'
              onChange={(val) => this.updateRiskLevel(riskLevelFlag, val)}
              defaultValue={_values(_pick(this._riskLevel, riskLevelFlag))} />
          </div>
          <div className="c-modal__foot">
            <div className="c-modal__actions c-modal__actions--secondary">
              <button className="o-btn js-close-modal" onClick={this.toggleRisksVisible} type="button">
                <FormattedMessage id={ 'global.cancel' } />
              </button>
            </div>
            <div className="c-modal__actions">
              <button className="o-btn o-btn--primary" onClick={this.handleRiskAllocationSubmit}>
                <FormattedMessage id={ 'global.save' } />
              </button>
            </div>
          </div>

        </div>
      </div>
    );
  }

  filterPopOver = () => {
    const { isFilterVisible, isFilterPatternVisible } = this.state;

    return (
      <CustomPopOver hidePopOver={this.hidePopOver}>
        <div className={`c-popover js-popover is-ready ${isFilterVisible ? '' : 'is-hidden'}`} style={{ top: '117px', left: '905px' }}
          ref={node => { this.node = node; }}>
          <div className="o-heading o-heading--inline c-popover__heading">
            <h4 className="o-heading__title">Filter</h4>
          </div>
          <div className="c-popover__body">
            <ul className="g-list g-list--borders">
              <li className="g-list__item list_item_flt">
                <fieldset className="c-form__field">
                  <select className="o-select selet-padd" name="" id="">
                    <option value="name">Name</option>
                  </select>
                </fieldset>
              </li>
              <li className="g-list__item list_item_flt m-top">
                <button className="o-btn o-btn--neutral o-btn--tooltip js-modal-trigger" onClick={this.toggleFilterPattern} type="button" aria-label="Settings" data-modal="alert-settings">
                  <svg title="Settings" className="o-icon ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" id="settings-icon" width="100%" height="100%"><title>Settings</title>
                      <path d="M9.455 3.28a2.216 2.216 0 0 0-1.31 0V1a.655.655 0 1 1 1.31 0v2.28zm0 4.167V13a.655.655 0 1 1-1.31 0V7.447a2.216 2.216 0 0 0 1.31 0zM8.8 7.016a1.66 1.66 0 0 1-1.67-1.652c0-.912.746-1.653 1.67-1.653.924 0 1.67.741 1.67 1.653A1.66 1.66 0 0 1 8.8 7.016zm-5.945-.463a2.216 2.216 0 0 0-1.31 0V1a.655.655 0 1 1 1.31 0v5.553zm0 4.167V13a.655.655 0 1 1-1.31 0v-2.28a2.216 2.216 0 0 0 1.31 0zm-.655-.431c-.924 0-1.67-.741-1.67-1.653A1.66 1.66 0 0 1 2.2 6.984c.924 0 1.67.74 1.67 1.652 0 .912-.746 1.653-1.67 1.653z" transform="translate(.349)"></path></svg>
                  </svg>
                </button>
              </li>
              <li className="g-list__item list_item_flt m-top">
                <fieldset className="c-form__field">
                  <select className="o-select1 selet-padd" name="" id="">
                    <option value="date">Date</option>
                  </select>
                </fieldset>
              </li>
            </ul>
          </div>
          <div className="c-popover__footer footer-blk">
            <div className="c-popover__secondary-actions">
              <button className="o-btn o-btn--neutral js-popover-trigger has-popover-displayed pos-rel" type="button">
              + Add filter
              </button>
              {isFilterPatternVisible && <div className="popup-list">
                <form action="#">
                  <p>
                    <input type="radio" id="test1" name="radio-group" />
                    <label htmlFor="test1">Exact Match</label>
                  </p>
                  <p>
                    <input type="radio" id="test2" name="radio-group" />
                    <label htmlFor="test2">Contains</label>
                  </p>
                  <p>
                    <input type="radio" id="test3" name="radio-group" />
                    <label htmlFor="test3">Start with</label>
                  </p>
                  <p>
                    <input type="radio" id="test4" name="radio-group" />
                    <label htmlFor="test4">End with</label>
                  </p>
                </form>
              </div>
              }
            </div>
            <div className="c-popover__primary-actions">
              <button className="o-btn o-btn--inline u-accent-color" type="button">
              Apply
              </button>
            </div>
          </div>
        </div>
      </CustomPopOver>
    );
  }
  render() {
    const { adminDataList, adminRiskList, adminOrgUnitList, isLoading } = this.props;
    const { attributeList } = this.state;
    const fetchAttribute = (index) => {
      this.setState({ attributeList: adminDataList[index].listOfFields });
    }

    return (
      <div className="c-content__view js-content__view">
        <div className={`o-loader js-loader ${isLoading ? 'is-loading' : ''}`}></div>
        {this.filterPopOver()}
        {this.riskPopOver()}
        <Switch>
          <Redirect exact path="/dashboard/admin" to="/dashboard/admin/users" />
          <Route exact path="/dashboard/admin/users" render={() => <CustomGridCard adminDataList={adminDataList} toggleFilter={this.toggleFilter} isUser addButton={<FormattedMessage id={ 'admin.addUser' } />} />} />
          <Route exact path="/dashboard/admin/groups" render={() => <CustomGridCard adminDataList={adminDataList} toggleFilter={this.toggleFilter} isGroup addButton={<FormattedMessage id={ 'admin.addGroup' } />}/>} />
          <Route exact path="/dashboard/admin/roles" render={() => <CustomGridCard adminDataList={adminDataList} toggleFilter={this.toggleFilter} isRole addButton={<FormattedMessage id={ 'admin.addRole' } />} />} />
          <Route exact path="/dashboard/admin/organization_units" render={() => <CustomOrgGrid adminDataList={adminOrgUnitList} toggleFilter={this.toggleFilter} isOrgUnit addButton={<FormattedMessage id={ 'admin.addOrganization' } />}/>} />
          <Route exact path="/dashboard/admin/risks" render={() => <CustomGridCard adminDataList={adminRiskList} toggleFilter={this.toggleFilter} toggleRisksVisible={this.toggleRisksVisible} riskPopOver={this.riskPopOver} isRisk />} />
          <Route exact path="/dashboard/admin/logical_views" render={() => <AdminGrid adminDataList={adminDataList} fetchAttribute={fetchAttribute} />} />
          <Route exact path="/dashboard/admin/logical_views/attribute" render={() => <AdminTable attributeList={attributeList} />} />
          <Route exact path="/dashboard/admin/scheduler" render={() => <div> <FormattedMessage id={ 'global.wip' } /></div>} />
          <Route exact path="/dashboard/admin/overview" render={() => <div> <FormattedMessage id={ 'global.wip' } /> </div>} />
          <Route exact path="/dashboard/admin/web_crawlers" render={() => <div> <FormattedMessage id={ 'global.wip' } /> </div>} />
          <Route exact path="/dashboard/admin/logs" render={() => <div><FormattedMessage id={ 'global.wip' } /> </div>} />
          <Route exact path="/dashboard/admin/workflows" render={() => <div> <FormattedMessage id={ 'global.wip' } /> </div>} />
          <Route exact path="/dashboard/admin/settings" render={() => <div> <FormattedMessage id={ 'global.wip' } /> </div>} />
        </Switch>
      </div>
    )
  }
}

/* eslint-disable */
export default AdminDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminDashboard)