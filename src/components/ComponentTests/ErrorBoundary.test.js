import { shallow } from 'enzyme';
import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

it('Expect to render ErrorBoundary Component', () => {
	const wrapper = shallow(<ErrorBoundary />);
	wrapper.setState({ hasError: true });
	expect(wrapper).toMatchSnapshot()
})


// import React from "react";
// import { create } from "react-test-renderer";
// import ErrorBoundary from "../ErrorBoundary";

// it("Expect to render ErrorBoundary Component", () => {
//   const wrapper = create(<ErrorBoundary />);
//   wrapper.setState({ hasError: true });
//   expect(wrapper.toJSON()).toMatchSnapshot(); // check if a component renders correctly
// }); 