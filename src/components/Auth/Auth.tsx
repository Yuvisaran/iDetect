import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { rootReducer, RootStore } from './../../rootReducer';

interface Props {
  component: any,
  isAuth: boolean,
  path?: string,
  history: any
}

class PrivateRoute extends React.Component<Props, RootStore> {
  render() {
    const { component: Component, isAuth, path, history,  ...rest } = this.props;
    return (
      <Route {...rest} history={history} render={props => {
        return isAuth
          ? <Component {...props} />
          : <Redirect to="/login" />
      }} />
    )
  }
}

const mapStateToProps = (state: RootStore) => ({
  isAuth: state.loginReducer.isAuth
})

export default connect(mapStateToProps)(PrivateRoute)
