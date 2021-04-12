import React, {Component} from 'react';
import User from "./User";


class AllUsers extends Component {

	state = {users: []}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(value => value.json())
			.then(users => this.setState({users}))
	}


	render() {
		let {users} = this.state;

		return (
				<div>
					<User items={users}/>
				</div>


		);
	}
}

export default AllUsers;
