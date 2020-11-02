import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';

import createHistory from 'history/createBrowserHistory';

import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Add from '../components/Add'
import Edit from '../components/Edit'
import Help from '../components/Help'
import Fof from '../components/Fof'
import Login from '../components/Login';
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRoutes = () => (
    <Router history={history}>
        <div>
            {/* <Header /> */}

            <Switch>
                <Route 
                    path="/" 
                    component={Login} 
                    exact={true}></Route>

                <PrivateRoute 
                    path="/dashboard" 
                    component={Dashboard}> 
                    exact={true}</PrivateRoute>

                <PrivateRoute 
                    path="/add" 
                    component={Add}> 
                    exact={true}</PrivateRoute>

                <PrivateRoute 
                    path="/edit/:id" 
                    component={Edit}>
                    exact={true}</PrivateRoute>

                <Route 
                    path="/help" 
                    component={Help}> 
                    exact={true}</Route>

                <Route 
                    component={Fof}></Route>
            </Switch>
        </div>
    </Router>
)

export default AppRoutes;