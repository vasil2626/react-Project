import React, { PureComponent } from 'react';
import Styles from '../SingleTask/Singletask.module.css';
import { formatDate } from '../../../Support/utilit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faHistory, faCheck } from '@fortawesome/free-solid-svg-icons';
import EditTaskModal from '../../EditTaskModal/EditTaskModal';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getSingleTask, remuveTask, changeTaskStatus } from '../../../store/actions';

class SingleTask extends PureComponent {
    state = {
        showEdit: false
    };

    onRemuve = () => {
        let taskId = this.props.match.params.id
        const from = 'single';
        this.props.remuveTask(taskId, { from: from })
        this.props.history.push('/')
    }


    componentDidMount() {
        let taskId = this.props.match.params.id;
        this.props.getSingleTask(taskId);


    }

    componentDidUpdate(prevProps) {
        if (!prevProps.edidTaskSuccess && this.props.edidTaskSuccess) {
            this.setState({
                showEdit: false
            })
        }

    }

    toggleTask = () => {
        this.setState({
            showEdit: !this.state.showEdit
        })
    }


    render() {
        
        let { showEdit } = this.state;
        let { task } = this.props;
        console.log(task)
        
    
        return (
            <>
                {!!task ?
                    <div className={Styles.cardTask}>
                        <Card>
                            <Card.Body>
                                <h1> Title <br />
                                    {task.title}
                                </h1>
                                <h2> <u>Deskription</u> <br />
                                    {task.description}
                                </h2>
                                <h4>
                                    Date <br />
                                    {formatDate(task.date)}
                                </h4>
                                <h5>
                                    Created At <br />
                                    {formatDate(task.created_at)}
                                </h5>
                            </Card.Body>
                        </Card>

                    </div> :
                    <div className={Styles.notFound}>
                        <h3>Task Not Found</h3>
                    </div>
                }
                <div className={Styles.statusButton}>
                {
                      task && task.status === 'active' ?
                            <Button
                                variant="success"
                                onClick={() => this.props.changeTaskStatus(task._id, { status: 'done' }, 'single')}
                            >
                                <FontAwesomeIcon icon={faCheck} />
                                Active
                            </Button> :
                            <Button
                                variant="warning"
                                onClick={() => this.props.changeTaskStatus(task._id, { status: 'active' }, 'single')}
                        
                            >
                                <FontAwesomeIcon icon={faHistory} />
                                Done
                            </Button>
                    }
                </div>
           
                <div className={Styles.cardTask}>
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
                        from='single'
                        onSave={this.saveTask}
                        onClose={this.toggleTask}
                    />

                }

            </>

        )
    };

};


let mapStateToProps = (state) => {
    return {
        task: state.singleTask,
        removeTaskSuccess: state.removeTaskSuccess,
        edidTaskSuccess: state.edidTaskSuccess,
    };

}

let mapDispatchToProps = {
    getSingleTask,
    remuveTask,
    changeTaskStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleTask);