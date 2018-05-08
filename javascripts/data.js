// the data.js file stores things locally so you don't have to call the json file again and again. only the first time.
// getters and setters allow you to get these empty arrays and change them.
let categories = [];  //
let elements = [];
const selections = [];

// sets up the array to pass stuff into it
const setCategories = (categoriesArray) => {
  categories = categoriesArray;
};

// return the array
const getCategories = () => {
  return categories;
};

const setElements = (elementsArray) => {
  elements = elementsArray;
};

const getElements = () => {
  return elements;
};

// one at a time selections get added
// push them here because it's the setter
// not redefining it, but adding to it. that is why 'const' above
const setSelections = (selectionsObject) => {
  selections.push(selectionsObject);
};

// return the array
const getSelections = () => {
  return selections;
};

module.exports = {
  setCategories,
  getCategories,
  setElements,
  getElements,
  setSelections,
  getSelections,
};
