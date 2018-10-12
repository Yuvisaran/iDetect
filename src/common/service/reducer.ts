import { initialState } from './initial';
import actionType from './actionType';

interface actionInterface {
	type: actionType
}

export interface State {
	isLoading: boolean
}

export const commonReducer = (state: State = initialState, action: actionInterface) => {
	switch (action.type) {
		case 'SHOW_IS_LOADING':
			return {
				...state,
				isLoading: true
			}
		case 'HIDE_IS_LOADING':
			return {
				...state,
				isLoading: false
			}
		default:
			return state
	}
}
