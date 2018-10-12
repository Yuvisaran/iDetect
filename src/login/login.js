import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import aes from 'aes-cross';
import _noop from 'lodash/noop';
import { FormattedMessage } from 'react-intl';

import { CustomInput } from 'src/components/customInput/customInput';
import { getLoginInitCache, authenticateUser } from './service/action';

import 'src/common/css/mockcss/style.css';

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Please Enter Your User Name'
  }
  if (!values.password) {
    errors.password = 'Please Enter Your Password'
  }
  return errors
}
class LoginForm extends Component {
  componentDidMount() {
    this.props.getLoginInitCache(this.props.dispatch)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loginSuccess === true) {
      this.props.history.push('/dashboard')
    }
  }

  render() {
    const { handleSubmit, initCacheLoaded, loginErrMsg, pristine, submitting, isLoading } = this.props;

    const loginSubmit = (formValue) => {
      const text = formValue.password;
      /* eslint-disable */
      const key = new Buffer([73, 110, 116, 101, 76, 76, 105, 80, 108, 117, 115, 83, 97, 82, 76, 121]);
      /* eslint-enable */
      const enc = aes.encText((text), key);
      const formCredentials = { email: formValue.email, password: enc }
      this.props.authenticateUser(this.props.dispatch, formCredentials);
    }

    return (
      <div className="p-login">
        <div className={`o-loader js-loader ${isLoading ? 'is-loading' : ''}`}></div>
        <form onSubmit={handleSubmit} className="c-form c-form--login js-login-form">
          <div className="o-brand">
            <svg width="105" height="30" viewBox="0 0 105 30" xmlns="http://www.w3.org/2000/svg"><title>idetect-logotype</title><defs><path id="a" d="M0 29.707h104.852V0H0z"></path></defs><g fill="none" fillRule="evenodd"><mask id="b" fill="#fff"><use></use></mask><path d="M.886 29.299h3.709V13.44H.885v15.858zM2.723 0a2.745 2.745 0 0 1 2.756 2.757c0 1.497-1.225 2.722-2.756 2.722A2.73 2.73 0 0 1 0 2.757C0 1.225 1.225 0 2.723 0zm19.261 21.37c0-2.723-1.838-5.036-4.696-5.036-2.79 0-4.628 2.313-4.628 5.036 0 2.723 1.838 5.036 4.628 5.036 2.858 0 4.696-2.313 4.696-5.036zm0 5.786c-.987 1.598-3.063 2.551-4.9 2.551-4.833 0-8.133-3.845-8.133-8.337 0-4.492 3.3-8.337 8.133-8.337 1.837 0 3.913.953 4.9 2.552V5.48h3.71V29.3h-3.71v-2.143zm11.198-7.42h7.758c0-2.211-1.6-3.606-3.845-3.606-2.178 0-3.913 1.259-3.913 3.606zm-.034 2.757c.034 2.28 1.156 4.118 4.151 4.118 2.11 0 2.892-.953 3.368-2.077h3.744c-.51 2.722-3.062 5.174-7.112 5.174-5.342 0-7.929-4.017-7.929-8.338 0-4.765 2.825-8.337 7.827-8.337 4.118 0 7.35 3.097 7.35 7.147 0 .543 0 1.292-.17 2.313h-11.23zm24.025 6.806c-.578.102-1.667.204-2.756.204-1.804 0-5.139-.238-5.139-5.58v-7.384H46.59V13.44h2.688V8.642h3.71v4.799h3.64v3.098h-3.64v6.533c0 2.757.85 3.096 2.313 3.096.58 0 1.498-.068 1.872-.136v3.267zm5.684-9.563h7.758c0-2.211-1.599-3.606-3.844-3.606-2.179 0-3.914 1.259-3.914 3.606zm-.034 2.757c.034 2.28 1.157 4.118 4.152 4.118 2.11 0 2.892-.953 3.368-2.077h3.744c-.51 2.722-3.062 5.174-7.112 5.174-5.342 0-7.93-4.017-7.93-8.338 0-4.765 2.826-8.337 7.828-8.337 4.118 0 7.35 3.097 7.35 7.147 0 .543 0 1.292-.17 2.313h-11.23zm25.83-3.267c-.205-1.735-1.225-2.893-3.744-2.893-2.859 0-4.253 2.349-4.253 5.037 0 2.722 1.292 5.037 4.492 5.037 2.178 0 3.061-.954 3.539-2.553h3.709c-.51 3.301-2.927 5.853-7.52 5.853-5.172 0-7.929-4.016-7.929-8.337 0-4.287 2.757-8.337 7.894-8.337 5.173 0 7.283 3.13 7.521 6.193h-3.71zm16.199 10.073c-.578.102-1.667.204-2.756.204-1.804 0-5.139-.238-5.139-5.58v-7.384h-2.688V13.44h2.688V8.642h3.71v4.799h3.64v3.098h-3.64v6.533c0 2.757.85 3.096 2.313 3.096.58 0 1.498-.068 1.872-.136v3.267z" fill="#6432FF"></path></g></svg>
          </div>
          <legend className="c-form__title">
            <FormattedMessage
              id={ 'login.greetings' }
              defaultMessage={ 'Welcome back' } />
          </legend>
          <p className="c-form__intro">
            <FormattedMessage
              id={ 'login.instruction' }
              defaultMessage={ 'Please enter your username and password, I log you in.' } />
          </p>
          <fieldset className="c-form__field">
            <label className="o-label u-visually-hidden" htmlFor="username">
              <FormattedMessage
                id={ 'login.userName' }
                defaultMessage={ 'Username' } />
            </label>
            <Field component={CustomInput} type="email" name="email" disabled={initCacheLoaded} customClass="o-input" placeholder="Username" />
          </fieldset>
          <fieldset className="c-form__field">
            <label className="o-label u-visually-hidden" htmlFor="password">
              <FormattedMessage
                id={ 'login.password' }
                defaultMessage={ 'Password' } />
            </label>
            <Field component={CustomInput} type="password" name="password" disabled={initCacheLoaded} customClass="o-input" placeholder="Password" />
          </fieldset>
          {loginErrMsg && <div className="o-notice u-attention-required">{loginErrMsg}</div>}
          <button type="submit" disabled={initCacheLoaded && pristine | initCacheLoaded && submitting}
            onClick={handleSubmit(loginSubmit)} className="o-btn o-btn--primary o-btn--large c-form__action js-login-action">
            <FormattedMessage
              id={ 'login.login' }
              defaultMessage={ 'Log in' } />
          </button>
        </form>
        <a className="o-btn c-docs-shortcut u-accent-color" href='http://www.idetect-soft.eu/mediawiki/' target='blank'>
          <svg className="o-icon o-icon--document o-icon--prepended" xmlns="http://www.w3.org/2000/svg" width="3.88mm" height="4.59mm" viewBox="0 0 11 13">
            <title>document</title>
            <path d="M11 13H0V0h11zM1 12h9V1H1z" /><path d="M5 10H3.5V9H5zm3-3H3.5V6H8zm0-3H3.5V3H8z" />
          </svg>
          <FormattedMessage
            id={ 'login.documentation' }
            defaultMessage={ 'Documentation' } />
        </a>
      </div>
    );
  }
}

LoginForm.propTypes = {
  getLoginInitCache: PropTypes.func,
  dispatch: PropTypes.func,
  loginSuccess: PropTypes.bool.isRequired,
  history: PropTypes.any,
  handleSubmit: PropTypes.func,
  initCacheLoaded: PropTypes.bool.isRequired,
  loginErrMsg: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  authenticateUser: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
};

LoginForm.defaultProps = {
  getLoginInitCache: _noop,
  dispatch: _noop,
  history: null,
  handleSubmit: _noop,
  authenticateUser: _noop,
  pristine: false,
  submitting: false
}

const mapStateToProps = (state) => ({
  initCacheLoaded: state.loginReducer.initCacheLoaded,
  loginSuccess: state.loginReducer.loginSuccess,
  loginErrMsg: state.loginReducer.loginErrMsg,
  isLoading: state.commonReducer.isLoading
})

const mapDispatchToProps = (dispatch) => ({
  getLoginInitCache,
  authenticateUser
})

/* eslint-disable */
LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
/* eslint-enable */

export default reduxForm({
  form: 'login',
  validate
})(LoginForm);
