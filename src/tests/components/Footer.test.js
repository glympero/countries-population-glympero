import React from "react";
import { shallow } from "enzyme";
import Footer from "../../components/Footer/Footer";

test("should render footer correctly", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find("Link").length).toBe(2);
  expect(wrapper.find("Link").first().prop("to")).toBe("/");
  expect(wrapper.find("Link").at(1).prop("to")).toBe("/chart");

  expect(wrapper).toMatchSnapshot();
});
