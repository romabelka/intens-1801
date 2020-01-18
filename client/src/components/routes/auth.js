import React, { Component } from 'react'
import {NavLink, Route} from "react-router-dom";
import SignUpForm from "../auth/sign-up-form";
import SignInForm from "../auth/sign-in-form";

class AuthPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h1>Auth Page</h1>
        <div>
          <NavLink activeStyle={{color: 'red'}} to="/auth/sign-in">Sign In</NavLink>
          <NavLink activeStyle={{color: 'red'}} to="/auth/sign-up">Sign Up</NavLink>
        </div>
        <Route path="/auth/sign-up" component={SignUpForm}/>
        <Route path="/auth/sign-in" component={SignInForm}/>
      </div>
    )
  }
}

export default AuthPage
