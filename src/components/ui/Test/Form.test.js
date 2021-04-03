// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// test file
import React from "react";
import { shallow, mount, render } from "enzyme";
import Form from "../../Form";

describe("<Form />", () => {
  it("Should be rendered", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Has something?", () => {
    const wrapper = shallow(<Form />);
    const res = wrapper.find("#lol");
    console.log(wrapper.debug());
    expect(res.text()).toBe(" Haidren! ");
    // expect(wrapper.find("#lol")).toContain("Todo List in Heids");
  });
});
