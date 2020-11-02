import React from 'react';
import {connect} from 'react-redux';

import {initLogin} from '../actions/authActions';

const Login = (props) => (
    <div className="login">
        <div className="login__box">
            <h1 className="login__box__title">Budgetify</h1>
            <p className="login__box__subtitle">Track where all that potential oreo money is going</p>
            <button className="button login-button" onClick={props.initLogin}> Login with google </button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    initLogin: () => dispatch(initLogin())
})

export default connect(undefined, mapDispatchToProps)(Login);