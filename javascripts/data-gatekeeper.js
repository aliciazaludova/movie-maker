const loadCategories = require('./xhr-categories');
const loadElements = require('./xhr-elements');
const data = require('./data');
const domElements = require('./dom-elements');

// required the files xhr-categories and xhr-elements as they are parsed below
// the functions below are the arguments passed through the calls for the xhr functions
// ultimately, load and fail functions are called in initializer

const whenCategoriesLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  data.setCategories(categoryData);
  loadElements(whenElementsLoad, ifLoadFails); // took this out of initializer and put here in load function
};

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).elements;
  data.setElements(elementsData);
  domElements();
};

const ifLoadFails = function () {
  console.log('somethinnotrite');
};

const initializer = () => {
  loadCategories(whenCategoriesLoad, ifLoadFails);
};

module.exports = {
  initializer,
};
