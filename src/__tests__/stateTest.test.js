import React from "react";
import { shallow } from "enzyme";
import App from "../App";

const setState = jest.fn(); 
const useStateSpy = jest.spyOn(React, "useState");
useStateSpy.mockImplementation((initialState) => [initialState, setState]);
const wrapper = shallow(<App />);

it("should update state on input change", () => {
  const newInputValue = "React is Awesome";
  wrapper
    .find(".input")
    .simulate("change", { target: { value: newInputValue } });
  expect(setState).toHaveBeenCalledWith(newInputValue);
});

// sets up a spy on the useState hook to simulate state changes
// mounts the App component with Enzyme's shallow function
// and tests that the state is updated correctly when the input field value is changed.
