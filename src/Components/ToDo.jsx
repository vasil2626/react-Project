import React, { Component } from 'react';
import Task from './Task';

class ToDo extends Component {
    state = {
        inputValue: '',
        task: []
    };

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleClick = (event) => {
        let { inputValue, task } = this.state;
        task.push(inputValue);
        this.setState({
            task: task,
            inputValue: ''
        })
    }
    render() {
        let { inputValue, task } = this.state
        return (
            <div>
                <div>
                    <input type='text'
                        placeholder='Add Task'
                        value={inputValue}
                        onChange={this.handleChange}>
                    </input>
                    <button
                        onClick={this.handleClick}>
                        Add
                </button>
                    <ol>
                        {task.map((task, index) => {
                            return < Task elem={task} key={index} />
                        })}
                    </ol>

                </div>
            </div>

        );
    };
};

export default ToDo;