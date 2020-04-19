import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LoginAPI from './LoginAPI'

import {BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import Nav from './Nav'; 

export default class Mainpage extends Component{


    render(){
        return(
   
            <div>
                <Nav/>
            </div>
        )
    }
}

