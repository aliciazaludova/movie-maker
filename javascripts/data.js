let categories = [];
let elements = [];

// functions to set into arrays
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
