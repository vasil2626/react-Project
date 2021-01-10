import React, { useState, memo } from 'react';
import styles from '../Task/task.module.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck, faHistory } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { formatDate } from '../../Support/utilit';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { remuveTask, changeTaskStatus } from '../../store/actions';

function Task(props){

    let [selected, setselected] = useState({ selected: false });

    let hendleCheck = () => {
        setselected = ({
            ...selected,
            selected: !selected
        });
        let { onCheck, data, from } = props;
        onCheck(data._id, from);
    }

 

    let task = props.data

    return (
        <Card
            className={`${styles.card} ${selected ? styles.selected : null}`} >
            <Card.Body>
                <input
                    type='checkbox'
                    onClick={hendleCheck} />
                <Card.Title>
                    <Link to={`/task/${task._id}`}>
                        {task.title.slice(0, 7)}
                         ...
                        </Link>
                </Card.Title>
                <Card.Text>
                    Deskription:
                        {task.description.slice(0, 10)}
                </Card.Text>
                <Card.Text className={styles.data}>
                    Date:
                        {formatDate(task.date)}
                </Card.Text>
                <Card.Text className={styles.data}>
                    Created_at:
                        {formatDate(task.created_at)}
                </Card.Text>
                {
                    task.status === 'active'?
                    <Button
                    variant="success"
                    className={styles.edit}
                    onClick={() => props.changeTaskStatus(task._id,{status: 'done'}, 'tasks')}
                >
                    <FontAwesomeIcon icon={faCheck} />
                </Button>:
                  <Button
                    variant="warning"
                    className={styles.edit}
                    onClick={() => props.changeTaskStatus(task._id,{status: 'active'}, 'tasks')}
                >
                    <FontAwesomeIcon icon={faHistory} />
                </Button>
                }
             
              
                <Button
                    variant="info"
                    className={styles.edit}
                    onClick={() => props.onEdit(task)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                    variant="danger"
                    className={styles.delete}
                    onClick={() => props.remuveTask(task._id,props.from)}
                    
                    >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </Card.Body>
        </Card>
    );
};

Task.propTypes = {

    data: PropTypes.object.isRequired,
    onCheck: PropTypes.func.isRequired,

}

let mapStateToProps = (state) =>{
    return{
        removeTaskSuccess: state.removeTaskSuccess
    }
}


let mapDispatchToProps = {
    remuveTask,
    changeTaskStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Task));