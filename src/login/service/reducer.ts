import { LoginInfoDTO } from './../../model/dto/LoginInfoDTO';
import { LoginDTO } from './../../model/dto/LoginDTO';
import actionType from './actionType';


export type State = {
	loginSuccess: boolean,
	isAuth: boolean,
	userDetails?: LoginInfoDTO,
	loginErrMsg?: string,
	initCacheLoaded?: boolean,
	loginDTO?: LoginDTO
	//the rest from git are just properties for userDetails in fact so no need to have them somewhere else we can just set them on useDetails
};

export let initialState: State = {
	loginSuccess: false,
	isAuth: false,
	userDetails: new LoginInfoDTO(),
	initCacheLoaded: false,
	loginDTO: new LoginDTO()
}

interface actionTypeInterface {
	type: actionType,
	payload: any
}


export function loginReducer(state: State = initialState, action: actionTypeInterface) {
	switch (action.type) {
		case actionType.GET_LOGIN_INIT_CACHE:
			return {
				...state,
				initCacheLoaded: true,
				loginDTO: action.payload.loginDTO
			}

		case actionType.AUTHENTICATE_USER:
			return {
				...state,
				loginSuccess: true,
				isAuth: true,
				userDetails: action.payload.loginInfoDTO
			}

		case actionType.SHOW_LOGIN_ERR_MSG:
			return {
				...state,
				loginErrMsg: action.payload,
				loginSuccess: false,
				isAuth: false,
			}

		case actionType.LOGOUT_USER:
			return {
				loginSuccess: false,
				isAuth: false,
				userDetails: new LoginInfoDTO(),
				loginErrMsg: ''
			}
		default:
			return state;
	}
}

export default loginReducer;
