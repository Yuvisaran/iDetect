'use strict';

import axios from 'axios';
import { Idetect_api_url } from './../../constants/apiUrl';
import { LoginDTO } from './../dto/LoginDTO';
import { APIConstants } from './../../constants/APIConstants';
import { Dispatch } from 'redux';
import { LoginInfoDTO } from './../dto/LoginInfoDTO';


export class LoginDAO {

	constructor() {

	}

	public getInitLogin(): { status: string, message: string, loginDTO: LoginDTO } {
		// let loginDTO : LoginDTO = new LoginDTO();
		axios.get(Idetect_api_url + APIConstants.getLoginInitLogin)
			.then(function(response) {
				//loginDTO = JSON.parse(response.data.loginDTO);
				return response;
			})
			.catch(function(error) {
				console.log(error);
			});
		return null;
		// return loginDTO;
	}

	public postLogIn(userId: string, password: string): { status: string, message: string, loginInfoDTO: LoginInfoDTO } {
		axios.post(Idetect_api_url + '/logincontroller/login', {
			userId: userId,
			password: password
		})
			.then(response => {
				return response;
			})
			.catch(function(error) {
				/* eslint-disable */
				console.log(error);
				return null;
				/* eslint-enable */
			});

		return null;
	}

}
