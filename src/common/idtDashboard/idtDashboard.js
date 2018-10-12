import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import { Switch, Route, Redirect } from 'react-router-dom';

import Topbar from './topbar';
import Sidebar from './sidebar';
import AnalysisDashboard from 'src/analysis/analysis';
import DetectionDashboard from 'src/detection/detection';
import DataDashboard from 'src/data/data';
import AdminDashboard from 'src/admin/admin';
import AlertsDashboard from 'src/alerts/alerts';

import {
  getAllSbAlertRecentStatus,
  getAllSbAlertCaseStatus,
  getAllAlertList,
  getAllCaseList
} from 'src/alerts/service/action';
import {
  getAllDetectionRulesList,
  getAllDetectionScenariosList,
  getAllDetectionProfilesList,
  getAllSbDetectionRulesStatus,
  getAllSbDetectionScenariosStatus,
  getAllSbDetectionProfilesStatus
} from 'src/detection/service/action';
import {
  getAllAdminUserList,
  getAllAdminGroupList,
  getAllAdminRoleList,
  getAllAdminRisksList,
  getAllAdminOrgUnitList,
  getAllAdminLogicalViews
} from 'src/admin/service/action';

import 'src/common/css/mockcss/style.css';
import 'src/common/css/owncss/style.css';

class idtDashboard extends Component {
  constructor() {
    super()
    this.state = {
      alertSortBy: '',
      alertSortOrder: '',
      caseSortBy: '',
      caseSortOrder: ''
    }
  }
  componentDidMount() {
    const { userId, availableLists, alertUserPreferenceList, defaultAlertDisplay, defaultCaseDisplay } = this.props;
    this.props.getAllSbAlertRecentStatus(userId, availableLists, defaultAlertDisplay);
    this.props.getAllSbDetectionScenariosStatus(userId, availableLists);
    this.props.getAllSbAlertCaseStatus(userId, availableLists, defaultCaseDisplay);
    this.props.getAllSbDetectionRulesStatus(userId, availableLists);
    this.props.getAllSbDetectionProfilesStatus(userId, availableLists);

    let defaultAlertSortBy, defaultAlertSortOrder, defaultCaseSortBy, defaultCaseSortOrder;
    _map(alertUserPreferenceList, (each) => {
      if (each.preferenceCode === 'sortFieldAlert') {
        defaultAlertSortBy = each.preferenceValue;
      } else if (each.preferenceCode === 'sortOrderAlert') {
        defaultAlertSortOrder = each.preferenceValue;
      } else if (each.preferenceCode === 'sortFieldCase') {
        defaultCaseSortBy = each.preferenceValue;
      } else if (each.preferenceCode === 'sortOrderCase') {
        defaultCaseSortOrder = each.preferenceValue;
      }
    });

    this.setState({
      alertSortBy: _isEmpty(defaultAlertSortBy) || defaultAlertSortBy === 'null' ? null : defaultAlertSortBy,
      alertSortOrder: _isEmpty(defaultAlertSortOrder) || defaultAlertSortOrder === 'null' ? null : defaultAlertSortOrder,
      caseSortBy: _isEmpty(defaultCaseSortBy) || defaultCaseSortBy === 'null' ? null : defaultCaseSortBy,
      caseSortOrder: _isEmpty(defaultCaseSortOrder) || defaultCaseSortOrder === 'null' ? null : defaultCaseSortOrder
    })
  }

