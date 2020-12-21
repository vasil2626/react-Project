import React, { PureComponent } from 'react';
import Styles from '../SingleTask/Singletask.module.css';
import { formatDate } from '../../../Support/utilit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from '../../EditTaskModal/EditTaskModal';
import { Spinner, Card, Button } from 'react-bootstrap';

class SingleTask extends PureComponent {
    state = {
        task: null,
        showEdit: false
    };



    onRemuve = () => {
        let taskId = this.state.task._id
        fetch(`http://localhost:3001/task/${taskId}`, {
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
                this.props.history.push('/')

            })
            .catch((error) => console.log("Error", error));

    }


    componentDidMount() {
        let taskId = this.props.match.params.id;
        fetch(`http://localhost:3001/task/${taskId}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
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
    toggleTask = () => {
        this.setState({
            showEdit: !this.state.showEdit
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

                this.setState({
                    task: respons,
                    showEdit: false
                })

            })
            .catch((error) => console.log("Error", error))

    }

    render() {
        let { task, showEdit } = this.state;
        return (
            <>
                {!!task ?
                    <div className={Styles.cardTask}>
                        <Card>
                            <Card.Body>
                                <h2> Title:
                                     {task.title}
                                </h2>
                                <h3> Deskription:
                                    {task.description}
                                </h3>
                                <h4>
                                    Date:
                                     {formatDate(task.date)}
                                </h4>
                                <h5>
                                    Created At:
                                    {formatDate(task.created_at)}
                                </h5>
                            </Card.Body>
                        </Card>

                    </div> :
                    <div className={Styles.spinerpos}>
                        <Spinner animation="border" variant="warning" />
                    </div>
                }
                <div
                    className={Styles.edit}>
                    <Button
                        variant="warning"
                        onClick={this.toggleTask}
                    >
                        <FontAwesomeIcon
                            icon={faEdit} />
                      Edit
                     </Button>
                </div>
                <div className={Styles.delete}>
                    <Button
                        variant="danger"
                        onClick={this.onRemuve}
                    >
                        <FontAwesomeIcon
                            icon={faTrash} />
                       Delete
                      </Button>
                </div>

                {
                    showEdit &&
                    <EditTaskModal
                        data={task}
                        onSave={this.saveTask}
                        onClose={this.toggleTask}
                    />

                }

            </>
        );
    };

};

export default SingleTask;