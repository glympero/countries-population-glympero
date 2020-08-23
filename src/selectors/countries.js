const getVisibleCountries = (countries, filters) => {
  const { text, sortBy } = filters;

  const filteredCountries = countries.filter((country) => {
    const textMatched =
      typeof text === "string" &&
      country.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;

    return textMatched;
  });

  if (sortBy) {
    return filteredCountries.sort((a, b) => {
      if (sortBy === "ASC") {
        return a.name === b.name ? 0 : a.name > b.name ? 1 : -1;
      } else if (sortBy === "DSC") {
        return a.name === b.name ? 0 : a.name < b.name ? 1 : -1;
      }
      return true;
    });
  }
  return filteredCountries;
};

export default getVisibleCountries;
