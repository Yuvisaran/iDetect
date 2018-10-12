import { store } from './../../../idetectMain';
//import { RootStore } from './../../rootReducer';

import actionType from './actionType';


export const switchView = () => {
	store.dispatch({ type: actionType.SWITCHVIEW });
}

export const switchSidebar = () => {
	store.dispatch({ type: actionType.SIDEBAR });
}
