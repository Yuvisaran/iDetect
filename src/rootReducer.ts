import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'

import * as loginReducer from './login/service/reducer';
//import alertsReducer from 'src/alerts/service/reducer';
import * as commonReducer from './common/service/reducer';
//import adminReducer from 'src/admin/service/reducer';
import * as buttonReducer from './components/buttons/service/reducer';
import * as dataReducer from './data/service/reducer';

export interface RootStore {
	loginReducer: loginReducer.State,
	commonReducer: commonReducer.State,
	buttonReducer: buttonReducer.State,
	dataReducer: dataReducer.State
}

const loginPersistConfig = {
	key: 'login',
	storage: storage,
};


export const rootReducer = combineReducers({
	form: formReducer,
	loginReducer: persistReducer(loginPersistConfig, loginReducer.loginReducer),
	commonReducer: commonReducer.commonReducer,
	buttonReducer: buttonReducer.buttonReducer,
	dataReducer: dataReducer.dataReducer
});

/*
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'

import * as loginReducer from './login/service/reducer';
//import alertsReducer from 'src/alerts/service/reducer';
//import commonReducer from 'src/common/service/reducer';
//import adminReducer from 'src/admin/service/reducer';



export const rootReducer = combineReducers<RootState>({
    loginReducer: loginReducer.loginReducer
});
*/
