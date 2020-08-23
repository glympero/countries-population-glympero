const getVisibleRegions = (countries) => {
  const unique = [...new Set(countries.map(item => item.region))].sort().filter(item => item !== '');
  return unique.map(item => {
    return {
      label: item,
      value: item
    }
  })
};

export default getVisibleRegions;
