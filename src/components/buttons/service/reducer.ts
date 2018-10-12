import actionType from './actionType';

export type State = {
	listView: boolean,
	tableView: boolean,
	sidebar: boolean
};

const initialState: State = {
	listView: true,
	tableView: false,
	sidebar: false
}

interface actionTypeInterface {
	type: actionType,
	payload: any
}


export function buttonReducer(state: State = initialState, action: actionTypeInterface) {
	switch (action.type) {
		case actionType.SWITCHVIEW:
			return {
				...state,
				listView: !state.listView,
				tableView: !state.tableView
			}
		case actionType.SIDEBAR:
			return {
				...state,
				sidebar: !state.sidebar
			}
		default:
			return state;
	}
}

export default buttonReducer;
