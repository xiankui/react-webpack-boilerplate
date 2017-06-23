import React, { Component } from 'react';
import {
	Route,
	Link
} from 'react-router-dom';

import Detail from './detail';

const _users = ['Lily', 'Lucy', 'Vica'];

class Users extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div>
				<ul>
					{
						_users.map(user => (
							<li key={user}><Link to={`/users/${user}`}>{user}</Link></li>
						))
					}
				</ul>

				<hr />

				<Route path="/users/:name" component={Detail} />
			</div>
		)
	}
}

export default Users;