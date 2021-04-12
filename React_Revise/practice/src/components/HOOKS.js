import React, {useState, useEffect, useReducer, useMemo, memo} from 'react';

// const reducer = (state, action) => {
// 	switch (action.type) {
// 		case 'CHANGE_TODO_STATUS': {
// 			return {
// 				...state,
// 				name: 'Ira'
// 			}
// 		}
// 		case 'CHANGE_TODO_TODO': {
// 			return {
// 				...state,
// 				title: action.payload
// 			}
// 		}
// 		default: {
// 			return state;
// 		}
// 	}
// }
// const initialState = {
// 	id: null,
// 	name: null,
// 	username: null,
// 	email: null
// }

 const Hooks = memo(() => {
	console.log('TEST')
	// const [state, dispatch] = useReducer(reducer, initialState);

	// const [counter, setCounter] = useState({name: 'Ira', age: 22});
	// const [user, setUser] = useState();
	// const onClickHandler = () => {
	// 	// setCounter(0)
	// 	setCounter((prevState) => ({
	// 		...prevState,
	// 		age: prevState.age + 2
	// 	}))
	// }
	// useEffect(() => {
	// 	fetch('https://jsonplaceholder.typicode.com/users/1')
	// 		.then(value => value.json())
	// 		.then(users => setUser(users))
	// }, [user])

	const [sort, setSort] = useState(('asc'))
	const [arr, setArr] = useState([1, 2, 3, 4, 55, 77]);

	const sorting = useMemo(()=> {
		const cloneSoert = [...arr];
		if(sort ==='asc'){
			return cloneSoert.sort((a,b)=> a-b)
		}
		if(sort ==='desc'){
			return cloneSoert.sort((a,b)=> b-a)
		}

	},[arr, sort])

	console.log(sorting)
	const totalPrice = useMemo(()=> {
		return arr.reduce((acc, el)=> (acc + el),0)
	},[arr])

	console.log(totalPrice)
	const clicclcl =()=> {
		console.log('kkk')
	}

return (
	<div>
		{/*<div>*/}
		{/*	{!!user && <h1>{user.id}-{user.name}</h1>}*/}
		{/*</div>*/}

		<button onClick={clicclcl}>Click</button>
		{/*<h1>COUNTER {counter.name}-{counter.age}</h1>*/}
	</div>
)
})
export default Hooks;
