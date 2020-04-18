import React, { Component } from 'react'

class FetchPersonAPI extends React.Component{

        state  = {
            loading:true,
            person:null
        }
    
        async componentDidMount(){
            const url = 'https://api.randomuser.me/'
            const response = await fetch(url);
            const data = await response.json(); 
            //console.log(data)
            this.setState({ person : data.results[0] ,loading:false});  
            
        }


        
        render(){
            if (this.state.loading){
                return <div>loading...</div>
            }   
            if (!this.state.person) {
                return <div>didn't get a product </div>
            }
            return(
                <div>
                    <div>
                        <div><h1 className="bg-primary ">{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</h1></div>
                        <div className="bg-danger text-white ">
                            <h3>
                            With the email {this.state.person.email}<br/>
                            This Person is {this.state.person.dob.age} years old ! <br />
                            Has the Phone Number{this.state.person.phone}<br />
                            And looks like <br />

                            <img src={this.state.person.picture.large} />
                            </h3> 
                        </div>
                        <button type="button" className="btn btn-secondary btn-lg btn-block">Register</button>
                    </div>

                </div>
            );
        }
    }

export default FetchPersonAPI