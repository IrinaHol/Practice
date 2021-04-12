import {SET_TODOS, REMOVE_TODO, TOGGLE_STATUS} from '../action-types'

const initialState = {
	todos: []
}

 const todosReducer = (state=initialState, action) => {
	switch (action.type) {
		case SET_TODOS: {
			return {...state, todos: action.payload}
		}
		case TOGGLE_STATUS: {
			return {...state, todos: []}
		}
		case REMOVE_TODO: {
			return {...state, todos: []}
		}
		default: {
			return state;
		}
	}
}

export default todosReducer;
