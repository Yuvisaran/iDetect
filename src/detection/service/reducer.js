import { initialState } from './initial.js';
import {
  ALL_DETECTION_LIST_SUCCESS,
  ALL_SB_DETECTION_RULES_STATUS_SUCCESS,
  ALL_SB_DETECTION_SCENARIOS_STATUS_SUCCESS,
  ALL_SB_DETECTION_PROFILES_STATUS_SUCCESS,
  TOP_BAR_TITLE_SELECTED_SB,
  DETECTION_NAME_SELECTED_SB,
  DETECTION_ID_SELECTED_SB
} from './actionType';

const detectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_SB_DETECTION_RULES_STATUS_SUCCESS:
      return {
        ...state,
        allSbDetectionRulesStatus: action.payload
      }
    case ALL_SB_DETECTION_SCENARIOS_STATUS_SUCCESS:
      return {
        ...state,
        allSbDetectionScenariosStatus: action.payload
      }
    case ALL_SB_DETECTION_PROFILES_STATUS_SUCCESS:
      return {
        ...state,
        allSbDetectionProfilesStatus: action.payload
      }
    case ALL_DETECTION_LIST_SUCCESS:
      return {
        ...state,
        allDetectionList: action.payload
      }
    case TOP_BAR_TITLE_SELECTED_SB:
      return {
        ...state,
        topBarTitleSelectedSb: action.payload
      }
    case DETECTION_ID_SELECTED_SB:
      return {
        ...state,
        detectionIdSelectedSb: action.payload
      }
    case DETECTION_NAME_SELECTED_SB:
      return {
        ...state,
        detectionNameSelectedSb: action.payload
      }

    default:
      return state
  }
}

export default detectionReducer;
