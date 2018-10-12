import { initialState } from './initial.js';
import { TREE_FOLDER_LIST_SUCCESS, CHILDREN__LIST_BY_PARENT_ID_SUCCESS } from './actionType';

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case TREE_FOLDER_LIST_SUCCESS:

      return {
        ...state,
        allTreeFolderList: action.payload
      }
    case CHILDREN__LIST_BY_PARENT_ID_SUCCESS:

      return {
        ...state,
        childrenListByParentId: action.payload
      }
    default:
      return state;
  }
}
export default dataReducer;
