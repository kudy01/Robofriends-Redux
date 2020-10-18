import React from "react";
import { create } from "react-test-renderer";
import CardList from '../CardList';

it('Expect to render CardList Component', () => {
	const mockRobots = [
	  {
	    id: 1,
	    name: 'Sameer Khan',
	    username: 'Package',
	    email: 'ilovetrump.org'
	  }]
	expect(create(<CardList robots ={mockRobots}/>).toJSON()).toMatchSnapshot();
})

