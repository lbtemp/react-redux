import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {initLogout} from '../actions/authActions'

export const Header = (props) => (    
    <header className="header">
        <div className="container">
            <div className="container__flex-container">
                <Link className="header__title" to="/dashboard">
                    <h1>Budgetify</h1>
                </Link>

                {/* <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
                <NavLink activeClassName="active" to="/add">Add expense</NavLink> */}

                <button className="button button--link" onClick={props.initLogout}>Logout</button>
            </div>
        </div>
    </header>
)

const mapDispatchToProps = (dispatch) => ({
    initLogout: () => dispatch(initLogout())
})

export default connect(undefined, mapDispatchToProps)(Header);