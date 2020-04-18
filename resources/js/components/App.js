import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FetchProducts from './FetchProducts';
import LoginAPI from './LoginAPI'
import FetchPersonAPI from './FetchPersonAPI';

class App extends Component {

    render(){
    return (
        <div className="container">
            <FetchPersonAPI />

            <FetchProducts />
            <LoginAPI />
        </div>
        );
    }
}

export default App;

if (document.getElementById('root')) {
    var data = document.getElementById('root').getAttribute('data')
    ReactDOM.render(<App />, document.getElementById('root'));
}
