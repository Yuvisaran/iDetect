import actionType from './actionType';
import { store } from './../../idetectMain';

export const dispatchLoadingShow = () => {
	console.log('should dispatch');
	store.dispatch(showIsLoading);
}

export const dispatchHideIsLoading = () => {
	store.dispatch(hideIsLoading);
}

const showIsLoading = () => {
	return {
		type: actionType.SHOW_IS_LOADING
	}
}

const hideIsLoading = () => {
	return {
		type: actionType.HIDE_IS_LOADING
	}
}
