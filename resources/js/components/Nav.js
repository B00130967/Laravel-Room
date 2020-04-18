import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FetchProducts from './FetchProducts';
import LoginAPI from './LoginAPI'
import FetchPersonAPI from './FetchPersonAPI';
import UploadNewRoom from './UploadNewRoom';
import ModalForm from  './ModalForm'; 
import {BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'

export default class Nav extends Component{


    render(){
        return(
            <div>
                <header>
                    <div className="container-fluid bg-img-header mb-3">
                        <div className="container">
                            <Router>
                                <nav className="navbar navbar-light bg-light">
                                    <Link className="navbar-brand" to="/">👌 Login</Link>
                                    <Link className="navbar-brand" to="/rooms">💰 Rooms</Link>
                                    <Link className="navbar-brand" to="/aboutus">❤️ About us</Link>
                                    <a className="navbar-brand" to="/hostRoom"> <ModalForm /></a>
                                    <a className="navbar-brand" href="{{route('logout')}}">Logout</a>
                                </nav>
                                <Route path="/" exact component={LoginAPI}/>
                                <Route path="/rooms"  component={FetchProducts}/>
                                <Route path="/aboutus"  component={FetchPersonAPI}/>
                            </Router>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

