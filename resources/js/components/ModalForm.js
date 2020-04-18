import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import UploadNewRoom from './UploadNewRoom';


class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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

  render() {
    return (
      <div>
        <a  onClick={this.toggle}>🏠 Upload Room</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h3>🏠 Upload your Room</h3></ModalHeader>
          <ModalBody>
           
           <UploadNewRoom />

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={()=>{this.submit()}}> Host Room </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        
        </Modal>
      </div>
    );
  }
}

export default ModalForm;