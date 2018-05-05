let categories = [];
let elements = [];

// function to set parsed json into array
const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

const getCategories = () => {
  return categories;
};

const setElements = (elementsArray) => {
  elements = elementsArray;
};

const getElements = () => {
  return elements;
};

module.exports = {
  setCategories,
  getCategories,
  setElements,
  getElements,
};
