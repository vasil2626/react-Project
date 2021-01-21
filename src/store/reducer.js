import * as actionTypes from './actionTypes';

let defaultState = {
    task: [],
    singleTask: null,
    errorMessage: null,
    successMessage: null,
    addTaskSuccess: false,
    removeTaskSuccess: false,
    sendMessage: false,
    edidTaskSuccess: false,
    sendForm: false,
    loading: false
}

let reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.ERROR: {
            return {
                ...state,
                errorMessage: action.error,
                loading: false

            }
        }
        case actionTypes.LOADING: {
            return {
                ...state,
                loading: true,
                errorMessage: null,
                edidTaskSuccess: false,
                successMessage: null,
                removeTaskSuccess: false,
                addTaskSuccess: false
            }
        }
        case actionTypes.GET_TASK_SUCCESS: {
            return {
                ...state,
                task: action.tasks,
                loading: false
            }
        }
        case actionTypes.ADD_TASK_SUCCESS: {
            let task = [...state.task, action.tasks];
            return {
                ...state,
                task: task,
                loading: false,
                successMessage: 'Task Created Successfully  👍',
                addTaskSuccess: true
            }
        }
        case actionTypes.REMOVE_TASK_SUCCESS: {
            if(action.from === 'single'){
                return {
                    ...state,
                    task: action.task,
                    loading: false,
                    removeTaskSuccess: true,
                    successMessage: 'Task Removed Successfully  👍',
    
                }
            }
            else{
                  let newTasks = state.task.filter((task) => task._id !== action.taskId)

            return {
                ...state,
                task: newTasks,
                loading: false,
                removeTaskSuccess: true,
                successMessage: 'Task Removed Successfully  👍',

            }
        }
            }
          
        case actionTypes.REMOVE_SELECTED_TASK_SUCCESS: {
            let task = [...state.task];
            action.taskId.forEach((id) => { task = task.filter((task) => task._id !== id) });

            return {
                ...state,
                task: task,
                removeTaskSuccess: true,
                loading: false,
                successMessage: 'Selected Task Removed Successfully  👍',
            }

        }
        case actionTypes.EDIT_TASK_SUCCESS: {
            if (action.from === 'single') {
                return {
                    ...state,
                    singleTask: action.task,
                    edidTaskSuccess: true,
                    loading: false,
                    successMessage: 'Task Edited Successfully  👍',
                }
            }
            else {
                let edittask = [...state.task];
                let foundTask = edittask.findIndex((task) => task._id === action.task._id);
                edittask[foundTask] = action.task

                return {
                    ...state,
                    task: edittask,
                    edidTaskSuccess: true,
                    loading: false,
                    successMessage: 'Task Edited Successfully  👍',
                }

            }

        }
        case actionTypes.CHANGE_TASK_STATUS_SUCCESS: {
            let mesage;
            if(action.task.status === 'done'){
                mesage = 'The task completed  👍'
            }else{
                mesage = 'The task is active now  😉'
            }
            if (action.from === 'single') {
                return {
                    ...state,
                    singleTask: action.task,
                    edidTaskSuccess: true,
                    loading: false,
                    successMessage: mesage,
                }
            }
            else {
                let edittask = [...state.task];
                let foundTask = edittask.findIndex((task) => task._id === action.task._id);
                edittask[foundTask] = action.task

                return {
                    ...state,
                    task: edittask,
                    edidTaskSuccess: true,
                    loading: false,
                    successMessage:mesage,
                }

            }

        }
        case actionTypes.GET_SINGLE_TASK_SUCCESS: {

            return {
                ...state,
                singleTask: action.singleTask,
                loading: false,
            }

        }
        case actionTypes.SEND_MESAGE_SUCCESS: {
            return {
                ...state,
                sendMessage: action.mesage,
                sendForm: !defaultState.sendForm,
                loading: false,
                successMessage: 'Message sent successfully  📩',
            }
        }
      

        default: return state
    }

}


export { reducer };