import React, { PureComponent } from 'react';
import { FormControl, InputGroup, Button, Modal } from 'react-bootstrap';
import styles from './Addtasks.module.css';
import PropTypes from 'prop-types';

class AddTask extends PureComponent {
    state = {
        inputValue: ''
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
    handleClick = () => {
        let { inputValue } = this.state;
        if (!inputValue) {
            return;
        }
        let task = {
            title: inputValue
        };
        this.props.onAdd(task);
        this.setState({
            inputValue: ''
        })
    }

    render() {

        let { inputValue } = this.state;
        return (
            <>
                <Modal
                    show={true}
                    onHide={() => this.props.onClose()}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal Header</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className={styles.input}>
                            <FormControl
                                placeholder="Add Task"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                                value={inputValue}
                                onChange={this.handleChange}
                                onKeyDown={this.handleKeyDown}
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="secondary"
                            onClick={() => this.props.onClose()}
                            >
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            onClick={() =>this.props.onAdd()}
                        >
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>




            </>

        );

    };
};

AddTask.propTypes = {
    onAdd: PropTypes.func.isRequired
}

export default AddTask;