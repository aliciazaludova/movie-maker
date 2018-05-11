// the data.js file stores things locally so you don't have to call the json file again and again. only the first time.
// getters and setters allow you to get these empty arrays and change them.
let categories = [];  //
let elements = [];
const selections = [];
let budget = 0;

// the array needs a function in order to pass stuff into it
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

// one at a time selections get added--each time box is checked
// push each one here because it's the setter--setting into array
// not redefining it, but adding to it. that is why above it is const = selections above
const setSelections = (selectionsObject) => {
  selections.push(selectionsObject);
};

// return the array
const getSelections = () => {
  return selections;
};

const setBudget = (budgetFromUser) => {
  budget = budgetFromUser;
};

const getBudget = () => {
  return budget;
};

module.exports = {
  setCategories,
  getCategories,
  setElements,
  getElements,
  setSelections,
  getSelections,
  setBudget,
  getBudget,
};
