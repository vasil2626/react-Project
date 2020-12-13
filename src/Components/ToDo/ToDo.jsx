import React, { PureComponent } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import styles from './toDo.module.css';
import Task from '../Task/Task';
import AddTask from '../Addtask/AddTask';
import Confirm from '../Confirm/Confirm';
import EditTaskModal from '../EditTaskModal/EditTaskModal';



class ToDo extends PureComponent {
    state = {
        task: [],
        selected: new Set(),
        showConfirm: false,
        editTask: null,
        newTaskModal: false
    };


    componentDidMount() {
        fetch("http://localhost:3001/task", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((respons) => respons.json())
            .then((res) => {
                if (res.error) {
                    throw res.erroe
                }
                this.setState({
                    task: res
                })
            })
            .catch((error) => {
                new Error('Bad Request', error)
            })
    }

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
    handleClick = (data) => {
        let body = JSON.stringify(data)
        fetch("http://localhost:3001/task", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: body
        })

            .then((res) => res.json())
            .then((respons) => {
                let tasks = [respons, ...this.state.task]
                this.setState({
                    task: tasks,
                    newTaskModal: !this.state.newTaskModal     
                });
            })
            .catch((error) => {
                throw error = new Error('Request error')
            });


    }
    removeTask = (taskid) => {
        fetch(`http://localhost:3001/task/${taskid}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((respons) => {
                if (respons.error) {
                    throw respons.error
                }
                let newTasks = this.state.task.filter((task) => task._id !== taskid)
                this.setState({
                    task: newTasks
                });
            })
            .catch((error) => console.log("Error", error));

    }

    handleCheck = (taskid) => {
        let selected = new Set(this.state.selected);
        if (selected.has(taskid)) {
            selected.delete(taskid)
        }
        else {
            selected.add(taskid)
        };
        this.setState({
            selected
        })

    };
    removeSelectid = (taskid) => {
        let body = {
            tasks: [...this.state.selected]
        }
        fetch(`http://localhost:3001/task`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then((res) => res.json())
            .then((respons) => {
                if (respons.error) {
                    throw respons.error
                }
                let task = [...this.state.task];
                this.state.selected.forEach((id) => {
                    task = task.filter((task) => task._id !== id);
                    this.setState({
                        task,
                        selected: new Set(),
                        showConfirm: false
                    });

                });

            })
            .catch((error) => console.log("Error", error))

    };
    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm

        });
    };
    toggleEdit = (task) => {
        this.setState({
            editTask: task
        })
    }
    saveTask = (editTask) => {
        fetch(`http://localhost:3001/task/${editTask._id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editTask)
        })
            .then((res) => res.json())
            .then((respons) => {
                if (respons.error) {
                    throw respons.error
                }
                let task = [...this.state.task];
                let foundTask = task.findIndex((task) => task._id === editTask._id);
                task[foundTask] = editTask
                this.setState({
                    task: task

                });
                this.toggleEdit();
            })
            .catch((error) => console.log("Error", error))

    };

    toggleNewTask = () =>{
        this.setState({
            newTaskModal: ! this.state.newTaskModal
        })

    }

    render() {
        
        let { selected, showConfirm, editTask, newTaskModal } = this.state;

        let card = this.state.task.map((task) => {
            return (
                <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Task
                        data={task}
                        onRemove={this.removeTask}
                        onCheck={this.handleCheck}
                        onEdit={this.toggleEdit}
                    />
                </Col>
            )
        })

        return (
            <>
                <div className={styles.toDo}>
                    < Container>
                        <Row className={'justify-content-center text-center'}>
                            <Col sm={8} xs={6} md={12} es={4}>
                                <Button
                                variant='outline-success'
                                onClick={this.toggleNewTask}
                                disabled={selected.size}
                                >
                                    Add Task
                                    </Button>
                            </Col>
                        </Row>
                        <Row 
                        className={`justify-content-center text-center ${styles.buttonRemove}`}
                        >
                            <Col xs={4}>
                                <Button
                                    className='center'
                                    variant='outline-danger'
                                    onClick={this.toggleConfirm}
                                    disabled={!selected.size}
                                    >
                                    Remove Task
                            </Button>
                            </Col>
                        </Row>
                        <Row >
                            {card}
                        </Row>
                        
                    </Container>
                    {showConfirm &&
                        < Confirm
                            onSubmit={this.removeSelectid}
                            onClose={this.toggleConfirm}
                            count={selected.size}
                        />}
                    { !! editTask &&
                        <EditTaskModal
                            data={editTask}
                            onSave={this.saveTask}
                            onClose={() => { this.toggleEdit(null) }}
                        />
                    }
                    {  newTaskModal && 
                          <AddTask
                          onAdd={this.handleClick}
                          onClose={this.toggleNewTask}
                           />
                    }

                </div>
            </>
        );
    };
};
export default ToDo;