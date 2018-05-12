// the data.js file stores things locally so you don't have to call the json file again and again. only the first time.
// getters and setters allow you to get these empty arrays and change them.
let categories = [];  //
let elements = [];
const selections = [];
let budget = 0;
let cost = 0;

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

// budget set above to 0 -- this sets it to whatever budget the user enters
const setBudget = (budgetFromUser) => {
  budget = budgetFromUser;
};

const getBudget = () => {
  return budget;
};

// establishing cost as a number -- multiplying by 1 does this i think
const setElementCost = (movieCost) => {
  cost += movieCost * 1;
};

const getElementCost = () => {
  return cost;
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
  setElementCost,
  getElementCost,
};
