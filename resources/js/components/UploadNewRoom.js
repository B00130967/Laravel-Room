import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class UploadNewRoom extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title:"",
            description: "",
            price: "",
            availability: "false",
            src: ""
        }
    }

    submit()
    {
        console.log(this.state)
        fetch('http://localhost:8000/api/products', {
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
                <div className="col-md-12">

                <FormGroup>
                    <Label for="exampleEmail">Title</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder"  onChange={(item)=>{this.setState({title:item.target.value})}}/>
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Price</Label>
                    <Input type="number" name="password" id="examplePassword" placeholder="password placeholder"  onChange={(item)=>{this.setState({price:item.target.value})}}/>
                </FormGroup>  

                <FormGroup>
                    <Label for="exampleDescription">Description</Label>
                    <Input type="text" name="password" id="exampleDescription" placeholder="password placeholder" onChange={(item)=>{this.setState({description:item.target.value})}}/>
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

                                             
                        
                        
                <Button className="mt-1" color="primary" size="lg" block onClick={()=>{this.submit()}}> Host Room </Button>
        
                </div>
                </div>
            </div>
        );
    }
}



export default UploadNewRoom; 