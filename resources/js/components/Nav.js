import React, { Component } from 'react'; 


class Mask extends Component{

    constructor(props){
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    render(){
        return(
            <div> 
                Mask by Jim Carrey
            </div>
        )
    }
}

export default Mask 