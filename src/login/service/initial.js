export const initialState = {
  initCacheLoaded: true,
  loginSuccess: false,
  isAuth: false,
  loginErrMsg: '',
  availableLists: [],
  availableOrgUnits: [],
  availablePerms: [],
  orgUnits: [],
  userDetails: {
    user: {
      id: '',
      userId: ''
    }
  },
  alertUserPreferenceList: [],
  AlertsListFields: [],
  alertListDetails: {},
  defaultAlertDisplay: [],
  defaultCaseDisplay: [],
  alertCaseAvailableFields: [],
  maxRecordPerAlertPage: 10,
  maxRecordPerCasePage: 10
}
