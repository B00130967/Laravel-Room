import React, {Component} from 'react'
import { Button, Form, FormGroup, Label, Input, FormText, Link } from 'reactstrap';


export default class Register extends Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() {

        return(              
            <div className="full-screen-background">
                <h5 className="header-startpage">Explore Berlin - Rent your Student Room</h5>
                <div className="registration-box ">
                        

                        <FormGroup>
                        <Label for="Name">Name: </Label>
                        <Input type="text" name="Name" id="userName" placeholder="Please enter youre Name"  onChange={(item)=>{this.setState({Name:item.target.value})}}/>
                         </FormGroup>

                        <FormGroup>
                            <Label for="Email">Email: </Label>
                            <Input type="email" name="Email" id="userEmail" placeholder="Please enter a valid Email "  onChange={(item)=>{this.setState({price:item.target.value})}}/>
                        </FormGroup>  

                        <FormGroup>
                            <Label for="Password">Password: </Label>
                            <Input type="password" name="password" id="exampleDescription" placeholder="password placeholder" onChange={(item)=>{this.setState({description:item.target.value})}}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleFile">File</Label>
                            <Input type="file" name="file" id="exampleFile" onChange={(item)=>{this.setState({src:item.target.value})}}/>
                            <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                            </FormText>
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                            <Input type="checkbox" onChange={(item)=>{this.setState({availability:!this.state.availability})}}/>
                            Check me out
                            </Label>
                        </FormGroup>

                        
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Register</button>


     



                </div>
            </div>
        )
    }
}