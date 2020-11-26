import React,{ PureComponent } from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styles from './EditTaskModal.module.css'



class EditTaskModal extends PureComponent{
  constructor(props){
    super(props);

    this.state = {
      ...props.data
    };
  };
  handleCahng = (event) =>{
    this.setState({
      value : event.target.value
    });
  };
  handleSave = () => {
    let{value} =this.state;
    if(!value){
      return;
    }
    this.props.onSave(this.state)
  };
render(){
  let {props} = this;
  let{value} = this.state;
  return (

    < Modal
      show = {true}
      onHide  = {props.onClose}
      backdrop = "static"
      keyboard = {false}
      centered
    >
     
      <Modal.Header closeButton>
        <Modal.Title >Edit Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input 
        type = "text"
        className = {styles.editInput}
        value = {value}
        onChange={this.handleCahng}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button 
        variant ="outline-warning"
        onClick = {this.handleSave}
        >
          Edit
          </Button>
        <Button 
        variant = "outline-danger" 
        onClick = {props.onClose}>
          Cancele
          </Button>
      </Modal.Footer>
    </Modal>

  );
}
  


};

EditTaskModal.propTypes = {
  data: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default EditTaskModal;