  render() {
    const { allSbAlertRecentStatus, allSbAlertCaseStatus, id, userId, availableLists, isLoading,
      availableOrgUnits, orgUnits, availablePerms, allSbDetectionRulesStatus, allSbDetectionScenariosStatus,
      allSbDetectionProfilesStatus, defaultAlertDisplay, defaultCaseDisplay, loggedUser } = this.props;
    const { caseSortBy, caseSortOrder, alertSortBy, alertSortOrder } = this.state;

    const sortedAlertListFetch = (alertIdSelectedSb) => {
      this.props.getAllAlertList(alertIdSelectedSb, id, userId, availableLists, alertSortBy, alertSortOrder, defaultAlertDisplay, this.props.maxRecordPerAlertPage);
    }
    const sortedCasesListFetch = (alertIdSelectedSb) => {
      this.props.getAllCaseList(alertIdSelectedSb, id, userId, availableLists, caseSortBy, caseSortOrder, defaultCaseDisplay, this.props.maxRecordPerCasePage);
    }
    const detectionRulesListFetch = (detectionIdSelectedSb) => {
      this.props.getAllDetectionRulesList(detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);
    }
    const detectionScenariosListFetch = (detectionNameSelectedSb) => {
      this.props.getAllDetectionScenariosList(detectionNameSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);
    }
    const detectionProfilesListFetch = (detectionIdSelectedSb) => {
      this.props.getAllDetectionProfilesList(detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms);
    }
    const sbAdminUserListFetch = () => {
      this.props.getAllAdminUserList(userId);
    }
    const sbAdminGroupListFetch = () => {
      this.props.getAllAdminGroupList(userId);
    }
    const sbAdminRoleListFetch = () => {
      this.props.getAllAdminRoleList(userId);
    }
    const sbAdminRisksListFetch = () => {
      this.props.getAllAdminRisksList(userId);
    }
    const sbAdminOrgUnitListFetch = () => {
      this.props.getAllAdminOrgUnitList(userId);
    }
    const sbAdminLogicalViewFetch = () => {
      this.props.getAllAdminLogicalViews(id, userId);
    }

    return (
      <Fragment>
        <div className={`o-loader js-loader ${isLoading ? 'is-loading' : ''}`}></div>
        {/* todo: think about writing all service inside sidebar itself. so unwanted props can be reduced */}
        <div className="c-main">
          <Sidebar
            allSbAlertRecentStatus={allSbAlertRecentStatus}
            allSbAlertCaseStatus={allSbAlertCaseStatus}
            sortedAlertListFetch={sortedAlertListFetch}
            sortedCasesListFetch={sortedCasesListFetch}
            allSbDetectionProfilesStatus={allSbDetectionProfilesStatus}
            allSbDetectionRulesStatus={allSbDetectionRulesStatus}
            allSbDetectionScenariosStatus={allSbDetectionScenariosStatus}
            sbAdminUserListFetch={sbAdminUserListFetch}
            sbAdminGroupListFetch={sbAdminGroupListFetch}
            detectionRulesListFetch={detectionRulesListFetch}
            detectionScenariosListFetch={detectionScenariosListFetch}
            detectionProfilesListFetch={detectionProfilesListFetch}
            sbAdminRoleListFetch={sbAdminRoleListFetch}
            sbAdminRisksListFetch={sbAdminRisksListFetch} sbAdminOrgUnitListFetch={sbAdminOrgUnitListFetch}
            sbAdminLogicalViewFetch={sbAdminLogicalViewFetch} />
          <div className="c-content">
            <Topbar loggedUser={loggedUser} />
            <Switch>
              <Redirect exact path="/dashboard" to="/dashboard/alerts" />
              <Route path="/dashboard/alerts" component={AlertsDashboard} />
              <Route path="/dashboard/analysis" component={AnalysisDashboard} />
              <Route path="/dashboard/detection" component={DetectionDashboard} />
              <Route path="/dashboard/data" component={DataDashboard} />
              <Route path="/dashboard/admin" component={AdminDashboard} />
            </Switch>
          </div>
        </div>
      </Fragment>
    );
  }
}

idtDashboard.propTypes = {
  allSbAlertRecentStatus: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  allSbDetectionRulesStatus: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  allSbDetectionScenariosStatus: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  allSbAlertCaseStatus: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  allSbDetectionProfilesStatus: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]).isRequired,
  getAllDetectionScenariosList: PropTypes.func,
  getAllDetectionProfilesList: PropTypes.func,
  getAllDetectionRulesList: PropTypes.func,
  getAllAlertSortedList: PropTypes.func,
  getAllSbAlertRecentStatus: PropTypes.func,
  getAllSbDetectionScenariosStatus: PropTypes.func,
  getAllSbAlertCaseStatus: PropTypes.func,
  getAllSbDetectionRulesStatus: PropTypes.func,
  getAllSbDetectionProfilesStatus: PropTypes.func,
  getAllAlertList: PropTypes.func,
  getAllAdminLogicalViews: PropTypes.func,
  getAllCasesSortedList: PropTypes.func,
  getAllAdminUserList: PropTypes.func,
  getAllAdminGroupList: PropTypes.func,
  getAllAdminRisksList: PropTypes.func,
  getAllAdminRoleList: PropTypes.func,
  getAllAdminOrgUnitList: PropTypes.func,
  getAllCaseList: PropTypes.func,
  id: PropTypes.number,
  userId: PropTypes.string,
  loggedUser: PropTypes.string,
  defaultAlertDisplay: PropTypes.array,
  defaultCaseDisplay: PropTypes.array,
  alertUserPreferenceList: PropTypes.array,
  availableLists: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  availableOrgUnits: PropTypes.array,
  orgUnits: PropTypes.array,
  availablePerms: PropTypes.array
}

