import React, { useState } from 'react';
import { FormControl, InputGroup, Button, Modal } from 'react-bootstrap';
import styles from './Addtasks.module.css';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddTask(props) {

    let [forms, setForms] = useState({
        title: '',
        description: '',
        date: new Date()
        
    });

    let handleChange = (event) => {
        let {name, value } = event.target; 
        setForms({
            ...forms,
            [name]: value
        }) 
        
    }

    let handleDate = (date) =>{
        setForms({
            ...forms,
            date
        })
    };
    
    let handleClick = () => {

        let {title, description, date } = forms;
        if(!title){
            return
        }

        let task = {
            title,
            description,
            date: date.toISOString().slice(0, 10)
        }
        props.onAdd(task);
    };
    
    let handleKeyDown = (event) => {
        if(event.key ==='Enter'){
            handleClick();
        }
    }
    
    return (
        <>
            <Modal
                show={true}
                onHide={() => props.onClose()}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <InputGroup className={styles.input}>
                            <FormControl
                                placeholder="Add Task"
                                name="title"
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                            />
                        </InputGroup>
                    </div>
                    <div>
                        <textarea 
                        className={styles.area}
                        name="description"
                        onChange={handleChange} 
                        rows='5'
                        placeholder="Task Description"
                        >
                        </textarea>
                    </div>
                    <div>
                     <DatePicker
                      selected={forms.date}
                      onChange={handleDate}
                      minDate={new Date()}
                    />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="success"
                        onClick={handleClick}
                    >
                        Save Task
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() =>props.onClose()}
                    >
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>

    ); 
      
    };

AddTask.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default AddTask;