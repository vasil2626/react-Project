import React, { useState, memo } from 'react';
import styles from '../Task/task.module.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { formatDate } from '../../Support/utilit';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { remuveTask } from '../../store/actions';

function Task(props){

    let [checked, setChecked] = useState({ checked: false });

    let hendleCheck = () => {
        setChecked = ({
            ...checked,
            checked: !checked
        });
        let { onCheck, data } = props;
        onCheck(data._id);
    }

    let task = props.data

    return (
        <Card
            className={`${styles.card} ${checked ? styles.selected : null}`} >
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
                <Button
                    variant="warning"
                    className={styles.edit}
                    onClick={() => props.onEdit(task)}
                >
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                    variant="danger"
                    className={styles.delete}
                    onClick={() => props.remuveTask(task._id)}>
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
let mapDispatchToProps = {
    remuveTask
}

export default connect(null, mapDispatchToProps)(memo(Task));