import React from "react";
import { shallow } from "enzyme";
import MainPage from "../MainPage";


let wrapper ;
beforeEach(() => {
	const mockProps = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: false
	}
	wrapper = shallow(<MainPage {...mockProps}/>)
})
it("Expect to render MainPage Component", () => {
  expect(wrapper).toMatchSnapshot(); 
}); 

it("Filters Robots Correctly when search found", () => {
	const mockProps2 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'jj'
		}],
		searchField: 'john',
		isPending: false
	}
	const wrapper2 = shallow(<MainPage {...mockProps2}/>)
	expect(wrapper2.instance().filterRobots()).toEqual([{
			id: 3,
			name: 'John',
			email: 'jj'
		}])
})

it("Filters Robots Correctly when search not found", () => {
	const mockProps3 = {
		onRequestRobots: jest.fn(),
		robots: [{
			id: 3,
			name: 'John',
			email: 'jj'
		}],
		searchField: 'jojo',
		isPending: false
	}
	const wrapper3 = shallow(<MainPage {...mockProps3}/>)
	expect(wrapper3.instance().filterRobots()).toEqual([])
})


it("Show the loading page", () => {
	const mockProps4 = {
		onRequestRobots: jest.fn(),
		robots: [],
		searchField: '',
		isPending: true
	}
	const wrapper4 = shallow(<MainPage {...mockProps4}/>)
	expect(wrapper4).toEqual({})
})