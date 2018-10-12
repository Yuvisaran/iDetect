import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _map from 'lodash/map';
import { withRouter, NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import Custombtn from 'src/components/customBtn/customBtn';
import TreeView from './../../BootstrapComponent/TreeView';
import { topBarTitleSelectedSb, alertIdSelectedSb } from 'src/alerts/service/action';
import { detectionIdSelectedSb, detectionNameSelectedSb } from 'src/detection/service/action';
import { getChildrenListByParentID } from 'src/data/service/action';

import 'src/common/css/mockcss/style.css';
import 'src/common/css/owncss/style.css';

class Sidebar extends Component {
  static propTypes = {
    allSbAlertRecentStatus: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]).isRequired,
    allSbAlertCaseStatus: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]).isRequired,
    allTreeFolderList: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    allSbDetectionProfilesStatus: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    allSbDetectionRulesStatus: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    allSbDetectionScenariosStatus: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
    ]),
    detectionRulesListFetch: PropTypes.func,
    sbAdminLogicalViewFetch: PropTypes.func,
    detectionScenariosListFetch: PropTypes.func,
    detectionProfilesListFetch: PropTypes.func,
    sortedAlertListFetch: PropTypes.func,
    sortedCasesListFetch: PropTypes.func,
    sbAdminUserListFetch: PropTypes.func,
    sbAdminGroupListFetch: PropTypes.func,
    sbAdminRoleListFetch: PropTypes.func,
    sbAdminOrgUnitListFetch: PropTypes.func,
    sbAdminRisksListFetch: PropTypes.func,
    topBarTitleSelectedSb: PropTypes.func,
    getChildrenListByParentID: PropTypes.func,
    alertIdSelectedSb: PropTypes.func,
    detectionIdSelectedSb: PropTypes.func,
    detectionNameSelectedSb: PropTypes.func,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    userId: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string
  };

  static defaultProps = {
    location: {
      pathname: ''
    }
  }

  state = {
    showSidebar: 'is-hidden',
    isAlertSbActive: 'My Alerts'
  }

  changeAlertActive = (value) => {
    this.setState({ isAlertSbActive: value }, () =>
      this.props.topBarTitleSelectedSb(this.state.isAlertSbActive));
  }

  dataListAction = (dataID) => {
    const { id, userId, name } = this.props;
    this.props.getChildrenListByParentID(dataID, id, userId, name);
  }

  renderData = () => {
    return (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            <FormattedMessage
              id={ 'sideBar.data' } />
          </h1>
          <svg className="o-icon" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
            <title>search-icon</title>
            <g transform="translate(1 1)" stroke="#888D95" strokeWidth="1.6" fill="none" fillRule="evenodd" strokeLinecap="round">
              <path d="M11 11L7.776 7.776" /><circle cx="4.552" cy="4.552" r="4.552" /></g>
          </svg>
          <svg className="o-icon" width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
            <title>Group 5</title>
            <path d="M6 1v8M3 4l3-3 3 3m2 4v5H1V8" stroke="#888D95" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        {_map(this.props.allTreeFolderList, (each, key) => (
          <div key={each.id} className="c-main-nav__submenu">
            <div className="c-explorer-header">
              <h3 className="c-explorer-header__title">{each.label}</h3>
            </div>
            <nav className="c-explorer">
              <TreeView list={each.children} itemAction={this.dataListAction} />
            </nav>
          </div>)
        )}
      </div>
    );
  }

  renderAlerts = () => {
    const { allSbAlertRecentStatus, allSbAlertCaseStatus, sortedAlertListFetch } = this.props;
    const sbAlertList = [{
      alertId: 1,
      alertName: 'My Alerts',
      alertStatus: allSbAlertRecentStatus.amountOfMyAlerts,
      link: '/dashboard/alerts/my_alerts'
    }, {
      alertId: 2,
      alertName: 'Today',
      alertStatus: allSbAlertRecentStatus.amountOfToday,
      link: '/dashboard/alerts/today'
    }, {
      alertId: 3,
      alertName: 'Yesterday',
      alertStatus: allSbAlertRecentStatus.amountOfOneDay,
      link: '/dashboard/alerts/yesterday'
    }, {
      alertId: 4,
      alertName: 'Earlier this week',
      alertStatus: allSbAlertRecentStatus.amountOfCurrentWeek,
      link: '/dashboard/alerts/earlier_this_week'
    }, {
      alertId: 5,
      alertName: 'Last week',
      alertStatus: allSbAlertRecentStatus.amountOfOneWeek,
      link: '/dashboard/alerts/last_week'
    }, {
      alertId: 6,
      alertName: 'Two weeks ago',
      alertStatus: allSbAlertRecentStatus.amountOfTwoWeeks,
      link: '/dashboard/alerts/two_weeks_ago'
    }, {
      alertId: 7,
      alertName: 'Three weeks ago',
      alertStatus: allSbAlertRecentStatus.amountOfThreeWeeks,
      link: '/dashboard/alerts/three_weeks_ago'
    }, {
      alertId: 8,
      alertName: 'Four weeks ago',
      alertStatus: allSbAlertRecentStatus.amountOfFourWeeks,
      link: '/dashboard/alerts/four_weeks_ago'
    }, {
      alertId: 9,
      alertName: 'Older',
      alertStatus: allSbAlertRecentStatus.amountOfOlder,
      link: '/dashboard/alerts/alerts_older'
    }];

    const sbCaseList = [{
      alertId: 1,
      alertName: 'My cases',
      alertStatus: allSbAlertCaseStatus.amountOfMyAlerts,
      link: '/dashboard/alerts/my_cases'
    },
    {
      alertId: 2,
      alertName: 'This Month',
      alertStatus: allSbAlertCaseStatus.amountOfOneMonth,
      link: '/dashboard/alerts/this_month'
    }, {
      alertId: 3,
      alertName: 'Earlier This Semester',
      alertStatus: allSbAlertCaseStatus.amountOfSixMonths,
      link: '/dashboard/alerts/earlier_this_semester'
    }, {
      alertId: 4,
      alertName: 'Last Semester',
      alertStatus: allSbAlertCaseStatus.amountOfOneYear,
      link: '/dashboard/alerts/last_semester'
    }, {
      alertId: 5,
      alertName: 'Older',
      alertStatus: allSbAlertCaseStatus.amountOfOlder,
      link: '/dashboard/alerts/cases_older'
    }];

    return (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            <FormattedMessage
              id={ 'sideBar.alerts' } />
          </h1>
        </div>
        <div className="c-main-nav__submenu">
          <nav className="c-explorer">
            {_map(sbAlertList, (each, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <Custombtn className='c-explorer__item js-explorer__item '
                    id={each.alertId} name={each.alertName}
                    onClick={(event) => {
                      sortedAlertListFetch(event.target.id);
                      this.props.alertIdSelectedSb(each.alertId)
                      this.changeAlertActive(event.target.name);
                    }}
                    key={key}>{each.alertName}
                    <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                  </Custombtn>
                </NavLink>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              <FormattedMessage
                id={ 'sideBar.cases' } />
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbCaseList, (each, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <Custombtn className='c-explorer__item js-explorer__item'
                    id={each.alertId} name={each.alertName} key={key}
                    onClick={(event) => {
                      this.props.sortedCasesListFetch(event.target.id);
                      this.props.alertIdSelectedSb(each.alertId)
                      this.changeAlertActive(event.target.name);
                    }}> {each.alertName}
                    <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                  </Custombtn>
                </NavLink>
              )
            })}
          </nav>
        </div> </div>
    );
  };

  render() {
    const { showSidebar, isAlertSbActive } = this.state;
    const { allSbDetectionProfilesStatus, allSbDetectionRulesStatus, allSbDetectionScenariosStatus, sbAdminUserListFetch,
      sbAdminGroupListFetch, sbAdminRoleListFetch, sbAdminRisksListFetch, sbAdminOrgUnitListFetch } = this.props;
    const sbAnalysisList = [{
      analysisId: 1,
      analysisName: 'Today'
      // analysisStatus: allSbAnalysisRecentStatus.amountOfMyAlerts
    }, {
      analysisId: 2,
      analysisName: 'Tomorrow'
      // analysisStatus: allSbAnalysisRecentStatus.amountOfOneDay
    }, {
      analysisId: 3,
      analysisName: 'Earlier this week'
      // analysisStatus: allSbAnalysisRecentStatus.amountOfCurrentWeek
    }, {
      analysisId: 4,
      analysisName: 'Last week'
      // analysisStatus: allSbAnalysisRecentStatus.amountOfOneWeek
    }];

    const sbAnalysisCaseList = [{
      analysisId: 1,
      analysisName: 'My Cases'
      // analysisStatus: allSbAnalysisCaseStatus.amountOfMyAlerts
    },
    {
      analysisId: 2,
      analysisName: 'This Month'
      // analysisStatus: allSbAnalysisCaseStatus.amountOfOneMonth
    }, {
      analysisId: 3,
      analysisName: 'Earlier This Week'
      // analysisStatus: allSbAnalysisCaseStatus.amountOfSixMonths
    }, {
      analysisId: 4,
      analysisName: 'Last Week'
      // analysisStatus: allSbAnalysisCaseStatus.amountOfOneYear
    }];

    const sbAnalysisPersonalList = [{
      analysisId: 1,
      analysisName: 'My Cases'
      // analysisStatus: allSbAnalysisPersonalStatus.amountOfMyAlerts
    },
    {
      analysisId: 2,
      analysisName: 'This Month'
      // analysisStatus: allSbAnalysisPersonalStatus.amountOfOneMonth
    }, {
      analysisId: 3,
      analysisName: 'Earlier This Week'
      // analysisStatus: allSbAnalysisPersonalStatus.amountOfSixMonths
    }, {
      analysisId: 4,
      analysisName: 'Last Week'
      // analysisStatus: allSbAnalysisPersonalStatus.amountOfOneYear
    }];

    const sbDetectionRulesList = [{
      detectionId: 0,
      detectionName: 'Per Record',
      link: '/dashboard/detection/rules/r_per_record',
      detectionStatus: allSbDetectionRulesStatus.amountPerRecord
    }, {
      detectionId: 1,
      detectionName: 'Daily',
      link: '/dashboard/detection/rules/r_daily',
      detectionStatus: allSbDetectionRulesStatus.amountDaily
    }, {
      detectionId: 2,
      detectionName: 'Weekly',
      link: '/dashboard/detection/rules/r_weekly',
      detectionStatus: allSbDetectionRulesStatus.amountWeekly
    }, {
      detectionId: 3,
      detectionName: 'Monthly',
      link: '/dashboard/detection/rules/r_monthly',
      detectionStatus: allSbDetectionRulesStatus.amountMonthly
    }, {
      detectionId: 4,
      detectionName: 'Quarterly',
      link: '/dashboard/detection/rules/r_quarterly',
      detectionStatus: allSbDetectionRulesStatus.numberOfQuarters
    }, {
      detectionId: 5,
      detectionName: 'Yearly',
      link: '/dashboard/detection/rules/r_yearly',
      detectionStatus: allSbDetectionRulesStatus.numberOfYears
    }];

    const sbDetectionProfilesList = [{
      detectionId: 0,
      detectionName: 'Per Record',
      link: '/dashboard/detection/profiles/per_record',
      detectionStatus: allSbDetectionProfilesStatus.amountPerRecord
    }, {
      detectionId: 4,
      detectionName: 'Daily',
      link: '/dashboard/detection/profiles/p_daily',
      detectionStatus: allSbDetectionProfilesStatus.amountDaily
    }, {
      detectionId: 5,
      detectionName: 'Weekly',
      link: '/dashboard/detection/profiles/p_weekly',
      detectionStatus: allSbDetectionProfilesStatus.amountWeekly
    }, {
      detectionId: 6,
      detectionName: 'Monthly',
      link: '/dashboard/detection/profiles/p_monthly',
      detectionStatus: allSbDetectionProfilesStatus.amountMonthly
    }, {
      detectionId: 9,
      detectionName: 'Quarterly',
      link: '/dashboard/detection/profiles/p_quarterly',
      detectionStatus: allSbDetectionProfilesStatus.numberOfQuarters
    }, {
      detectionId: 10,
      detectionName: 'Yearly',
      link: '/dashboard/detection/profiles/p_yearly',
      detectionStatus: allSbDetectionProfilesStatus.numberOfYears
    }, {
      detectionId: 7,
      detectionName: 'Hourly',
      link: '/dashboard/detection/profiles/p_hourly',
      detectionStatus: allSbDetectionProfilesStatus.numberHourly
    },
    {
      detectionId: 8,
      detectionName: 'Minutely',
      link: '/dashboard/detection/profiles/p_minutely',
      detectionStatus: allSbDetectionProfilesStatus.numberMinutely
    }];

    const sbDetectionScenariosList = [{
      detectionId: 1,
      detectionName: 'Online',
      link: '/dashboard/detection/scenarios/online',
      detectionStatus: allSbDetectionScenariosStatus.online
    },
    {
      detectionId: 2,
      detectionName: 'RealTime',
      link: '/dashboard/detection/scenarios/real_time',
      detectionStatus: allSbDetectionScenariosStatus.realTime
    }, {
      detectionId: 3,
      detectionName: 'Batch',
      link: '/dashboard/detection/scenarios/batch',
      detectionStatus: allSbDetectionScenariosStatus.batch
    }, {
      detectionId: 4,
      detectionName: 'Workflow',
      link: '/dashboard/detection/scenarios/workflow',
      detectionStatus: allSbDetectionScenariosStatus.workflow
    }];

    /* const sbAdminList = [{
          adminId: 1,
          adminName: 'Users'
        },
        {
          adminId: 2,
          adminName: 'Groups'
        },
        {
          adminId: 3,
          adminName: 'Roles'
        },
        {
          adminId: 4,
          adminName: 'Organization Units'
        },
        {
          adminId: 5,
          adminName: 'Risks'
        },
        {
          adminId: 6,
          adminName: 'Logical Views'
        },
        {
          adminId: 7,
          adminName: 'Scheduler'
        },
        {
          adminId: 8,
          adminName: 'Overview'
        },
        {
          adminId: 9,
          adminName: 'Web Crawlers'
        },
        {
          adminId: 10,
          adminName: 'Logs'
        },
        {
          adminId: 11,
          adminName: 'Workflows'
        },
        {
          adminId: 12,
          adminName: 'Settings'
        }]; */

    const SidebarAnalysis = () => (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            <FormattedMessage
              id={ 'sideBar.analysis' } />
          </h1>
        </div>
        <div className="c-main-nav__submenu">
          <nav className="c-explorer">

            {_map(sbAnalysisList, (each, key) => {
              return (

                <Custombtn className={`c-explorer__item js-explorer__item ${isAlertSbActive === each.analysisName ? 'is-active' : ''}`}
                  id={each.analysisId} name={each.analysisName}
                  onClick={(event) => {
                    this.changeAlertActive(event.target.name)
                  }}
                  key={key}>{each.analysisName}
                  <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                </Custombtn>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              <FormattedMessage
                id={ 'sideBar.cases' } />
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbAnalysisCaseList, (each, key) => {
              return (
                <Custombtn className={`c-explorer__item js-explorer__item ${isAlertSbActive === each.analysisName ? 'is-active' : ''}`}
                  id={each.analysisId} name={each.analysisName} key={key}
                  onClick={(event) => {
                    this.changeAlertActive(event.target.name)
                  }}> {each.analysisName}
                  <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                </Custombtn>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              <FormattedMessage
                id={ 'sideBar.personal' } />
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbAnalysisPersonalList, (each, key) => {
              return (
                <Custombtn className={`c-explorer__item js-explorer__item ${isAlertSbActive === each.analysisName ? 'is-active' : ''}`}
                  id={each.analysisId} name={each.analysisName} key={key}
                  onClick={(event) => {
                    this.changeAlertActive(event.target.name)
                  }}> {each.analysisName}
                  <span className="c-explorer__count js-explorer__count">{each.alertStatus ? each.alertStatus : 0}</span>
                </Custombtn>
              )
            })}
          </nav>
        </div>
      </div>
    );

    const SidebarDetection = () => (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            <FormattedMessage
              id={ 'sideBar.detection' } />
          </h1>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              <FormattedMessage
                id={ 'sideBar.rules' } />
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbDetectionRulesList, (each, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <Custombtn className="c-explorer__item js-explorer__item"
                    id={each.detectionId} name={each.detectionName}
                    onClick={(event) => {
                      this.props.detectionRulesListFetch(event.target.id);
                      this.props.detectionIdSelectedSb(each.detectionId)
                      this.changeAlertActive(event.target.name)
                    }}
                    key={key}>{each.detectionName}
                    <span className="c-explorer__count js-explorer__count">{each.detectionStatus ? each.detectionStatus : 0}</span>
                  </Custombtn>
                </NavLink>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              <FormattedMessage
                id={ 'sideBar.scenarios' } />
            </h3>
          </div>
          <nav className="c-explorer">
            {_map(sbDetectionScenariosList, (each, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <Custombtn className="c-explorer__item js-explorer__item"
                    id={each.detectionId} name={each.detectionName} key={key}
                    onClick={(event) => {
                      this.props.detectionScenariosListFetch(each.detectionName);
                      this.props.detectionNameSelectedSb(each.detectionName)
                      this.changeAlertActive(event.target.name)
                    }}> {each.detectionName}
                    <span className="c-explorer__count js-explorer__count">{each.detectionStatus ? each.detectionStatus : 0}</span>
                  </Custombtn>
                </NavLink>
              )
            })}
          </nav>
        </div>
        <div className="c-main-nav__submenu">
          <div className="c-explorer-header">
            <h3 className="c-explorer-header__title">
              <FormattedMessage
                id={ 'sideBar.profiles' } />
            </h3>
          </div>
          <nav className="c-explorer">

            {_map(sbDetectionProfilesList, (each, key) => {
              return (
                <NavLink to={each.link} key={key} activeClassName="custButtonActive">
                  <Custombtn className="c-explorer__item js-explorer__item"
                    id={each.detectionId} name={each.detectionName} key={key}
                    onClick={(event) => {
                      this.props.detectionProfilesListFetch(event.target.id);
                      this.props.detectionIdSelectedSb(each.detectionId)
                      this.changeAlertActive(event.target.name)
                    }}> {each.detectionName}
                    <span className="c-explorer__count js-explorer__count">{each.detectionStatus ? each.detectionStatus : 0}</span>
                  </Custombtn>
                </NavLink>
              )
            })}
          </nav>
        </div>
      </div>
    );

    const SidebarAdmin = () => (
      <div>
        <div className="o-heading">
          <h1 className="o-heading__title">
            <FormattedMessage
              id={ 'sideBar.admin' } />
          </h1>
          <svg className="o-icon o-icon-rotate" width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
            <title>Group 5</title>
            <path d="M6 1v8M3 4l3-3 3 3m2 4v5H1V8" stroke="#888D95" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="o-icon" width="12" height="14" viewBox="0 0 12 14" xmlns="http://www.w3.org/2000/svg">
            <title>Group 5</title>
            <path d="M6 1v8M3 4l3-3 3 3m2 4v5H1V8" stroke="#888D95" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg className="o-icon" width="13" height="13" viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
            <title>search-icon</title>
            <g transform="translate(1 1)" stroke="#888D95" strokeWidth="1.6" fill="none" fillRule="evenodd" strokeLinecap="round">
              <path d="M11 11L7.776 7.776" /><circle cx="4.552" cy="4.552" r="4.552" /></g>
          </svg>
        </div>
        <div className="c-main-nav__submenu">
          <nav className="c-explorer">

            <NavLink to='/dashboard/admin/users' activeClassName='custButtonActive'>
              <button className='c-explorer__item js-explorer-item' type="button"
                onClick={(event) => {
                  sbAdminUserListFetch();
                  this.changeAlertActive('Users');
                }}>
                <FormattedMessage
                  id={ 'sideBar.users' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/groups' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Groups' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  sbAdminGroupListFetch();
                  this.changeAlertActive('Groups');
                }}>
                <FormattedMessage
                  id={ 'sideBar.groups' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/roles' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Roles' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  sbAdminRoleListFetch();
                  this.changeAlertActive('Roles');
                }}>
                <FormattedMessage
                  id={ 'sideBar.roles' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/organization_units' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Organization Units' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  sbAdminOrgUnitListFetch();
                  this.changeAlertActive('Organization Units');
                }}>
                <FormattedMessage
                  id={ 'sideBar.organizationUnits' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/risks' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Risks' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  sbAdminRisksListFetch();
                  this.changeAlertActive('Risks');
                }}>
                <FormattedMessage
                  id={ 'sideBar.risks' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/logical_views' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Logical views' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.props.sbAdminLogicalViewFetch();
                  this.changeAlertActive('Logical views');
                }}>
                <FormattedMessage
                  id={ 'sideBar.logicalViews' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/scheduler' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Scheduler' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Scheduler');
                }}>
                <FormattedMessage
                  id={ 'sideBar.scheduler' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/overview' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Overview' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Overview');
                }}>
                <FormattedMessage
                  id={ 'sideBar.overview' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/web_crawlers' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Web Crawlers' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Web Crawlers');
                }}>
                <FormattedMessage
                  id={ 'sideBar.webCrawlers' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/logs' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Logs' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Logs');
                }}>
                <FormattedMessage
                  id={ 'sideBar.logs' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/workflows' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Workflows' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Workflows');
                }}>
                <FormattedMessage
                  id={ 'sideBar.workflows' } />
              </button>
            </NavLink>
            <NavLink to='/dashboard/admin/settings' activeClassName='custButtonActive'>
              <button className={`c-explorer__item js-explorer-item ${isAlertSbActive === 'Settings' ? 'is-active' : ''}`} type="button"
                onClick={(event) => {
                  this.changeAlertActive('Settings');
                }}>
                <FormattedMessage
                  id={ 'sideBar.settings' } />
              </button>
            </NavLink>
          </nav>
        </div>
      </div>
    );

    return (
      <nav className="c-main-nav">
        <div className={`c-main-nav__inner c-main-nav__inner--primary ${showSidebar}`}>
          <Custombtn className="c-main-nav__close-btn" onClick={() => this.setState({ showSidebar: showSidebar === '' ? 'is-hidden' : '' })}>
            <svg width="6" height="9" viewBox="0 0 6 9" xmlns="http://www.w3.org/2000/svg">
              <title>small-arrow-right</title>
              <path d="M4.402 8L1 4.5 4.402 1" stroke="#C5C5C5" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Custombtn>
          <svg className="c-main-nav__brand" width="18" height="22" viewBox="0 0 18 22" xmlns="http://www.w3.org/2000/svg"><title>idetect monogram</title>
            <g fill="none" fillRule="evenodd"><path d="M.646 21h2.708V9.634H.646V21zM1.988 0C3.106 0 4 .878 4 1.976c0 1.073-.894 1.951-2.012 1.951C.894 3.927 0 3.05 0 1.976A1.98 1.98 0 0 1 1.988 0z" fill="#4F40F4"></path>
              <path d="M15.341 15.806c0-2.023-1.317-3.741-3.366-3.741-2 0-3.317 1.718-3.317 3.74 0 2.023 1.317 3.742 3.317 3.742 2.049 0 3.366-1.719 3.366-3.741zm0 4.298C14.634 21.292 13.146 22 11.83 22 8.366 22 6 19.143 6 15.806c0-3.337 2.366-6.193 5.83-6.193 1.316 0 2.804.707 3.511 1.896V4H18v17.697h-2.659v-1.593z" fill="#4848F1"></path></g></svg>

          {/* todo  */}
          {/* have to find which class is active and have to pass the class name in li item  */}
          {/* when sub routes are added active should be highlighted with Link element */}
          <ul className="c-main-nav__list">
            <NavLink to='/dashboard/alerts'>
              <li className={`c-main-nav__item js-main-nav__item1 ${this.props.location.pathname.includes('/dashboard/alerts') ? 'is-active' : ''}`} name="Alerts" onClick={(event) => {
                this.changeAlertActive('My Alerts');
              }}>
                <button className="c-main-nav__button" name="Alerts">
                  <span className="c-main-nav__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="100%" height="100%" className="o-icon">
                      <path d="M18.22 7.46a4.63 4.63 0 0 1-1.56-.29V18.1a.9.9 0 0 1-.9.9H2.91a.9.9 0 0 1-.9-.9V5.24a.91.91 0 0 1 .9-.9h10.92a4.63 4.63 0 0 1-.29-1.56v-.44H2.91A2.91 2.91 0 0 0 0 5.24V18.1A2.91 2.91 0 0 0 2.91 21h12.85a2.91 2.91 0 0 0 2.9-2.9V7.41c-.14.02-.29.05-.44.05z" />
                      <circle cx="18.22" cy="2.78" r="2.78" />
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Dashboard
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    <FormattedMessage
                      id={ 'sideBar.dashboard' } />
                  </span>
                </button>
              </li>
            </NavLink>
            <NavLink to='/dashboard/analysis'>
              <li className={`c-main-nav__item js-main-nav__item1 ${this.props.location.pathname.includes('/dashboard/analysis') ? 'is-active' : ''}`} name="Analysis" onClick={(event) => {
                this.changeAlertActive('Today');
              }}>
                <button className="c-main-nav__button" name="Analysis">
                  <span className="c-main-nav__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="100%" height="100%" className="o-icon">
                      <path d="M15.85 13.24a3 3 0 0 0-.66.08l-.24-.32c-.33-.47-.62-.86-.89-1.22a4.89 4.89 0 0 1-1.39-3.18V5.68a2.92 2.92 0 0 0 2-2.75 3 3 0 0 0-5.91 0 2.92 2.92 0 0 0 1.92 2.73v2.87a3.28 3.28 0 0 1-1.12 3l-3.42 3.79a2.91 2.91 0 1 0 2 2.74 2.87 2.87 0 0 0-.42-1.49l2.83-3.13.58-.7c.26-.31.46-.56.64-.8.22.34.47.67.74 1s.53.71.85 1.16l.19.25a2.88 2.88 0 0 0-.62 1.78 3 3 0 1 0 3-2.92zM5.15 19a.95.95 0 1 1 1-.94 1 1 0 0 1-1 .94zm6.56-17a1 1 0 0 1 1 .95 1 1 0 0 1-2 0 1 1 0 0 1 1-.95zm4.13 15.13a.95.95 0 1 1 1-.95 1 1 0 0 1-.99.93z" />
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Analysis
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    <FormattedMessage
                      id={ 'sideBar.analysis' } /></span>
                </button>
              </li>
            </NavLink>
            <NavLink to='/dashboard/detection'>
              <li className={`c-main-nav__item js-main-nav__item1 ${this.props.location.pathname.includes('/dashboard/detection') ? 'is-active' : ''}`} name="Detection" onClick={(event) => {
                this.changeAlertActive('Per Record');
              }}>
                <button className="c-main-nav__button" name="Detection">
                  <span className="c-main-nav__icon">
                    <svg data-name="Calque 4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="100%" height="100%" className="o-icon">
                      <path d="M13.71 10.71H.89A.87.87 0 0 1 .89 9h12.82a.87.87 0 1 1 0 1.73zm0-6.56H.89a.87.87 0 1 1 0-1.73h12.82a.87.87 0 1 1 0 1.73zM8.58 17.27H.89a.87.87 0 0 1 0-1.73h7.69a.87.87 0 0 1 0 1.73zm6.04 1.31a.87.87 0 0 1-.66-.31l-2.19-2.62a.87.87 0 1 1 1.33-1.11l1.53 1.83 4.83-5.77a.87.87 0 0 1 1.33 1.11l-5.5 6.56a.86.86 0 0 1-.67.31z" data-name="layouts/main-nav/expended" />
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Detection
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    <FormattedMessage
                      id={ 'sideBar.detection' } />
                  </span>
                </button>
              </li>
            </NavLink>
            <NavLink to='/dashboard/data'>
              <li className={`c-main-nav__item js-main-nav__item1 ${this.props.location.pathname.includes('/dashboard/data') ? 'is-active' : ''}`} name="Data" onClick={(event) => {
                this.changeAlertActive('Today');
              }}>
                <button className="c-main-nav__button" name="Data">
                  <span className="c-main-nav__icon">
                    <svg data-name="Calque 3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="100%" height="100%" className="o-icon">
                      <path d="M17.6 20.94H3.33A3.34 3.34 0 0 1 0 17.6V3.33A3.34 3.34 0 0 1 3.33 0h4.56a1.19 1.19 0 0 1 .9.41L11 2.93h6.6a3.34 3.34 0 0 1 3.33 3.33V17.6a3.34 3.34 0 0 1-3.33 3.34zM3.33 2.39a1 1 0 0 0-.95.95V17.6a1 1 0 0 0 .95.95H17.6a1 1 0 0 0 .95-.95V6.26a1 1 0 0 0-.95-.95h-7.13a1.19 1.19 0 0 1-.9-.41L7.35 2.39z" data-name="layouts/main-nav/expended" />
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Data
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    <FormattedMessage
                      id={ 'sideBar.data' } />
                  </span>
                </button>
              </li>
            </NavLink>
            <NavLink to='/dashboard/admin'>
              <li className={`c-main-nav__item js-main-nav__item1 ${this.props.location.pathname.includes('/dashboard/admin') ? 'is-active' : ''}`} name="Admin" onClick={(event) => {
                this.changeAlertActive('Users');
              }}>
                <button className="c-main-nav__button" name="Admin">
                  <span className="c-main-nav__icon">
                    <svg data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 16" width="100%" height="100%" className="o-icon">
                      <path d="M10.53 3.25a3 3 0 0 1 .9.15V1a.9.9 0 0 0-1.8 0v2.41a3 3 0 0 1 .9-.16zm0 6a3 3 0 0 1-.9-.15V15a.9.9 0 0 0 1.8 0V9.09a3 3 0 0 1-.9.16z" /><ellipse cx="10.53" cy="6.25" rx="1.93" ry="1.91" /><path d="M3.47 12.75a3 3 0 0 1-.9-.15V15a.9.9 0 1 0 1.8 0v-2.41a3 3 0 0 1-.9.16zm0-6a3 3 0 0 1 .9.15V1a.9.9 0 0 0-1.8 0v5.91a3 3 0 0 1 .9-.16z" />
                      <ellipse cx="3.47" cy="9.75" rx="1.93" ry="1.91" />
                    </svg>
                    <span className="o-tooltip o-tooltip--main-nav">
                      <span className="o-tooltip__arrow"></span>Admin
                    </span>
                  </span>
                  <span className="c-main-nav__text">
                    <FormattedMessage
                      id={ 'sideBar.admin' } />
                  </span>
                </button>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="c-main-nav__inner c-main-nav__inner--secondary js-main-nav__inner--secondary is-visible">
          {this.props.location.pathname.includes('/dashboard/alerts') && this.renderAlerts()}
          {this.props.location.pathname.includes('/dashboard/analysis') && SidebarAnalysis()}
          {this.props.location.pathname.includes('/dashboard/detection') && SidebarDetection()}
          {this.props.location.pathname.includes('/dashboard/data') && this.renderData()}
          {this.props.location.pathname.includes('/dashboard/admin') && SidebarAdmin()}
        </div>
      </nav>
    );
  }
}

const stateToProps = (state) => ({
  allTreeFolderList: state.dataReducer.allTreeFolderList,
  userId: state.loginReducer.userDetails.user.userId,
  id: state.loginReducer.userDetails.user.id,
  name: state.loginReducer.userDetails.user.name
})

const mapDispatchToProps = (dispatch) => ({
  getChildrenListByParentID: (dataID, id, userId, name) => dispatch(getChildrenListByParentID(dataID, id, userId, name)),
  topBarTitleSelectedSb: (data) => dispatch(topBarTitleSelectedSb(data)),
  alertIdSelectedSb: (data) => dispatch(alertIdSelectedSb(data)),
  detectionIdSelectedSb: (data) => dispatch(detectionIdSelectedSb(data)),
  detectionNameSelectedSb: (data) => dispatch(detectionNameSelectedSb(data))
})

/* eslint-disable */
Sidebar = connect(
  stateToProps,
  mapDispatchToProps
)(Sidebar)
/* eslint-enable */

export default withRouter(Sidebar);
