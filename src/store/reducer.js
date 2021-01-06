import * as actionTypes from './actionTypes';

let defaultState = {
    task: [],
    errorMessage: null,
    successMessage: null,
    addTaskSuccess: false,
    loading: false
}

let reducer = (state = defaultState, action) =>{
    switch(action.type){
        case actionTypes.ERROR :{
            return {
                ...state,
                errorMessage: action.error,
                loading: false
                
            }
    }
        case actionTypes.LOADING :{
            return {
                ...state,
                loading: true,
                errorMessage: null,
                successMessage: null,
                addTaskSuccess: false
            }
        }
        case actionTypes.GET_TASK_SUCCESS :{
            return {
                ...state,
                task: action.tasks,
                loading: false
            }
        }
        case actionTypes.ADD_TASK_SUCCESS :{
            let task = [...state.task, action.tasks];
            return {
                ...state,
                task: task,
                loading: false,
                successMessage: 'Task Created Successfully  👍',
                addTaskSuccess: true
            }
        }
        case actionTypes.REMOVE_TASK_SUCCESS :{
            let newTasks = state.task.filter((task) => task._id !== action.taskId)
         
            return {
                ...state,
                task: newTasks,
                loading: false,
                successMessage: 'Task Removed Successfully  👍',
               
            }
        }
   
    default: return state
}
}

export {reducer};