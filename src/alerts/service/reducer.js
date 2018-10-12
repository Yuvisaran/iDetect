import { initialState } from './initial.js';
import {
  ALL_ALERT_LIST_SUCCESS,
  ALL_ALERT_PAGINATION_SUCCESS,
  ALL_ALERT_FILTER_LIST_SUCCESS,
  ALL_SB_ALERT_RECENT_STATUS_SUCCESS,
  ALL_SB_ALERT_CASE_STATUS_SUCCESS,
  ALL_RIGHT_PANE_RELATED_DATA_SUCCESS,
  ALL_RIGHT_PANE_HISTORY_DATA_SUCCESS,
  TOP_BAR_TITLE_SELECTED_SB,
  ALERT_ID_SELECTED_SB,
  COMMENT_HISTORY_SUCCESS
} from './actionType';

const alertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_ALERT_LIST_SUCCESS:
      return {
        ...state,
        maxRecords: action.list,
        allAlertList: action.payload,
        pageReturned: action.pageReturned
      }
    case ALL_ALERT_FILTER_LIST_SUCCESS:
      return {
        ...state,
        maxRecords: action.list,
        allAlertList: action.payload
      }
    case ALL_ALERT_PAGINATION_SUCCESS:
      return {
        ...state,
        paginatedList: action.payload
      }
    case ALL_SB_ALERT_RECENT_STATUS_SUCCESS:
      return {
        ...state,
        allSbAlertRecentStatus: action.payload
      }
    case ALL_SB_ALERT_CASE_STATUS_SUCCESS:
      return {
        ...state,
        allSbAlertCaseStatus: action.payload
      }
    case ALL_RIGHT_PANE_RELATED_DATA_SUCCESS:
      return {
        ...state,
        allRightPaneRelatedData: action.payload
      }
    case ALL_RIGHT_PANE_HISTORY_DATA_SUCCESS:
      return {
        ...state,
        allRightPaneHistoryData: action.payload
      }
    case TOP_BAR_TITLE_SELECTED_SB:
      return {
        ...state,
        topBarTitleSelectedSb: action.payload
      }
    case COMMENT_HISTORY_SUCCESS:
      return {
        ...state,
        entityCommentForEntityWithHistory: action.payload
      }
    case ALERT_ID_SELECTED_SB:
      return {
        ...state,
        alertIdSelectedSb: action.payload
      }

    default:
      return state
  }
}

export default alertsReducer;
