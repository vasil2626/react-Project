import React from 'react';
import { PureComponent } from 'react';
import styles from '../Task/task.module.css';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

class Task extends PureComponent {
    state = {
        checked: false
    }
    hendleCheck = () => {
        this.setState = ({
            checked: !this.state.checked
        });
        let {onCheck, data} = this.props;
        onCheck(data._id);
}
render(){
    let task = this.props.data
    console.log(task);
    let {onCheckt} = this.state;
    return (
        <Card 
        border="warning"
        className={`${styles.card} ${onCheckt ? styles.selected: null}`} >
            <Card.Body>
                <input
                    type='checkbox'
                    onClick={this.hendleCheck} />
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>
                    {task.description}
                </Card.Text>
                <Button 
                variant="warning" 
                className={styles.edit}
                onClick={()=>this.props.onEdit(task)}
                >
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
    );
};
};
Task.propTypes = {
    data: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onCheck: PropTypes.func.isRequired,
    
}

export default Task;