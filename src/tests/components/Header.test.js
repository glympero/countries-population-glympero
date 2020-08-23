import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header/Header";

test("should render header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("h1").length).toBe(1);
  expect(wrapper.find("h1").text()).toBe("Countries");

  expect(wrapper).toMatchSnapshot();
});
