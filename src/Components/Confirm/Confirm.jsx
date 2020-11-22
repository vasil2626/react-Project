import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';


function Confirm(props) {
  
  return (

    <Modal
      show={true}
      onHide={props.onClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Ar you sure to remov {props.count} tasks</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button 
        variant="outline-warning"
        onClick={props.onSubmit}
        >
          Delete Tasks
          </Button>
        <Button 
        variant="outline-danger" 
        onClick={props.onClose}>
          Close
          </Button>
      </Modal.Footer>
    </Modal>

  );


};

Confirm.propTypes = {
  count: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Confirm;