import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import Dashboard from '../components/Dashboard'
import Header from '../components/Header'
import Add from '../components/Add'
import Edit from '../components/Edit'
import Help from '../components/Help'
import Fof from '../components/Fof'

const AppRoutes = () => (
    <BrowserRouter>
        <div>
            <Header />

            <Switch>
                <Route 
                    path="/" 
                    component={Dashboard} 
                    exact={true}></Route>

                <Route 
                    path="/add" 
                    component={Add}> 
                    exact={true}</Route>

                <Route 
                    path="/edit/:id" 
                    component={Edit}>
                    exact={true}</Route>

                <Route 
                    path="/help" 
                    component={Help}> 
                    exact={true}</Route>

                <Route 
                    component={Fof}></Route>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRoutes;