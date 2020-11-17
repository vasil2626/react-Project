import React from 'react';
import { Component } from 'react';
import styles from '../Task/task.module.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

class Task extends Component {
    render(){
        let task = this.props.data
        
        return(
            <Card className={styles.card}>
            <Card.Body>
                <Card.Title>{task.value.slice(0, 5)}...</Card.Title>
                <Card.Text>
                    {task.value.slice(0, 5)}...
                </Card.Text>
                <Button variant="warning" className={styles.edit}>
                    <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button
                    variant="danger"
                    className={styles.delete}
                    onClick={() => this.props.onRemove(task._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </Card.Body>
        </Card>
        )
    }
}

export default Task;