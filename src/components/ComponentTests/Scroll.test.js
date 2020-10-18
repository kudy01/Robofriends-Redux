import React from "react";
import { create } from "react-test-renderer";
import Scroll from '../Scroll';


it('Expect to render Scroll Component', () => {
	expect(create(<Scroll />).toJSON()).toMatchSnapshot()
})

