import {combineReducers} from 'redux';

import counterReducer from './counter-reducer';
import todosReducer from './todos-reducer';

export const reducer = combineReducers({
	counterReducer,
	todosReducer
});
