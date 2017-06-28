import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Detail extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  console.log('pathname /users/:name was matched')
	  console.log(this.props)
	}

	render() {
		let name = this.props.match.params.name;
		return (
			<h2>hi, my name is {name}, my age is {this.props.age}</h2>
		)
	}
}

Detail.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			name: PropTypes.string.isRequired
		})
	})
}

Detail.defaultProps = {
	age: '20'
}

export default Detail;