const mapStateToProps = (state) => ({
  allSbAlertRecentStatus: state.alertsReducer.allSbAlertRecentStatus,
  allSbDetectionRulesStatus: state.detectionReducer.allSbDetectionRulesStatus,
  allSbDetectionScenariosStatus: state.detectionReducer.allSbDetectionScenariosStatus,
  allSbDetectionProfilesStatus: state.detectionReducer.allSbDetectionProfilesStatus,
  allSbAlertCaseStatus: state.alertsReducer.allSbAlertCaseStatus,
  id: state.loginReducer.userDetails.user.id,
  userId: state.loginReducer.userDetails.user.userId,
  loggedUser: state.loginReducer.userDetails.user.fullName,
  availableLists: state.loginReducer.availableLists,
  isLoading: state.commonReducer.isLoading,
  alertUserPreferenceList: state.loginReducer.alertUserPreferenceList,
  availableOrgUnits: state.loginReducer.availableOrgUnits,
  availablePerms: state.loginReducer.availablePerms,
  defaultCaseDisplay: state.loginReducer.defaultCaseDisplay,
  defaultAlertDisplay: state.loginReducer.defaultAlertDisplay,
  orgUnits: state.loginReducer.orgUnits,
  detectionNameSelectedSb: state.detectionReducer.detectionNameSelectedSb,
  maxRecordPerAlertPage: state.loginReducer.maxRecordPerAlertPage,
  maxRecordPerCasePage: state.loginReducer.maxRecordPerCasePage
})

const mapDispatchToProps = (dispatch) => ({
  getAllAlertList: (alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, defaultAlertDisplay, maxRecordPerAlertPage) => dispatch(getAllAlertList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, defaultAlertDisplay, maxRecordPerAlertPage)),
  getAllCaseList: (alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, defaultCaseDisplay, maxRecordPerCasePage) => dispatch(getAllCaseList(alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, defaultCaseDisplay, maxRecordPerCasePage)),
  getAllSbAlertRecentStatus: (userId, availableLists, defaultAlertDisplay) => dispatch(getAllSbAlertRecentStatus(userId, availableLists, defaultAlertDisplay)),
  getAllSbAlertCaseStatus: (userId, availableLists, defaultCaseDisplay) => dispatch(getAllSbAlertCaseStatus(userId, availableLists, defaultCaseDisplay)),
  getAllAdminUserList: (userId) => dispatch(getAllAdminUserList(userId)),
  getAllAdminGroupList: (userId) => dispatch(getAllAdminGroupList(userId)),
  getAllAdminRoleList: (userId) => dispatch(getAllAdminRoleList(userId)),
  getAllAdminRisksList: (userId) => dispatch(getAllAdminRisksList(userId)),
  getAllAdminOrgUnitList: (userId) => dispatch(getAllAdminOrgUnitList(userId)),
  getAllAdminLogicalViews: (id, userId) => dispatch(getAllAdminLogicalViews(id, userId)),
  getAllSbDetectionRulesStatus: (userId, availableLists) => dispatch(getAllSbDetectionRulesStatus(userId, availableLists)),
  getAllSbDetectionProfilesStatus: (userId, availableLists) => dispatch(getAllSbDetectionProfilesStatus(userId, availableLists)),
  getAllSbDetectionScenariosStatus: (userId, availableLists) => dispatch(getAllSbDetectionScenariosStatus(userId, availableLists)),
  getAllDetectionRulesList: (detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms) => dispatch(getAllDetectionRulesList(detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms)),
  getAllDetectionScenariosList: (detectionNameSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms) => dispatch(getAllDetectionScenariosList(detectionNameSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms)),
  getAllDetectionProfilesList: (detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms) => dispatch(getAllDetectionProfilesList(detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms))
})
/* eslint-disable */
export default idtDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(idtDashboard)
/* eslint-enable */
