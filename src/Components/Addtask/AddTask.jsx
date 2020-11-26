import React, { PureComponent } from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
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
      
        let {inputValue} = this.state;
        return(
            <div>
            <InputGroup className={styles.input}>
                <FormControl
                    placeholder="Add Task"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={inputValue}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                />
                <InputGroup.Append>
                    <Button variant="outline-primary"
                        onClick={this.handleClick}
                        disabled={!inputValue}>
                        Add
                    </Button>
                </InputGroup.Append>
            </InputGroup>
    
        </div>
        );
       
    };
};

AddTask.propTypes = {
    onAdd : PropTypes.func.isRequired
}

export default AddTask;