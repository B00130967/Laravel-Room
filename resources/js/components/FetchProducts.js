import React, { Component } from 'react'

class FetchProducts extends React.Component{

        state  = {
            loading:true,
        }
        
    
        async componentDidMount(){
            const url='http://localhost:8000/api/products'
            const response = await fetch(url);
            const data = await response.json(); 
            this.setState({ products: data 
                            ,loading:false});  
            
        }
        
        render(){
            if (this.state.loading){
                return <div>loading...</div>
            }   
            if (!this.state) {
                return <div>didn't get a product </div>
            }
            const elements = this.state.products;
            return(
                <div>
                    <div>
                    </div>
                    <ul>
                    <li>{this.state.products.map(product=> <div>{product.title}{product.price}</div>)}</li>
                    <li>{this.state.products.map(product=> <img src={product.image}/>)}</li>
                    
                    </ul>
                </div>
            );
        }
    }

export default FetchProducts