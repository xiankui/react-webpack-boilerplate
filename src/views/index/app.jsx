import React, { Component } from 'react';

import logo from './logo.svg';
import './app.scss'

class App extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render() {
		return (
			<div className="app-container">
				<h1>react with webpack</h1>
				<img src={logo} alt="logo" />
				<div>
					<a href="/profile.html" style={{color: '#fff', fontSize: 20}}>Multipe Pages - Profile Page</a>
				</div>
			</div>
		)
	}	
}

export default App;