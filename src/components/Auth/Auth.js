import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';

class PrivateRoute extends React.Component {
  render() {
    const { component: Component, isAuth, ...rest } = this.props;
    return (
      <Route {...rest} render={props => {
        return isAuth
          ? <Component {...props} />
          : <Redirect to="/" />
      }} />
    )
  }
}

PrivateRoute.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func
}
PrivateRoute.defaultProps = {
  component: _noop
}
const mapStateToProps = (state) => ({
  isAuth: state.loginReducer.isAuth
})

export default connect(mapStateToProps)(PrivateRoute)
