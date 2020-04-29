import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Mainpage from './Mainpage';
import LoginAPI from './LoginAPI';
import Register from './Register';
import Navigation from './Navigation';

import {BrowserRouter as Router, Switch, Link, Route,NavLink } from 'react-router-dom'

export default class Startpage extends Component{


    render(){
        return(
   
            
            <div className="full-screen-background">
                <h5 className="header-startpage">Explore Berlin - Rent your Student Room</h5>
                <div className="login-box ">

                        <h2>Register for Fun! 🎓</h2> 
                        <div className="input-icons"> 
                            <i className="fa fa-user icon"> 
                        </i> 
                            <input className="input-field" 
                                type="text" 
                                placeholder="Username"/> 
                        </div> 
            
                        <div className="input-icons"> 
                            <i className="fa fa-key icon"> 
                        </i> 
                            <input className="input-field" 
                                type="password"
                                placeholder="Password" /> 
                        </div> 

     
                        <Link to="/Mainpage"> <button type="submit" className="btn btn-primary btn-lg btn-block">Login </button></Link>
                        <Link to="/Register">Register</Link>


                </div>
            </div>

        )
    }
}

