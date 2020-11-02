import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {initLogout} from '../actions/authActions'

export const Header = (props) => (    
    <header>
        <h1>App</h1>

        <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
        <NavLink activeClassName="active" to="/add">Add expense</NavLink>

        <button onClick={props.initLogout}>log out</button>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    initLogout: () => dispatch(initLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);