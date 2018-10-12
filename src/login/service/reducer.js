import { initialState } from './initial.js';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LOGIN_INIT_CACHE':
      return {
        ...state,
        initCacheLoaded: false
      }

    case 'AUTHENTICATE_USER':
      return {
        ...state,
        loginSuccess: true,
        isAuth: true,
        userDetails: action.payload.loginInfoDTO,
        availableLists: action.payload.loginInfoDTO.user.availableLists,
        alertUserPreferenceList: action.payload.loginInfoDTO.userDashBoardPreferences,
        AlertsListFields: action.payload.loginInfoDTO.alertListDetails.listOfFields,
        alertListDetails: action.payload.loginInfoDTO.alertListDetails,
        caseListDetails: action.payload.loginInfoDTO.caseListDetails,
        caseListFields: action.payload.loginInfoDTO.caseListDetails.listOfFields,
        availableOrgUnits: action.payload.loginInfoDTO.user.availableOrgUnits,
        availablePerms: action.payload.loginInfoDTO.user.availablePerms,
        orgUnits: action.payload.loginInfoDTO.user.orgUnits,
        workflowStatusAlertClosed: action.payload.loginInfoDTO.workflowStatusAlertClosed,
        workflowStatusAlertOpen: action.payload.loginInfoDTO.workflowStatusAlertOpen,
        workflowStatusCaseClosed: action.payload.loginInfoDTO.workflowStatusCaseClosed,
        workflowStatusCaseOpen: action.payload.loginInfoDTO.workflowStatusCaseOpen,
        alertCaseAvailableFields: action.payload.loginInfoDTO.multiSelectPreferences.availableFields,
        loginErrMsg: ''
      }

    case 'SHOW_LOGIN_ERR_MSG':
      return {
        ...state,
        loginErrMsg: action.payload
      }

    case 'LOGOUT_USER':
      return {
        ...state,
        isAuth: false,
        loginSuccess: false,
        availableLists: [],
        userDetails: {
          user: {
            id: '',
            userId: ''
          }
        },
        alertUserPreferenceList: [],
        AlertsListFields: [],
        caseListDetails: [],
        caseListFields: []
      }
    case 'ALL_ALERT_USER_PREFERENCE':
      return {
        ...state,
        alertUserPreferenceList: action.payload
      }
    case 'MANAGE_DEFAULT_DISPLAY':
      return {
        ...state,
        defaultAlertDisplay: action.defaultAlertDisplay,
        defaultCaseDisplay: action.defaultCaseDisplay,
        maxRecordPerAlertPage: action.defaultMaxRecordPerPageAlert,
        maxRecordPerCasePage: action.defaultMaxRecordPerPageCase
      }
    default:
      return state
  }
}

export default loginReducer;
