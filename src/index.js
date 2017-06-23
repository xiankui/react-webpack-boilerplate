import React from 'react';
import ReactDOM from 'react-dom';
import { 
	BrowserRouter as Router, 
	Route, 
	Link,
	Switch
} from 'react-router-dom';


import App from './components/App';
import About from './components/About';
import Users from './components/Users';
import Detail from './components/Users/detail'

import NotFound from './components/404/'


ReactDOM.render(
	<Router>
		<div>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/users">Users</Link></li>
				<li><Link to="/notfound">NotFound</Link></li>
			</ul>
			<div>
				<Switch>
					<Route exact path="/" component={App} />
					<Route path="/about" children={About} />
					<Route path="/users" component={Users} />

					<Route component={NotFound} />
				</Switch>
			</div>
		</div>
	</Router>,
	document.getElementById('root')
)