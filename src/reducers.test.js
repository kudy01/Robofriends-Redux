import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILED
} from './constants.js'; 

import * as reducers from './reducers';

describe('Search Robots reducer', () => {
	const mockInitialStateSearch = {
		searchField: ''
	}
	it('should return the initial state', () => {
		expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''})
	})

	it('should handle CHANGE_SEARCH_FIELD', () => {
		expect(reducers.searchRobots(mockInitialStateSearch, {
			type: CHANGE_SEARCH_FIELD,
			payload: 'abc'
		})).toEqual({ 
			searchField: 'abc'
		})
	})
})

describe('requestRobots reducer', () => {
	const mockInitialStateRobots = {
		isPending: false,
		robots: [], 
		error: ''
	}
	it('should return the initial state', () => {
		expect(reducers.requestRobots(undefined, {})).toEqual(mockInitialStateRobots)
	})

	it('should handle REQUEST_ROBOTS_PENDING', () => {
		expect(reducers.requestRobots(mockInitialStateRobots, {
			type: REQUEST_ROBOTS_PENDING
		})).toEqual({
			isPending: true,
			robots: [], 
			error: ''
		})
	})

	it('should handle REQUEST_ROBOTS_SUCCESS', () => {
		expect(reducers.requestRobots(mockInitialStateRobots, {
			type: REQUEST_ROBOTS_SUCCESS,
			payload: [{
				id: 3,
				name: 'John',
				email: 'jj'
			}]
		})).toEqual({
			isPending: false,
			robots: [{
				id: 3,
				name: 'John',
				email: 'jj'
			}], 
			error: ''
		})
	})

	it('should handle REQUEST_ROBOTS_FAILED', () => {
		expect(reducers.requestRobots(mockInitialStateRobots, {
			type: REQUEST_ROBOTS_FAILED,
			payload: "ERROR!!!!"
		})).toEqual({ 
			error: "ERROR!!!!", 
			robots: [],
			isPending: false
		})
	})
})
















