import {SET_TODOS} from '../action-types';

export const settTodos = (payload) => ({type: SET_TODOS, payload});

export const fetchTodos = async(dispatch) => {
	try{
		const res = await fetch('https://jsonplaceholder.typicode.com/users');
		const data = await res.json();
		dispatch(settTodos(data));
	}
catch (e){
	console.log(e)
}


}
