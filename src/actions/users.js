/**
 * redux actions for users
 */

// load action types for users
import {
	ADD_USER,
	UPDATE_USER
} from '../constants';

export function addUser({name}) {
	console.log('addUser-----', name)
	return {
		type: ADD_USER,
		name
	}
}

export function updateUserAge({id, age}) {
	return {
		type: UPDATE_USER,
		id,
		age
	}
}