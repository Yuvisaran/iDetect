import axios from 'axios';

import {
  ALL_DETECTION_LIST_SUCCESS,
  ALL_SB_DETECTION_RULES_STATUS_SUCCESS,
  ALL_SB_DETECTION_SCENARIOS_STATUS_SUCCESS,
  ALL_SB_DETECTION_PROFILES_STATUS_SUCCESS,
  TOP_BAR_TITLE_SELECTED_SB,
  DETECTION_NAME_SELECTED_SB,
  DETECTION_ID_SELECTED_SB
} from './actionType';
import { showIsLoading, hideIsLoading } from 'src/common/service/action';
import { Idetect_api_url } from 'src/constants/apiUrl';

export const getAllSbDetectionRulesStatus = (userId, availableLists) => (dispatch) => {
  axios.post(Idetect_api_url + '/detection/rule/stats/detection', {
    'user': {
      'availableLists': availableLists,
      'availableOrgUnits': [39, 37, 38, 36, 1, 35],
      'orgUnits': [
        {'id': 39}, {'id': 37}, {'id': 38}, {'id': 36}, {'id': 1}, {'id': 35}
      ],
      'availablePerms': [6000, 1, 100, 101, 200, 201, 202, 203, 204, 102, 250, 251, 252, 253, 103, 300, 301, 302, 303, 105, 400, 401, 402, 403, 106, 450, 451, 452, 453, 107, 108, 550, 551, 552, 554, 555, 556, 557, 109, 600, 601, 112, 800, 801, 802, 803, 113, 850, 851, 852, 853, 114, 900, 901, 902, 903, 115, 1100, 1101, 1102, 1103, 116, 1200, 1201, 1202, 1203, 117, 1300, 1301, 1302, 1303, 118, 1400, 1401, 1402, 1403, 119, 1500, 1501, 1502, 1503, 120, 1600, 1601, 1602, 1603, 121, 1700, 1701, 1702, 1703, 97, 2, 1000, 1001, 1002, 1003, 1004, 1010, 1011, 1012, 98, 3, 2000, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 99, 4, 3000, 3100, 3200, 3201, 3202, 3203, 3101, 3300, 3301, 3302, 3303, 3102, 3400, 3401, 3402, 3403, 3103, 5, 4000, 4100, 4101, 6, 5000, 5100, 5200, 5201, 5202, 5203, 5101, 5300, 5301, 5302, 5303, 8, 7000, 9, 9000],
      'id': 1,
      'userId': 'adminesch',
      'name': 'adminesch'
    }
  })
    .then(response => {
      dispatch(allSbDetectionRulesStatusSuccess(response))
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}
export const getAllSbDetectionScenariosStatus = (userId, availableLists) => (dispatch) => {
  axios.post(Idetect_api_url + '/detection/scenario/stats/detection', {
    'user': {
      'availableLists': availableLists,
      'availableOrgUnits': [39, 37, 38, 36, 1, 35],
      'orgUnits': [
        {'id': 39}, {'id': 37}, {'id': 38}, {'id': 36}, {'id': 1}, {'id': 35}
      ],
      'availablePerms': [6000, 1, 100, 101, 200, 201, 202, 203, 204, 102, 250, 251, 252, 253, 103, 300, 301, 302, 303, 105, 400, 401, 402, 403, 106, 450, 451, 452, 453, 107, 108, 550, 551, 552, 554, 555, 556, 557, 109, 600, 601, 112, 800, 801, 802, 803, 113, 850, 851, 852, 853, 114, 900, 901, 902, 903, 115, 1100, 1101, 1102, 1103, 116, 1200, 1201, 1202, 1203, 117, 1300, 1301, 1302, 1303, 118, 1400, 1401, 1402, 1403, 119, 1500, 1501, 1502, 1503, 120, 1600, 1601, 1602, 1603, 121, 1700, 1701, 1702, 1703, 97, 2, 1000, 1001, 1002, 1003, 1004, 1010, 1011, 1012, 98, 3, 2000, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 99, 4, 3000, 3100, 3200, 3201, 3202, 3203, 3101, 3300, 3301, 3302, 3303, 3102, 3400, 3401, 3402, 3403, 3103, 5, 4000, 4100, 4101, 6, 5000, 5100, 5200, 5201, 5202, 5203, 5101, 5300, 5301, 5302, 5303, 8, 7000, 9, 9000],
      'id': 1,
      'userId': 'adminesch',
      'name': 'adminesch'
    }
  })
    .then(response => {
      dispatch(allSbDetectionScenariosStatusSuccess(response))
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}
export const getAllSbDetectionProfilesStatus = (userId, availableLists) => (dispatch) => {
  axios.post(Idetect_api_url + '/detection/profile/stats/detection', {
    'user': {
      'availableLists': availableLists,
      'availableOrgUnits': [39, 37, 38, 36, 1, 35],
      'orgUnits': [
        {'id': 39}, {'id': 37}, {'id': 38}, {'id': 36}, {'id': 1}, {'id': 35}
      ],
      'availablePerms': [6000, 1, 100, 101, 200, 201, 202, 203, 204, 102, 250, 251, 252, 253, 103, 300, 301, 302, 303, 105, 400, 401, 402, 403, 106, 450, 451, 452, 453, 107, 108, 550, 551, 552, 554, 555, 556, 557, 109, 600, 601, 112, 800, 801, 802, 803, 113, 850, 851, 852, 853, 114, 900, 901, 902, 903, 115, 1100, 1101, 1102, 1103, 116, 1200, 1201, 1202, 1203, 117, 1300, 1301, 1302, 1303, 118, 1400, 1401, 1402, 1403, 119, 1500, 1501, 1502, 1503, 120, 1600, 1601, 1602, 1603, 121, 1700, 1701, 1702, 1703, 97, 2, 1000, 1001, 1002, 1003, 1004, 1010, 1011, 1012, 98, 3, 2000, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 99, 4, 3000, 3100, 3200, 3201, 3202, 3203, 3101, 3300, 3301, 3302, 3303, 3102, 3400, 3401, 3402, 3403, 3103, 5, 4000, 4100, 4101, 6, 5000, 5100, 5200, 5201, 5202, 5203, 5101, 5300, 5301, 5302, 5303, 8, 7000, 9, 9000],
      'id': 1,
      'userId': 'adminesch',
      'name': 'adminesch'
    }
  })
    .then(response => {
      dispatch(allSbDetectionProfilesStatusSuccess(response))
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}
export const getAllDetectionRulesList = (detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/detection/rules/from', {
    'maxSize': '0',
    'page': '0',
    'orderField': null,
    'orderDirection': 'asc',
    'periodicityId': [detectionIdSelectedSb],
    'user': {
      'availableLists': availableLists,
      'availableOrgUnits': availableOrgUnits,
      'orgUnits': [
        {'id': 39}, {'id': 37}, {'id': 38}, {'id': 36}, {'id': 1}, {'id': 35}
      ],
      'availablePerms': availablePerms,
      'id': id,
      'userId': userId,
      'name': 'adminesch'
    },
    'profile': false,
    'arrayFilter': []
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allDetectionRulesListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}
export const getAllDetectionScenariosList = (detectionNameSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/detection/scenario/from', {
    'maxSize': '0',
    'page': '0',
    'orderField': null,
    'orderDirection': 'asc',
    'inputType': detectionNameSelectedSb,
    'user': {
      'availableLists': availableLists,
      'availableOrgUnits': availableOrgUnits,
      'orgUnits': [
        {'id': 39}, {'id': 37}, {'id': 38}, {'id': 36}, {'id': 1}, {'id': 35}
      ],
      'availablePerms': availablePerms,
      'id': id,
      'userId': userId,
      'name': 'adminesch'
    },
    'profile': false,
    'arrayFilter': []
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allDetectionScenariosListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}
export const getAllDetectionProfilesList = (detectionIdSelectedSb, id, userId, availableLists, availableOrgUnits, orgUnits, availablePerms) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/detection/profile/from', {
    'maxSize': '0',
    'page': '0',
    'orderField': null,
    'orderDirection': 'asc',
    'periodicityId': [detectionIdSelectedSb],
    'user': {
      'availableLists': availableLists,
      'availableOrgUnits': availableOrgUnits,
      'orgUnits': [
        {'id': 39}, {'id': 37}, {'id': 38}, {'id': 36}, {'id': 1}, {'id': 35}
      ],
      'availablePerms': availablePerms,
      'id': id,
      'userId': userId,
      'name': 'adminesch'
    },
    'profile': false,
    'arrayFilter': []
  })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(allDetectionProfilesListSuccess(response));
    })
    .catch(function (error) {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const allSbDetectionRulesStatusSuccess = (response) => {
  return {
    type: ALL_SB_DETECTION_RULES_STATUS_SUCCESS,
    payload: response.data.rulesStats
  }
}

export const allSbDetectionScenariosStatusSuccess = (response) => {
  return {
    type: ALL_SB_DETECTION_SCENARIOS_STATUS_SUCCESS,
    payload: response.data.scenarioStats
  }
}

export const allSbDetectionProfilesStatusSuccess = (response) => {
  return {
    type: ALL_SB_DETECTION_PROFILES_STATUS_SUCCESS,
    payload: response.data.profileStats
  }
}

export const allDetectionRulesListSuccess = (response) => {
  return {
    type: ALL_DETECTION_LIST_SUCCESS,
    payload: response.data.rulesInfoList[1]
  }
}

export const allDetectionScenariosListSuccess = (response) => {
  return {
    type: ALL_DETECTION_LIST_SUCCESS,
    payload: response.data.scenarioInfoList[1]
  }
}

export const allDetectionProfilesListSuccess = (response) => {
  return {
    type: ALL_DETECTION_LIST_SUCCESS,
    payload: response.data.profileInfoList[1]
  }
}
export const topBarTitleSelectedSb = (data) => {
  return {
    type: TOP_BAR_TITLE_SELECTED_SB,
    payload: data
  }
}
export const detectionIdSelectedSb = (data) => {
  return {
    type: DETECTION_ID_SELECTED_SB,
    payload: data
  }
}
export const detectionNameSelectedSb = (data) => {
  return {
    type: DETECTION_NAME_SELECTED_SB,
    payload: data
  }
}
