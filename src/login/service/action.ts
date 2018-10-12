import { DataConstant } from './../../constants/DataConstant';
//import { RoleDAO } from './../../model/dao/RoleDAO';
import { Idetect_api_url } from './../../constants/apiUrl';
import { Dispatch } from 'redux';
import { LoginDAO } from './../../model/dao/LoginDAO';
import { LoginDTO } from './../../model/dto/LoginDTO';
import { LoginInfoDTO } from './../../model/dto/LoginInfoDTO';
import * as crypto from 'aes-cross/node/aes';
import { store } from './../../idetectMain';
//import { RootStore } from './../../rootReducer';

import { actionType } from './actionType';


export const loginInitCache = () => {
	console.log("loginInitCache started");
	let loginDAO = new LoginDAO();
	//let response: { status: string, message: string, loginDTO: LoginDTO } = loginDAO.getInitLogin();
	let response: { status: string, message: string, loginDTO: LoginDTO } = { status: 'Success', message: 'Success', loginDTO: new LoginDTO };
	store.dispatch(loginInitCacheSuccess(response));
}


export const loginInitCacheSuccess = (response: { status: string, message: string, loginDTO: LoginDTO }) => {
	return {
		type: actionType.GET_LOGIN_INIT_CACHE,
		payload: response
	};
}

export const authenticateUser = (credentials: { email: string, password: string }) => {
	console.log('in authentication');
	let loginDAO: LoginDAO = new LoginDAO();
	let response: { status: string, message: string, loginInfoDTO: LoginInfoDTO };

	let key: Buffer = new Buffer([73, 110, 116, 101, 76, 76, 105, 80, 108, 117, 115, 83, 97, 82, 76, 121]);
	let enc: string = crypto.encText(credentials.password, key);

	//response = loginDAO.postLogIn(credentials.email, enc);
	response = { status: 'Success', message: 'ok', loginInfoDTO: new LoginInfoDTO() }

	if (response.status === "Success") {
		//sessionStorage.setItem('jwtToken', response.payload.data.token);
		//load permission
		//let roleDAO = new RoleDAO();
		//setPermissionList(roleDAO.getRoleCheckPermission(credentials.email));
		store.dispatch(authenticateUserSuccess(response));
	} else {
		store.dispatch(authenticateUserFailure(response));
	}
};

export const authenticateUserSuccess = (response: { status: string, message: string, loginInfoDTO: LoginInfoDTO }) => {
	return {
		type: actionType.AUTHENTICATE_USER,
		payload: response
	};
}

export const authenticateUserFailure = (response: { status: string, message: string, loginInfoDTO: LoginInfoDTO }) => {
	return {
		type: actionType.SHOW_LOGIN_ERR_MSG,
		payload: response.message
	};
}

export const logoutUser = () => {
	return {
		type: actionType.LOGOUT_USER
	};
}
