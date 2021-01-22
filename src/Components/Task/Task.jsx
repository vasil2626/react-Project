import React, { useState, memo } from 'react';
import styles from '../Task/task.module.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faCheck, faHistory } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import Confirm from '../../Components/Confirm/Confirm';
import { formatDate } from '../../Support/utilit';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { remuveTask, changeTaskStatus } from '../../store/actions';

function Task(props) {

    let [selected, setSelected] = useState({ selected: false });

    let hendleCheck = () => {
        setSelected({
            ...selected,
            selected: !selected
        });
        let { onCheck, data, from } = props;
        onCheck(data._id, from);
    }

    let [deleteConfirm, setDeleteConfirm] = useState({ deleteConfirm: false, })

    let handleRemuve = () => {
        setDeleteConfirm()
    }

    let removeSelectid = () => {
        props.remuveTask(task._id, props.from)
    }

    let toggleConfirm = () => {
        setDeleteConfirm({
            ...deleteConfirm,
            deleteConfirm: false
        })
    }

    let task = props.data
    let { disabled } = props
    return (
        <Card
            className={`${styles.card} ${selected ? styles.selected : null}`} >
            <Card.Body>
                <input
                    className={styles.check}
                    type='checkbox'
                    onClick={hendleCheck}
                    disabled={!selected}
                />
                <Card.Title>
                    <Link to={`/task/${task._id}`}>
                        {task.title.slice(0, 7)}
                         ...
                        </Link>
                </Card.Title>
                <Card.Text>
                    Description:
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
                <Card.Text className={styles.data}>
                    Status :
                        {task.status}
                </Card.Text>
                {
                    task.status === 'active' ?
                        <Button
                            variant="success"
                            className={styles.edit}
                            onClick={() => props.changeTaskStatus(task._id, { status: 'done' }, 'tasks')}
                            disabled={disabled}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                        </Button> :
                        <Button
                            variant="warning"
                            className={styles.edit}
                            onClick={() => props.changeTaskStatus(task._id, { status: 'active' }, 'tasks')}
                            disabled={disabled}
                        >
                            <FontAwesomeIcon icon={faHistory} />
                        </Button>
                }

                <Button
                    variant="info"
                    className={styles.edit}
                    disabled={disabled}
                    onClick={() => props.onEdit(task)}

                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                    variant="danger"
                    className={styles.delete}
                    disabled={disabled}
                    onClick={handleRemuve}

                >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
                {
                    !deleteConfirm &&
                    <Confirm
                        onSubmit={removeSelectid}
                        onClose={toggleConfirm}
                        count={'this'}
                    />

                }
            </Card.Body>
        </Card>
    );
};

Task.propTypes = {

    data: PropTypes.object.isRequired,
    onCheck: PropTypes.func.isRequired,

}

let mapStateToProps = (state) => {
    return {
        removeTaskSuccess: state.removeTaskSuccess
    }
}


let mapDispatchToProps = {
    remuveTask,
    changeTaskStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Task));