import actionType from './actionType';
import { TreeViewFolder } from './../../components/treeview/TreeView';

export type State = {
	treeClicked: TreeViewFolder,
};


interface actionTypeInterface {
	type: actionType,
	payload: any
}

let initialState: State = {
	treeClicked: {
		folder: { name: 'ORG_GLOBAL', properties: [{ name: 'delete' }, { name: 'edit' }] },
		folderContent: [{ folder: { name: 'SubFileGlobal', properties: [{ name: 'delete' }] } },
		{
			folder: { name: 'SubFolderGlobal', properties: [{ name: 'got a sub' }] },
			folderContent: [
				{ folder: { name: 'SubFileSub1', properties: [{ name: 'delete' }] } },
				{ folder: { name: 'SubFileSub2', properties: [{ name: 'got a sub' }] } }
			]
		}
		]
	}
}

export function dataReducer(state: State = initialState, action: actionTypeInterface) {
	switch (action.type) {
		case actionType.folderCliked:
			return {
				...state,
				treeClicked: action.payload,
			}
		default:
			return state;
	}
}

export default dataReducer;
