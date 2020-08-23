import React from "react";
import { shallow } from "enzyme";
import NotFound from "../../components/NotFound/NotFound";

test("should render Not Found correctly", () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper.find("h1").length).toBe(1);
  expect(wrapper.find("h1").text()).toBe("This is 404 page");

  expect(wrapper).toMatchSnapshot();
});
