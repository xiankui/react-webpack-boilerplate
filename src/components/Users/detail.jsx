import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Detail extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  console.log(this.props)
	}

	render() {
		let name = this.props.match.params.name;
		return (
			<h2>hello {name}, i am {this.props.author}</h2>
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
	author: 'kevin'
}

export default Detail;