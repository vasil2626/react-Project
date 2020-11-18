import React, { Component } from 'react';
import { FormControl, InputGroup, Button, Container, Row, Col } from 'react-bootstrap';
import styles from './toDo.module.css';
import idGenerator from '../../Support/idGenerator'
import Task from '../Task/Task';



class ToDo extends Component {
    state = {
        inputValue: '',
        task: [],
        selected: []
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleClick();
        }
    }
    handleClick = (event) => {
        let { inputValue } = this.state;
        if (!inputValue) {
            return;
        }
        let newTask = {
            value: inputValue,
            _id: idGenerator()
        };

        let task = [newTask, ...this.state.task]
        this.setState({
            task: task,
            inputValue: ''
        })
    }
    removeTask = (taskid) => {
        let newTasks = this.state.task.filter((task) => taskid !== task._id)
        this.setState({
            task: newTasks
        })
    }
    handleCheck = (taskid) => {
        console.log(taskid);
        let selected = [...this.state.selected];
        
        selected.push(taskid);
        this.setState({
            selected
        })

    }

    render() {

        let { inputValue } = this.state;

        let card = this.state.task.map((task) => {
            return (
                <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Task
                        data={task}
                        onRemove={this.removeTask}
                        onCheck={this.handleCheck} />
                </Col>
            )
        })

        return (
            <>
                <div className={styles.toDo}>
                    < Container>
                        <Row className='justify-content-center'>
                            <Col sm={8} xs={6} md={12} es={4}>
                                <InputGroup className={styles.input}>
                                    <FormControl
                                        placeholder="Add Task"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        value={inputValue}
                                        onChange={this.handleChange}
                                        onKeyDown={this.handleKeyDown}
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-primary"
                                            onClick={this.handleClick}
                                            disabled={!inputValue}>
                                            Add
                                                </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row >
                            {card}
                        </Row>
                    </Container>
                </div>
            </>
        );
    };
};

export default ToDo;