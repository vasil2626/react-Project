import requst from '../Support/request';
import * as actionTypes from './actionTypes';

function getTasks() {

    return (dispatch) => {
        dispatch({type: actionTypes.LOADING });

        requst('http://localhost:3001/task')
            .then(res => {
                dispatch({ type: actionTypes.GET_TASK_SUCCESS, tasks: res })
            })

            .catch(err => {
                dispatch({
                    type: actionTypes.ERROR ,
                    error: err.message
                })
            })
    }

}

export { getTasks };

function addTask(data){

    return (dispatch) => {
        dispatch({type: actionTypes.LOADING});
        requst('http://localhost:3001/task', 'POST', data)
            .then(res => {
                dispatch({ type: actionTypes.ADD_TASK_SUCCESS, tasks: res })
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }

}

export { addTask };

function remuveTask(taskId){

    return (dispatch) => {
        dispatch({type: actionTypes.LOADING});
        requst(`http://localhost:3001/task/${taskId}`, 'DELETE')
            .then(res => {
                dispatch({ type: actionTypes.REMOVE_TASK_SUCCESS, taskId })
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }

}

export { remuveTask };