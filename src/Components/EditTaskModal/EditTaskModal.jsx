import React,{ PureComponent } from 'react';
import { Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
// import PropTypes from 'prop-types';
import styles from './EditTaskModal.module.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



class EditTaskModal extends PureComponent{
  constructor(props){
    super(props);
    let {date} = props.data;
    this.state = {
      ...props.data,
      date: date ? new Date(date) : new Date()
    };
  };

  handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

  handleSave = () => {
    let{title, date} =this.state;
    if(!title){
      return;
    }
    let editeddata = {
      ...this.state,
       date:date.toISOString().slice(0, 10)
      }
    this.props.onSave(editeddata)
  };

  handleDate = (date) =>{
       
    this.setState({
        date
    })
};

render() {

  let {onClose} = this.props
  let {title, description, date} = this.state;
        
  return (
      <>
          <Modal
              show={true}
              onHide={onClose}
              centered
          >
              <Modal.Header closeButton>
                  <Modal.Title>Edit Task</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div>
                      <InputGroup className={styles.editInput}>
                          <FormControl
                              placeholder="Add Task"
                              name="title"
                              value={title}
                              onChange={this.handleChange}
                              onKeyDown={this.handleKeyDown}
                          />
                      </InputGroup>
                  </div>
                  <div>
                      <textarea 
                      className={styles.editArea}
                      name="description"
                      value = {description}
                      onChange={this.handleChange} 
                      rows='5'
                      placeholder="Task Description"
                      >
                      </textarea>
                  </div>
                  <div>
                   <DatePicker
                    selected={ date }
                    onChange={this.handleDate}
                    startDate={new Date()}
                    minDate={new Date()}
                  />
                  </div>
              </Modal.Body>
              <Modal.Footer>
                  <Button
                      variant="success"
                      onClick={this.handleSave}
                  >
                      Save Edit
                  </Button>
                  <Button
                      variant="danger"
                      onClick={onClose}
                  >
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>

      </>

  );

};
};

// EditTaskModal.propTypes = {
//   data: PropTypes.object.isRequired,
//   onSave: PropTypes.func.isRequired,
//   onClose: PropTypes.func.isRequired
// }

export default EditTaskModal;