import React, {Component} from 'react'


export default class Register extends Component{

    constructor(props){
        super(props);

        this.state = {
            'book' : "Chill out yore base by ChillerXXX",
            'yoga' : 'This is the best yoga fun ever',
            'gym'  : 'Acces the state',
        }
    }

    render() {

        return(
            <div>
                This is stress but you can reduce it by {this.state.book}
                This is the best way ever {this.state.yoga}
            </div>
        )
    }
}