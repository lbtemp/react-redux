import React from 'react';
import {connect} from 'react-redux';

import {initLogin} from '../actions/authActions';

const Login = (props) => (
    <div>
        <button onClick={props.initLogin}> log in </button>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    initLogin: () => dispatch(initLogin())
})

export default connect(undefined, mapDispatchToProps)(Login);