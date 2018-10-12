import * as React from 'react';
import { Dispatch } from 'redux';
//import { withRouter } from 'react-router-dom'

import { LoginFormComponent } from './components/LoginForm';
import './../common/css/mockcss/style.css';
import { loginReducer, State, initialState } from './service/reducer';
import { loginInitCache, authenticateUser } from './service/action';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { store } from './../idetectMain';
import { RootStore } from './../rootReducer';
import { dispatchLoadingShow } from './../common/service/action';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';

interface loginState {
  user: {
    name: string,
    password: string
  }
}

interface Props {
  user: {
    name: string,
    password: string
  },
  isAuth: boolean,
  history?: any,
  loginSuccess: boolean,
  authenticateUser: any,
  loginInitCache: any,
  isLoading: boolean,
  dispatchLoadingShow: any
}

class LoginForm extends React.Component<Props, loginState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: {
        name: '',
        password: ''
      }
    }
    this.onSave = this.onSave.bind(this);
    this.onFieldValueChange = this.onFieldValueChange.bind(this);
  }

  private onFieldValueChange(fieldName: string, value: string) {
    const nextState = {
      ...this.state,
      user: {
        ...this.state.user,
        [fieldName]: value,
      }
    };
    this.setState(nextState);
  }

   componentDidMount() {
     this.props.loginInitCache();
   }

  componentWillReceiveProps(nextProps: Props) {
    console.log('props received'); console.log(nextProps);
    if (nextProps.loginSuccess === true) {
      this.props.history.push('/data'); //TODO switch to dashboard when the dashboard tsx is ready
     }
  }

  private onSave(e: React.FormEvent<HTMLInputElement>) {
    console.log('logging');
    this.props.authenticateUser({ email: this.state.user.name, password: this.state.user.password });
    this.props.dispatchLoadingShow();
    e.preventDefault();
    console.log(this);
  }
  render() {
    return (

     <LoginFormComponent name={this.state.user.name} password={this.state.user.password} onSave={this.onSave} onChange={this.onFieldValueChange} isLoading={this.props.isLoading}/>

    );
  }
}


const mapDispatchToProps = (dispatch: Dispatch<loginState>) => ({
  loginInitCache,
  authenticateUser,
  dispatchLoadingShow
});

const mapStateToProps = (state: RootStore) => ({
  isAuth: state.loginReducer.isAuth,
  loginSuccess: state.loginReducer.loginSuccess,
  isLoading: state.commonReducer.isLoading
});

export const loginConnected = connect(mapStateToProps, mapDispatchToProps)(LoginForm);
