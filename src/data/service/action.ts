import { Idetect_api_url } from './../../constants/apiUrl';
import { Dispatch } from 'redux';
import { store } from './../../idetectMain';

import actionType from './actionType';
import { TreeViewFolder } from './../../components/treeview/TreeView';


export const dispatchClickedFolder = (folder: TreeViewFolder) => {

	store.dispatch({ type: actionType.folderCliked, payload: folder });
}


/*export const loginInitCacheSuccess = () => {
	return {
		type: ,
		payload:
	};
}*/
