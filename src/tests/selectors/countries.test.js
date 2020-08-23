import selectedCountries from "../../selectors/countries";

import testData from "../../data/countries.json";

test("should filter by text value", () => {
  const filters = {
    text: "eece",
  };

  const result = selectedCountries(testData.countries, filters);
  expect(result).toEqual([testData.countries[1]]);
});
