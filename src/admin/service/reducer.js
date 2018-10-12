import { initialState } from './initial.js';

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALL_ADMIN_DATALIST_SUCCESS':
      return {
        ...state,
        adminDataList: action.payload
      }

    case 'ALL_ADMIN_RISKLIST_SUCCESS':
      return {
        ...state,
        adminRiskList: action.payload
      }
    case 'ALL_ADMIN_ORGUNIT_LIST_SUCCESS':
      return {
        ...state,
        adminOrgUnitList: action.payload
      }
    default:
      return state
  }
}

export default adminReducer;
