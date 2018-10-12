import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'

import loginReducer from 'src/login/service/reducer';
import alertsReducer from 'src/alerts/service/reducer';
import commonReducer from 'src/common/service/reducer';
import adminReducer from 'src/admin/service/reducer';
import dataReducer from 'src/data/service/reducer';
import detectionReducer from 'src/detection/service/reducer';

const loginPersistConfig = {
  key: 'login',
  storage: storage,
  whitelist: ['isAuth', 'availableLists', 'userDetails', 'alertUserPreferenceList', 'AlertsListFields',
    'alertListDetails', 'caseListDetails', 'caseListFields', 'workflowStatusAlertClosed', 'workflowStatusAlertOpen',
    'workflowStatusCaseClosed', 'workflowStatusCaseOpen', 'availableOrgUnits', 'availablePerms', 'orgUnits',
    'defaultAlertDisplay', 'defaultCaseDisplay', 'maxRecordPerCasePage', 'maxRecordPerAlertPage', 'alertCaseAvailableFields']
};

export const rootReducer = combineReducers({
  form: formReducer,
  loginReducer: persistReducer(loginPersistConfig, loginReducer),
  alertsReducer,
  adminReducer,
  commonReducer,
  dataReducer,
  detectionReducer
});
