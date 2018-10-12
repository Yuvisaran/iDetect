import axios from 'axios';
import { Idetect_api_url } from 'src/constants/apiUrl';
import { showIsLoading, hideIsLoading } from 'src/common/service/action';
import { topBarTitleSelectedSb } from 'src/alerts/service/action';
import { TREE_FOLDER_LIST_SUCCESS, CHILDREN__LIST_BY_PARENT_ID_SUCCESS } from './actionType';

export const getTreeFolderList = (id, userId, name) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/list/all/tree/folder',
    {
      'user': { id, userId, name }
    })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(treeFolderListSuccess(response));
    })
    .catch(error => {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const getChildrenListByParentID = (dataID, id, userId, name) => dispatch => {
  dispatch(showIsLoading());
  axios.post(Idetect_api_url + '/list/children/list/by/parentId',
    {
      'navigatorData': { 'id': dataID },
      'user': {
        'id': id,
        'userId': userId,
        'name': name
      }
    })
    .then(response => {
      dispatch(hideIsLoading());
      dispatch(childrenListByParentIDSuccess(response))
    })
    .catch(error => {
      dispatch(hideIsLoading());
      /* eslint-disable */
      console.log(error)
      /* eslint-enable */
    })
}

export const treeFolderListSuccess = (response) => {
  return ({
    type: TREE_FOLDER_LIST_SUCCESS,
    payload: response.data.allTreeFolderList
  });
}

export const childrenListByParentIDSuccess = (response) => {
  return ({
    type: CHILDREN__LIST_BY_PARENT_ID_SUCCESS,
    payload: response.data.childrenListByParentId
  });
}
