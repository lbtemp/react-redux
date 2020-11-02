import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {initLogout} from '../actions/authActions'

export const Header = (props) => {
    return (
        <div>
            <h1>App</h1>

            <NavLink exact={true} activeClassName="active" to="/dashboard">Go home</NavLink>
            <NavLink activeClassName="active" to="/add">Add</NavLink>
            <NavLink activeClassName="active" to="/edit/55">Edit</NavLink>
            <NavLink to="/help">Help</NavLink>
            <button onClick={props.initLogout}>log out</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    initLogout: () => dispatch(initLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);