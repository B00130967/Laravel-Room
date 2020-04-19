import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Mainpage from './Mainpage';
import LoginAPI from './LoginAPI';
import Register from './Register';
import Startpage from './Startpage';

import {BrowserRouter as Router, Switch, Link, Route,NavLink } from 'react-router-dom'

export default class Navigation extends Component{


    render(){
        return( 
                <Router > 
                    <Switch>
                        <Route path="/mainpage"  component={Mainpage} exact/>
                        <Route path="/register"  component={Register} exact/>
                        <Route path="/"          component={Startpage}exact/>
                    </Switch>
                </Router>
        )
    }
}

