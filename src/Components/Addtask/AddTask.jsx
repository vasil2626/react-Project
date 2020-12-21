import React, { PureComponent } from 'react';
import { FormControl, InputGroup, Button, Modal } from 'react-bootstrap';
import styles from './Addtasks.module.css';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddTask extends PureComponent {
    state = {
        title: '',
        description: '',
        date: new Date()
    }

    handleChange = (event) => {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleClick();
        }
    }
    handleDate = (date) =>{
       
        this.setState({
            date
        })
    };

    handleClick = () => {
        let { title, description, date } = this.state;
        if (! title ) {
            return;
        }
        let task = {
            title: title,
            description: description,
            date : date.toISOString().slice(0, 10)
        };
        this.props.onAdd(task);
    };

   
   

    render() {
        
        return (
            <>
                <Modal
                    show={true}
                    onHide={() => this.props.onClose()}
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
                                    onChange={this.handleChange}
                                    onKeyDown={this.handleKeyDown}
                                />
                            </InputGroup>
                        </div>
                        <div>
                            <textarea 
                            className={styles.area}
                            name="description"
                            onChange={this.handleChange} 
                            rows='5'
                            placeholder="Task Description"
                            >
                            </textarea>
                        </div>
                        <div>
                         <DatePicker
                          selected={this.state.date}
                          onChange={this.handleDate}
                          minDate={new Date()}
                        />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="success"
                            onClick={this.handleClick}
                        >
                            Save Task
                        </Button>
                        <Button
                            variant="danger"
                            onClick={() => this.props.onClose()}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

            </>

        );

    };
};

AddTask.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired
}

export default AddTask;