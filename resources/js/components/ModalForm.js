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

 
  render() {
    return (
      <div>
        <a  onClick={this.toggle}>🏠 Upload Room</a>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h3>🏠 Upload your Room</h3></ModalHeader>
          <ModalBody>
           
           <UploadNewRoom />

          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;