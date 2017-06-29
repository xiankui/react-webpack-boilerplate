/**
 * reducer for users
 */

// load action types for users
import {
	ADD_USER,
	UPDATE_USER
} from '../constants';

const initState = [{
	id: 0,
	name: 'Lily',
	age: 20
}, {
	id: 1,
	name: 'Lucy',
	age: 20
}, {
	id: 2,
	name: 'Honey',
	age: 16
}]

/**
 * compose for users
 */
const user = (state, action) => {
	switch (action.type) {
		case ADD_USER:
			return {
				id: action.id,
				name: action.name,
				age: action.age || 20
			};
			break;
		case UPDATE_USER:
			if (state.id !== action.id) {
				return state
			}

			return {
				...state,
				age: action.age
			}
			break;
		default:
			return state;
	}
}

const users = (state = initState, action) => {
	switch (action.type) {
		case ADD_USER: 
			action.id = state.length;

			return [
				...state,
				user(undefined, action)
			]
			break;

		case UPDATE_USER:
			return state.map(t => user(t, action));
			break;

		default:
			return state;
	}
}

export default users;