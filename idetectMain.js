import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { IntlProvider, addLocaleData } from 'react-intl';

import * as en from 'react-intl/locale-data/en';
import * as fr from 'react-intl/locale-data/fr';

import * as login_fr from './src/common/translation/fr/FrenchProperties';
import * as login_en from './src/common/translation/en/EnglishProperties';

import Login from 'src/login/login';
import { rootReducer } from './rootReducer.js';
import idtDashboard from 'src/common/idtDashboard/idtDashboard';
import PageNotFound from 'src/components/pageNotFound/pageNotFound';
import PrivateRoute from 'src/components/Auth/Auth';

const translate = {
  en: login_en.EnglishProperties.i18nConfig,
  fr: login_fr.FrenchProperties.i18nConfig
}
const persistedReducer = rootReducer;
const store = compose(applyMiddleware(thunk))(createStore)(persistedReducer);
let persistor = persistStore(store);

addLocaleData([en[0], fr[0]]);

export default class IdetectMain extends React.Component {
  render() {
    return (
      <div>
        <IntlProvider locale={translate.en.locale} messages={translate.en.messages}>
          <Switch>
            <Redirect exact path="/" to="/login" />
            <Route exact path='/login' component={Login} />
            <PrivateRoute path="/dashboard" component={idtDashboard} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </IntlProvider>
      </div>
    );
  }
}

ReactDOM.render(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <IdetectMain />
    </BrowserRouter>
  </PersistGate>
</Provider>, document.getElementById('root'));
