export const getBase64 = (file, callback) => {
  const reader = new FileReader();

  reader.addEventListener("load", () => callback(reader.result));

  reader.readAsDataURL(file);
};

export const getAverage = (population) => {
  const total = population.reduce((acc, c) => acc + c, 0);
  return total / population.length;
};
