import React from "react";
import { create } from "react-test-renderer";
import SearchBox from "../SearchBox";

it("Expect to render SearchBox Component", () => {
  expect(create(<SearchBox />).toJSON()).toMatchSnapshot(); // check if a component renders correctly
}); 