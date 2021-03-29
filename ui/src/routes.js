import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/login/Login';

const Routes = () => (
<BrowserRouter >
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/home" component={Home}/>
    </Switch>
</BrowserRouter>
);

export default Routes;