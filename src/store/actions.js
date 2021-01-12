import requst from '../Support/request';
import * as actionTypes from './actionTypes';

let apiUrl = process.env.REACT_APP_API_URL;

function getTasks(data={}) {
    let url = `${apiUrl}/task` 
    let query = '?'
    for(let key in data){
        let value = data[key]
        query = `${query}${key}=${value}&`
    }
    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING });
        requst(url + query)
            .then(res => {
                dispatch({ type: actionTypes.GET_TASK_SUCCESS, tasks: res })
            })

            .catch(err => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }

}

export { getTasks };

function addTask(data) {

    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING });
        requst(`${apiUrl}/task`, 'POST', data)
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

function remuveTask(taskId, from) {

    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING });
        requst(`${apiUrl}/task/${taskId}`, 'DELETE')
            .then(res => {
                dispatch({ type: actionTypes.REMOVE_TASK_SUCCESS, taskId , from })
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

function removeSelectid(taskId) {

    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING });
        requst(`${apiUrl}/task`, 'PATCH', { tasks: taskId })
            .then(res => {
                dispatch({ type: actionTypes.REMOVE_SELECTED_TASK_SUCCESS, taskId })
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }

}

export { removeSelectid };

function editTask(data, from) {

    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING });
        requst(`${apiUrl}/task/${data._id}`, 'PUT', data )
            .then(editTask => {
                dispatch({ type: actionTypes.EDIT_TASK_SUCCESS, task: editTask, from })
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }

}
export { editTask };

function changeTaskStatus(id ,data, from) {

    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING });
        requst(`${apiUrl}/task/${id}`, 'PUT', data )
            .then(editTask => {
                dispatch({ type: actionTypes.CHANGE_TASK_STATUS_SUCCESS, task: editTask, from })
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }

}

export { changeTaskStatus };

function getSingleTask(taskId) {

    return (dispatch) => {
        dispatch({ type: actionTypes.LOADING });
        requst(`${apiUrl}/task/${taskId}`)
            .then(res => {
                dispatch({ type: actionTypes.GET_SINGLE_TASK_SUCCESS, singleTask: res})
            })
            .catch(err => {
                dispatch({
                    type: actionTypes.ERROR,
                    error: err.message
                })
            })
    }

}

export { getSingleTask };
