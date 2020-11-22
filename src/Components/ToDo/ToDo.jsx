import React, { PureComponent } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import styles from './toDo.module.css';
import idGenerator from '../../Support/idGenerator'
import Task from '../Task/Task';
import AddTask from '../Addtask/AddTask';
import Confirm from '../Confirm/Confirm';
import EditTaskModal from '../EditTaskModal/EditTaskModal';



class ToDo extends PureComponent {
    state = {
        task: [],
        selected: new Set(),
        showConfirm: false,
        editTask: null
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
    handleClick = (value) => {

        let newTask = {
            value: value,
            _id: idGenerator()
        };

        let task = [newTask, ...this.state.task]
        this.setState({
            task: task

        })
    }
    removeTask = (taskid) => {
        let newTasks = this.state.task.filter((task) => taskid !== task._id)
        this.setState({
            task: newTasks
        })
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
        let task = [...this.state.task];
        this.state.selected.forEach((id) => {
            task = task.filter((task) => task._id !== id);
            this.setState({
                task,
                selected: new Set(),
                showConfirm: false
            });

        });
    };
    toggleConfirm = () => {
        this.setState({
            showConfirm: !this.state.showConfirm

        });
    };
    toggleEdit = (task) =>{
        this.setState({
            editTask: task
        })
    }

    render() {

        let { selected, showConfirm, editTask } = this.state;

        let card = this.state.task.map((task) => {
            return (
                <Col key={task._id} xs={12} sm={6} md={4} lg={3} xl={2}>
                    <Task
                        data={task}
                        onRemove={this.removeTask}
                        onCheck={this.handleCheck}
                        onEdit = {this.toggleEdit}
                    />
                </Col>
            )
        })

        return (
            <>
                <div className={styles.toDo}>
                    < Container>
                        <Row className={`${styles.buttonRemove} 'justify-content-center'`}>
                            <Col sm={8} xs={6} md={12} es={4}>
                                <AddTask
                                    onAdd={this.handleClick} />
                            </Col>
                        </Row>
                        <Row >
                            {card}
                        </Row>
                        <Row className='justify-content-md-center'>
                            <Col xs={4}>
                                <Button
                                    variant='outline-danger'
                                    onClick={this.toggleConfirm}
                                    disabled={!selected.size}>
                                    Remove Task
                            </Button>
                            </Col>
                        </Row>
                    </Container>
                    {showConfirm &&
                        < Confirm
                            onSubmit={this.removeSelectid}
                            onClose={this.toggleConfirm}
                            count={selected.size}
                        />}
                    {!!editTask &&
                        <EditTaskModal 
                        data={editTask}
                        onSave = {() =>{console.log('save');}}
                        onClose = {() => {this.toggleEdit(null)}}

                        />
                    }

                </div>
            </>
        );
    };
};

export default ToDo;