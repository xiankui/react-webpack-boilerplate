import React from 'react';
import {
	BrowserRouter as Router, // for static website
	Route,
	Link,
	Switch
} from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import Users from '../components/Users';

import NotFound from '../components/404/';

const App = () => (
	<Router>
		<div>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
				<li>
					<Link to="/users">Users</Link>
				</li>
				<li>
					<Link to="/notfound">NotFound</Link>
				</li>
			</ul>
			<div>
				{/* Switch only render the first one that matches the current pathname. */}
				<Switch>
					{/* exact only match '/' */}
					<Route exact path="/" component={Home} />
					<Route path="/about" children={About} />
					{/* both '/users' and '/users/:name' begin with '/users' */}
					<Route path="/users" component={Users} />

					{/* for default match when nothing to match */}
					<Route component={NotFound} />
				</Switch>
			</div>
		</div>
	</Router>
);

export default App;
