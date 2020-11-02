import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <h1>App</h1>

            <NavLink exact={true} activeClassName="active" to="/">Go home</NavLink>
            <NavLink activeClassName="active" to="/add">Add</NavLink>
            <NavLink activeClassName="active" to="/edit/55">Edit</NavLink>
            <NavLink to="/help">Help</NavLink>
        </div>
    )
}

export default Header;