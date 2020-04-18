import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import rooms from './Test';
//import Room from './Room';
//import Owner from './Owner';  
//import Single from './Single';  
//import Sonic from './Sonic'; 
//import Mask from './Mask'; 
import BestMovies from './FetchPersonAPI'
import DinosFav from './FetchProducts'

import Stress from './Stress'

export default class LoginAPI extends Component {

    constructor(props){
        super(props);
        this.state = {
            email:"",
            password: ""
        }
    }

    submit()
    {
        console.log(this.state)
        fetch('http://localhost:8000/api/login', {
            method: 'post',
            body: JSON.stringify(
                this.state
            ),
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
            
            })
            .then(function(response){
                response.json()
                    .then(function(resp){
                        console.log(resp)
                    }
                )
            })
    }

    render(){
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">

                        <input type="text" onChange={(item)=>{this.setState({email:item.target.value})}}/>
                        <input type="password" onChange={(item)=>{this.setState({password:item.target.value})}}/>
                        <button onClick={()=>{this.submit()}}> Loged In </button>
        
                    </div>
                </div>
            </div>
        );
    }
}
