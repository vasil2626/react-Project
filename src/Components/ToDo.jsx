import React, { Component } from 'react';
import Task from './Task';
import styles from './toDo.module.css';
import { FormControl, InputGroup, Button } from 'react-bootstrap'

class ToDo extends Component {
    state = {
        inputValue: '',
        task: []
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleClick = (event) => {
        let { inputValue, task } = this.state;
        task.push(inputValue);
        this.setState({
            task: task,
            inputValue: ''
        })
    }
    render() {
        let { inputValue, task } = this.state
        if (this.inputValu === false) {
            return
        }
        return (
            <div className='container'>
                <div className={styles.page} >
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Add Task"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value={inputValue}
                            onChange={this.handleChange}
                        />
                        <InputGroup.Append>
                            <Button variant="primary"
                                onClick={this.handleClick}>Add</Button>
                        </InputGroup.Append>
                    </InputGroup>
                    <ol >
                        {task.map((task, index) => {
                            return < Task elem={task} key={index} />
                        })}
                    </ol>
                </div>
            </div>
        );
    };
};

export default ToDo;