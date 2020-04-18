import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';

export default class Index extends Component {

    render(){
    return (
        <div className="container">
            <Nav />
        </div>
        );
    }
}



if (document.getElementById('root')) {
    var data = document.getElementById('root').getAttribute('data')
    ReactDOM.render(<Index />, document.getElementById('root'));
}
