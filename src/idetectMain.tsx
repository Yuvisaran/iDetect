import * as React from 'react';
//import { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { loginConnected } from './login/login';
import { rootReducer } from './rootReducer';
//import idtDashboard from './src/common/idtDashboard/idtDashboard';
import PageNotFound from './components/pageNotFound/pageNotFound';
import PrivateRoute from './components/Auth/Auth';
import { DataConnection } from './data/Data';

import { IntlProvider, addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';
import * as login_fr from "./common/translation/fr/FrenchProperties";
import * as login_en from "./common/translation/en/EnglishProperties";
import Translate from './common/translation/Translate';

const persistedReducer = rootReducer;

export const store = compose(applyMiddleware(thunk))(createStore)(persistedReducer);
let persistor = persistStore(store);

addLocaleData([...en, ...fr]);

export default class IdetectMain extends React.Component {
  render() {
    return (
      <div>
        <Translate />
        <Switch>
          <Redirect exact path="/" to="/login" />
          <Route exact path="/login" component={loginConnected} history={history}/>
          <PrivateRoute path="/data" component={DataConnection} history={history}/>
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <IntlProvider locale="en" messages={login_en.EnglishProperties.i18nConfig.messages}>
        <IdetectMain />
      </IntlProvider>
    </BrowserRouter>
  </PersistGate>
</Provider>, document.getElementById('root'));
