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
      title : event.target.value
    });
  };
  handleSave = () => {
    let{title} =this.state;
    if(!title){
      return;
    }
    this.props.onSave(this.state)
  };
render(){
  let {props} = this;
  let{title} = this.state;
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
        value = {title}
        onChange={this.handleCahng}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button 
        variant ="warning"
        onClick = {this.handleSave}
        >
          Edit
          </Button>
        <Button 
        variant = "danger" 
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