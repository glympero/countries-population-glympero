const getVisibleCountries = (countries, region) => {
  return countries.filter((item) => item.region === region);
};

export default getVisibleCountries;
