const loadCategories = require('./xhr-categories');
const loadElements = require('./xhr-elements');

// required the files xhr-categories and xhr-elements as they are parsed below
// the functions below are the arguments passed through the calls for the xhr functions
// ultimately, load and fail functions are called in initializer

const whenCategoriesLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  console.log(categoryData);
};

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).elements;
  console.log(elementsData);
};

const ifLoadFails = function () {
  console.log('somethinnotrite');
};

const initializer = () => {
  loadCategories(whenCategoriesLoad, ifLoadFails);
  loadElements(whenElementsLoad, ifLoadFails);
};

module.exports = {
  initializer,
};
