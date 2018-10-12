import axios from 'axios';
import _isEmpty from 'lodash/isEmpty';
import _isArray from 'lodash/isArray';

import {
  ALL_ALERT_LIST_SUCCESS,
  // ALL_ALERT_PAGINATION_SUCCESS,
  ALL_ALERT_FILTER_LIST_SUCCESS,
  ALL_SB_ALERT_RECENT_STATUS_SUCCESS,
  ALL_SB_ALERT_CASE_STATUS_SUCCESS,
  ALL_RIGHT_PANE_RELATED_DATA_SUCCESS,
  ALL_RIGHT_PANE_HISTORY_DATA_SUCCESS,
  TOP_BAR_TITLE_SELECTED_SB,
  ALERT_ID_SELECTED_SB,
  COMMENT_HISTORY_SUCCESS,
  SAVE_COMMENT_SUCCESS,
  FILE_UPLOAD_SUCCESS
} from './actionType';
import { showIsLoading, hideIsLoading } from 'src/common/service/action';
import { alertUserPreferenceSuccess } from 'src/login/service/action';
import { Idetect_api_url, Idetect_servlet_url } from 'src/constants/apiUrl';

export const getAllAlertList = (alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, defaultAlertDisplay, maxRecordPerAlertPage) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/alert/main/alert/filter', {
    'alertType': alertIdSelectedSb,
    'page': 0,
    'maxRecords': maxRecordPerAlertPage || 10,
    'userFilter': false,
    'isFiltered': false,
    'calculateMaxRecords': true,
    'orderField': _isEmpty(orderField) ? null : orderField,
    'orderDirection': _isEmpty(orderDirection) ? null : orderDirection,
    'user': {
      'id': id,
      'userId': userId,
      'availableLists': availableLists
    },
    'statusIdList': defaultAlertDisplay
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allAlertListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}
export const getAllCaseList = (alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, defaultCaseDisplay, maxRecordPerCasePage) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/alert/main/cases/filter', {
    'caseType': alertIdSelectedSb,
    'page': 0,
    'maxRecords': maxRecordPerCasePage || 10,
    'userFilter': false,
    'isFiltered': false,
    'orderField': _isEmpty(orderField) ? null : orderField,
    'orderDirection': _isEmpty(orderDirection) ? null : orderDirection,
    'user': {
      'id': 1,
      'groups': [{ 'name': 'CASE1' }],
      'userId': userId,
      'availableLists': availableLists
    },
    'statusIdList': defaultCaseDisplay,
    'listDetails': { 'id': 12 },
    'calculateMaxRecords': true
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allAlertCaseSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllAlertFilterList = (alertId, id, userId, availableLists, name, filterArray, alertListDetails, defaultAlertDisplay) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/alert/main/alert/filter', {
    'alertType': alertId,
    'page': 0,
    'maxRecords': 0,
    'userFilter': true,
    'isFiltered': true,
    'calculateMaxRecords': true,
    'listDetails': alertListDetails,
    'user': {
      'id': id,
      'userId': userId,
      'name': name,
      'availableLists': availableLists,
      'userAlgorithmPreferences': {
        'listOfCheckField': filterArray
      }
    },
    'statusIdList': defaultAlertDisplay
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allAlertFilterListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllCaseFilterList = (caseId, id, userId, availableLists, name, filterArray, caseListDetails, defaultCaseDisplay) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/alert/main/cases/filter', {
    'caseType': caseId,
    'page': 0,
    'maxRecords': 0,
    'userFilter': true,
    'isFiltered': true,
    'calculateMaxRecords': true,
    'listDetails': caseListDetails,
    'user': {
      'id': id,
      'userId': userId,
      'availableLists': availableLists,
      'userAlgorithmPreferences': {
        'listOfCheckField': filterArray
      }
    },
    'statusIdList': defaultCaseDisplay
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allCaseFilterSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllSbAlertRecentStatus = (userId, availableLists, defaultAlertDisplay) => (dispatch) => {
  axios.post(Idetect_api_url + '/alert/init/status', {
    'user': {
      'userId': userId,
      'availableLists': availableLists
    },
    'statusIdList': defaultAlertDisplay
  })
    .then(response => {
      dispatch(allSbAlertRecentStatusSuccess(response))
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllSbAlertCaseStatus = (userId, availableLists, defaultCaseDisplay) => (dispatch) => {
  axios.post(Idetect_api_url + '/alert/init/case/status', {
    'user': {
      'groups': [{ 'name': 'CASE1' }],
      'userId': userId,
      'availableLists': availableLists
    },
    'statusIdList': defaultCaseDisplay
  })
    .then(response => {
      dispatch(allSbAlertCaseStatusSuccess(response))
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllAlertSortedList = (alertIdSelectedSb, id, userId, availableLists, orderField = null, orderDirection = null, pageNumber, maxRecordPerAlertPage, defaultAlertDisplay) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/alert/main/alert/filter', {
    'alertType': alertIdSelectedSb,
    'page': pageNumber || 0,
    'maxRecords': maxRecordPerAlertPage || 10,
    'userFilter': false,
    'isFiltered': false,
    'calculateMaxRecords': true,
    'orderField': _isEmpty(orderField) ? null : orderField,
    'orderDirection': _isEmpty(orderDirection) ? null : orderDirection,
    'user': {
      'id': id,
      'userId': userId,
      'availableLists': availableLists
    },
    'statusIdList': defaultAlertDisplay
  }).then(response => {
    dispatch(hideIsLoading());
    dispatch(allAlertSortedListSuccess(response));
    dispatch(alertUserPreferenceSuccess(response.data.getUserDashBoardPreferences))
  })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAllCasesSortedList = (alertIdSelectedSb, id, userId, availableLists, orderField, orderDirection, pageNumber, maxRecordPerCasePage, defaultCaseDisplay) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/alert/main/cases/filter', {
    'caseType': alertIdSelectedSb,
    'page': pageNumber || 0,
    'maxRecords': maxRecordPerCasePage || 10,
    'userFilter': false,
    'isFiltered': false,
    'orderField': _isEmpty(orderField) ? null : orderField,
    'orderDirection': _isEmpty(orderDirection) ? null : orderDirection,
    'user': {
      'id': 1,
      'groups': [{ 'name': 'CASE1' }],
      'userId': userId,
      'availableLists': availableLists
    },
    'statusIdList': defaultCaseDisplay,
    'listDetails': { 'id': 12 },
    'calculateMaxRecords': true
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allCaseSortedListSuccess(response));
      dispatch(alertUserPreferenceSuccess(response.data.getUserDashBoardPreferences))
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}
export const getRightPaneRelated = (id, userId, availableLists) => (dispatch) => {
  axios.post(Idetect_api_url + '/alert/main/relationshiptype/entity', {
    'entityIdList': _isArray(id) ? id : [id],
    'paramters': [{ 'id': -2, 'type': -2 }],
    'depth': 1,
    'user': { 'userId': userId, 'availableLists': availableLists }
  })
    .then(response => {
      dispatch(rightPaneRelatedSuccess(response));
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getRightPaneHistory = (selectedListId, userId) => (dispatch) => {
  axios.post(Idetect_api_url + '/alert/main/audit/log', {
    'user': { 'userId': userId, 'orgunitId': 1, 'orgUnits': [{ 'id': 1 }], 'deleted': 'N' },
    'entityId': selectedListId,
    'page': 0,
    'maxRecords': 100,
    'orderField': null,
    'auditCategory': 'ENTITY'
  })
    .then(response => {
      dispatch(rightPaneHistorySuccess(response))
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const downloadDocument = (filePath) => (dispatch) => {
  // Todo: try to resolve using GET method
  window.open(Idetect_servlet_url + '/AttachDocServlet?filename=' + filePath)
}

export const uploadDocument = (uid, file, userId, availableLists) => (dispatch) => {
  dispatch(showIsLoading());
  const formData = new FormData();
  formData.append('linkentityid', uid)
  formData.append('baseurl', Idetect_servlet_url + '/AttachDocServlet');
  formData.append('uploadfile', file);
  axios.post(Idetect_api_url + '/alert/upload/document',
    formData,
    {
      'headers': {
        'content-type': 'multipart/form-data'
      }
    })
    .then(response => {
      dispatch(hideIsLoading());
      if (response.data.status === 'Success') {
        dispatch(uploadDocumentSuccess(response))
        dispatch(getRightPaneRelated(uid, userId, availableLists));
      } else {
        /* eslint-disable */
        console.warn(response.data.message);
        /* eslint-enable */
      }
    })
    .catch(error => {
      /* eslint-disable */
      console.log(error);
      /* eslint-enable */
    })
}

export const getCommentHistory = (alertID) => (dispatch) => {
  axios.post(Idetect_api_url + '/comment/get/commenthistory/byuid',
    {
      'uid': alertID,
      'type': 'OPS'
    })
    .then(response => {
      dispatch(commentHistorySuccess(response))
    })
    .catch(error => {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const saveComment = (uid, comment, alertUid, userId) => dispatch => {
  axios.post(Idetect_api_url + '/comment/save/comment',
    {
      'comment': {
        'uid': uid,
        'comment': comment,
        'uidTbl': alertUid
      },
      'type': 'OPS',
      'user': {
        'userId': userId
      }
    })
    .then(response => {
      if (response.data.status === 'Success') {
        dispatch(saveCommentSuccess(response));
        dispatch(getCommentHistory(alertUid));
      } else {
        /* eslint-disable */
        console.warn(response.data.message);
        /* eslint-enable */
      }
    })
    .catch(error => {
      /* eslint-disable */
      console.log(error);
      /* eslint-enable */
    })
}

export const allAlertFilterListSuccess = (response) => {
  return {
    type: ALL_ALERT_FILTER_LIST_SUCCESS,
    payload: response.data.alertFilterList.resultList
  }
}
export const allCaseFilterSuccess = (response) => {
  return {
    type: ALL_ALERT_FILTER_LIST_SUCCESS,
    payload: response.data.casesFilterList.resultList
  }
}

export const allAlertListSuccess = (response) => {
  return {
    type: ALL_ALERT_FILTER_LIST_SUCCESS,
    list: response.data.alertFilterList.maximumAmount,
    payload: response.data.alertFilterList.resultList
  }
}

export const allAlertCaseSuccess = (response) => {
  return {
    type: ALL_ALERT_FILTER_LIST_SUCCESS,
    list: response.data.casesFilterList.maximumAmount,
    payload: response.data.casesFilterList.resultList
  }
}
export const allAlertSortedListSuccess = (response) => {
  return {
    type: ALL_ALERT_LIST_SUCCESS,
    payload: response.data.alertFilterList.resultList,
    list: response.data.alertFilterList.maximumAmount,
    pageReturned: response.data.alertFilterList.pageNumber
  }
}
export const allCaseSortedListSuccess = (response) => {
  return {
    type: ALL_ALERT_LIST_SUCCESS,
    payload: response.data.casesFilterList.resultList,
    list: response.data.casesFilterList.maximumAmount,
    pageReturned: response.data.casesFilterList.pageNumber
  }
}
export const allSbAlertRecentStatusSuccess = (response) => {
  return {
    type: ALL_SB_ALERT_RECENT_STATUS_SUCCESS,
    payload: response.data.alertManagementStats
  }
}

export const allSbAlertCaseStatusSuccess = (response) => {
  return {
    type: ALL_SB_ALERT_CASE_STATUS_SUCCESS,
    payload: response.data.alertManagementStats
  }
}

export const rightPaneRelatedSuccess = (response) => {
  return {
    type: ALL_RIGHT_PANE_RELATED_DATA_SUCCESS,
    payload: response.data
  }
}

export const rightPaneHistorySuccess = (response) => {
  return {
    type: ALL_RIGHT_PANE_HISTORY_DATA_SUCCESS,
    payload: response.data.auditLogList
  }
}

export const topBarTitleSelectedSb = (data) => {
  return {
    type: TOP_BAR_TITLE_SELECTED_SB,
    payload: data
  }
}
export const alertIdSelectedSb = (data) => {
  return {
    type: ALERT_ID_SELECTED_SB,
    payload: data
  }
}
export const commentHistorySuccess = (response) => {
  return {
    type: COMMENT_HISTORY_SUCCESS,
    payload: response.data.entityCommentForEntityWithHistory
  }
}
export const saveCommentSuccess = (response) => {
  return {
    type: SAVE_COMMENT_SUCCESS,
    payload: response.data.updateEntityCommentForEntity
  }
}
export const uploadDocumentSuccess = (response) => {
  return {
    type: FILE_UPLOAD_SUCCESS,
    payload: response.data
  }
}
