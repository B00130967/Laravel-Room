import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FetchProducts from './FetchProducts';
import LoginAPI from './LoginAPI'
import FetchPersonAPI from './FetchPersonAPI';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {

    render(){
    return (
        <div className="container">
            <Router>
    
                <Route path="/personscreate" component = {FetchPersonAPI} />
                <Route path="/seeproducts" component = {FetchProducts} />

                <LoginAPI />
            </Router>
        </div>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    var data = document.getElementById('root').getAttribute('data')
    ReactDOM.render(<App />, document.getElementById('root'));
}
