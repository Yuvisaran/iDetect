import axios from 'axios';
import _map from 'lodash/map';
import _filter from 'lodash/filter';

import {
  GET_LOGIN_INIT_CACHE,
  AUTHENTICATE_USER,
  SHOW_LOGIN_ERR_MSG,
  LOGOUT_USER,
  ALL_ALERT_USER_PREFERENCE,
  MANAGE_DEFAULT_DISPLAY
} from './actionType';
import { showIsLoading, hideIsLoading } from 'src/common/service/action';
import { Idetect_api_url } from 'src/constants/apiUrl';

export const getLoginInitCache = (dispatch) => {
  axios.get(Idetect_api_url + '/logincontroller/initLogin')
    .then(response => {
      dispatch(loginInitCacheSuccess(response))
    })
    /* eslint-disable */
    .catch(function (error) {
      console.log(error)
      /* eslint-enable */
    })
}

export const loginInitCacheSuccess = (response) => {
  return {
    type: GET_LOGIN_INIT_CACHE,
    payload: response.status
  }
}

export const authenticateUser = (dispatch, credentials) => {
  dispatch(showIsLoading())
  axios.post(Idetect_api_url + '/logincontroller/login', {
    userId: credentials.email,
    password: credentials.password
  })
    .then(response => {
      if (response.request.status === 200) {
        dispatch(hideIsLoading());
        dispatch(manageDefaultDisplay(response.data));
        dispatch(authenticateUserSuccess(response.data));
      } else {
        dispatch(hideIsLoading());
        dispatch(authenticateUserFailure(response.data));
      }
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getAlertUserPreference = (userId) => (dispatch) => {
  axios.post(Idetect_api_url + '/alert/get/user/dashboard/preferences', {
    'user': { 'id': userId }
  })
    .then(response => {
      dispatch(alertUserPreferenceSuccess(response.data.getUserDashBoardPreferences))
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const saveUserPreferenceDisplay = (id, userId, UpArray) => (dispatch) => {
  axios.post(Idetect_api_url + '/alert/save/user/dashboard/preferences', {
    'user': {
      'id': id,
      'userId': id
    },
    'hideFiledsAlert': UpArray
  })
    .then(response => {
      dispatch(alertUserPreferenceSuccess(response.data.getUserDashBoardPreferences))
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}
export const saveUserPreferenceParameters = (id, userId, upList) => (dispatch) => {
  axios.post(Idetect_api_url + '/alert/save/user/dashboard/preferences', {
    'user': {
      'userId': userId,
      'id': id
    },
    'dashPref': upList
  })
    .then(response => {
      dispatch(alertUserPreferenceSuccess(response.data.getUserDashBoardPreferences));
      // note: added userpreference in a object so that you can pass anduse in manageDefaultDisplay
      const resObject = {
        loginInfoDTO: {
          userDashBoardPreferences: response.data.getUserDashBoardPreferences
        }
      }
      dispatch(manageDefaultDisplay(resObject));
    })
    .catch(function (error) {
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const authenticateUserSuccess = (response) => {
  return {
    type: AUTHENTICATE_USER,
    payload: response
  }
}

export const authenticateUserFailure = (response) => {
  return {
    type: SHOW_LOGIN_ERR_MSG,
    payload: response.message
  }
}

export const logoutUser = () => {
  return {
    type: LOGOUT_USER
  }
}

// note: since we are getting dashboard userpreference in login response itself we have this action here itself

export const alertUserPreferenceSuccess = (response) => {
  return {
    type: ALL_ALERT_USER_PREFERENCE,
    payload: response
  }
}

// note: this function maintains default alert and case display which is from userpreference.
export const manageDefaultDisplay = (response) => (dispatch, getState) => {
  let defaultAlertDisplay, defaultCaseDisplay, defaultMaxRecordPerPageAlert, defaultMaxRecordPerPageCase;
  _map(response.loginInfoDTO.userDashBoardPreferences, each => {
    // note: send both alert and case ids togather
    if (each.preferenceCode === 'displayTypeOfAlert') {
      switch (each.preferenceValue) {
        case '0':
          defaultAlertDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusCaseOpen)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusCaseOpen);
          break;
        case '1':
          defaultAlertDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusAlertClosed, response.loginInfoDTO.workflowStatusCaseOpen, response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusAlertClosed, getState().loginReducer.workflowStatusCaseOpen, getState().loginReducer.workflowStatusCaseClosed);
          break;
        case '2':
          defaultAlertDisplay = response.loginInfoDTO.workflowStatusAlertClosed
            ? response.loginInfoDTO.workflowStatusAlertClosed.concat(response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertClosed.concat(getState().loginReducer.workflowStatusCaseClosed);
          break;
        default:
          defaultAlertDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusAlertClosed, response.loginInfoDTO.workflowStatusCaseOpen, response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusAlertClosed, getState().loginReducer.workflowStatusCaseOpen, getState().loginReducer.workflowStatusCaseClosed);
          break;
      }
    } else if (each.preferenceCode === 'displayTypeOfCase') {
      // note: send both alert and case ids togather
      switch (each.preferenceValue) {
        case '0':
          defaultCaseDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusCaseOpen)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusCaseOpen);
          break;
        case '1':
          defaultCaseDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusAlertClosed, response.loginInfoDTO.workflowStatusCaseOpen, response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusAlertClosed, getState().loginReducer.workflowStatusCaseOpen, getState().loginReducer.workflowStatusCaseClosed);
          break;
        case '2':
          defaultCaseDisplay = response.loginInfoDTO.workflowStatusAlertClosed
            ? response.loginInfoDTO.workflowStatusAlertClosed.concat(response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertClosed.concat(getState().loginReducer.workflowStatusCaseClosed);
          break;
        default:
          defaultCaseDisplay = response.loginInfoDTO.workflowStatusAlertOpen
            ? response.loginInfoDTO.workflowStatusAlertOpen.concat(response.loginInfoDTO.workflowStatusAlertClosed, response.loginInfoDTO.workflowStatusCaseOpen, response.loginInfoDTO.workflowStatusCaseClosed)
            : getState().loginReducer.workflowStatusAlertOpen.concat(getState().loginReducer.workflowStatusAlertClosed, getState().loginReducer.workflowStatusCaseOpen, getState().loginReducer.workflowStatusCaseClosed);
          break;
      }
    } else if (each.preferenceCode === 'displayMaxRecordPerPageAlert') {
      defaultMaxRecordPerPageAlert = each.preferenceValue;
    } else if (each.preferenceCode === 'displayMaxRecordPerPageCase') {
      defaultMaxRecordPerPageCase = each.preferenceValue;
    }
  })
  dispatch(updateDefaultDisplay(defaultAlertDisplay, defaultCaseDisplay, defaultMaxRecordPerPageAlert, defaultMaxRecordPerPageCase));
}

export const updateDefaultDisplay = (defaultAlertDisplay, defaultCaseDisplay, defaultMaxRecordPerPageAlert, defaultMaxRecordPerPageCase) => {
  return {
    type: MANAGE_DEFAULT_DISPLAY,
    defaultAlertDisplay: defaultAlertDisplay,
    defaultCaseDisplay: defaultCaseDisplay,
    defaultMaxRecordPerPageAlert: defaultMaxRecordPerPageAlert,
    defaultMaxRecordPerPageCase: defaultMaxRecordPerPageCase
  }
}
