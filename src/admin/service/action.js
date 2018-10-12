import axios from 'axios';
import _isEmpty from 'lodash/isEmpty';

import {
  ALL_ADMIN_DATALIST_SUCCESS,
  ALL_ADMIN_RISKLIST_SUCCESS,
  ALL_ADMIN_ORGUNIT_LIST_SUCCESS,
  ADMIN_RISK_MERGE_REQUEST_SUCCESS
} from './actionType';
import { showIsLoading, hideIsLoading } from 'src/common/service/action';
import { Idetect_api_url } from 'src/constants/apiUrl';

export const getAllAdminUserList = (userId) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/user/all', {
    'page': '0',
    'maxSize': '35',
    'filterType': '',
    'filterCritUser': null,
    'currentUser': {
      'userId': userId,
      'availableOrgUnits': [
        '37',
        '1',
        '36',
        '35',
        '38',
        '39'
      ]
    }
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allAdminUserListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllAdminGroupList = (userId) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/group/all', {
    'page': 0,
    'maxSize': 35,
    'filterType': '',
    'group': null,
    'user': { 'userId': userId }
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allAdminGroupListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllAdminRoleList = (userId) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/group/all/role', {
    'page': 0,
    'maxSize': 35,
    'filterType': '',
    'role': null,
    'user': { 'userId': userId }
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allAdminRoleListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllAdminRisksList = (userId) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/risk/all', {
    'page': 0,
    // Todo: per page value need to come here from pagination
    'maxSize': '10',
    'user': {
      'id': '1',
      'userId': userId,
      'availableOrgUnits': [
        '37',
        '1',
        '36',
        '35',
        '38',
        '39'
      ]
    }
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allAdminRisksListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error);
      /* eslint-enable */
    })
}

export const riskMergeRequest = (userId, id, name, riskLevel) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/risk/merge', {
    'orgunit': {
      'id': id,
      'riskLevel': riskLevel
    },
    'user': {
      'userId': userId
    },
    'comment': 'Updated Risk Level For OrgUnit: ' + name
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(getAllAdminRisksList(userId));
      dispatch(riskMergeRequestSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error);
      /* eslint-enable */
    })
}

export const getAllAdminOrgUnitList = () => dispatch => {
  dispatch(showIsLoading());
  axios.get(Idetect_api_url + '/orgunit/all', {
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allAdminOrgUnitListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllAdminLogicalViews = (id, userId) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/logicalviews/getalllogicalviewslist', {
    'page': 0,
    'maxRecords': 10,
    'filterTypeKey': null,
    'filtCrit': null,
    'user': {
      'id': id,
      'userId': userId
    }
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(adminLogicalViewsSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const allAdminUserListSuccess = (response) => {
  return {
    type: ALL_ADMIN_DATALIST_SUCCESS,
    payload: _isEmpty(response.data.users[1]) ? [] : response.data.users[1]
  }
}

export const allAdminGroupListSuccess = (response) => {
  return {
    type: ALL_ADMIN_DATALIST_SUCCESS,
    payload: _isEmpty(response.data.groupList[1]) ? [] : response.data.groupList[1]
  }
}

export const allAdminRoleListSuccess = (response) => {
  return {
    type: ALL_ADMIN_DATALIST_SUCCESS,
    payload: _isEmpty(response.data.rolesList[1]) ? [] : response.data.rolesList[1]
  }
}

export const allAdminRisksListSuccess = (response) => {
  return {
    type: ALL_ADMIN_RISKLIST_SUCCESS,
    payload: _isEmpty(response.data.allRiskList[1]) ? [] : response.data.allRiskList[1]
  }
}

export const riskMergeRequestSuccess = (response) => {
  return {
    type: ADMIN_RISK_MERGE_REQUEST_SUCCESS,
    payload: response.data
  }
}

export const allAdminOrgUnitListSuccess = (response) => {
  return {
    type: ALL_ADMIN_ORGUNIT_LIST_SUCCESS,
    payload: response.data.orgUnitList
  }
}

export const adminLogicalViewsSuccess = (response) => {
  return {
    type: ALL_ADMIN_DATALIST_SUCCESS,
    payload: response.data.logicalViewsList[1]
  }
}
