import React, { Component } from 'react'

class UploadImage extends React.Component{

        constructor(props) {
          super(props);
          this.state ={
          image: '',
          sucess: false,
          error: false,
          imagePreviewUrl: false
          }

          this.fileUpload = this.fileUpload.bind(this)
          this.onChange = this.onChange.bind(this);
          }


          onChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
            return;
            this.createImage(files[0]);
          }

          createImage(file) {
            let reader = new FileReader();
            reader.onload = (e) => {
            this.setState({
            image: e.target.result
          })
          };
            reader.readAsDataURL(file);
          }

          fileUpload = async () =>{
            const values = this.state.image
            await axios.post('http://localhost:8000/api/products/store',  values)
            .then((res) => {
            if(res.data === '1'){
            this.setState( { sucess : true});
            //window.location.replace("/dashboard");
            }else{
            this.setState( { errorInsert : true});
            }
            }).catch((e)=>{
            console.log(e);
            /*window.sessionStorage.clear();
            window.location.replace('/'); */
            });
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
                    <li>{this.state.products.map(product=> <div>{product.title}{product.price}{product.src}</div>)}</li>
                    </ul>
                </div>
            );
        }
    }

export default FetchProducts