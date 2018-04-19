const loadCategories = require('./xhr-categories');
const loadElements = require('./xhr-elements');
const printCategoriesToDom = require('./dom-main');

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).elements;
  console.log(elementsData);
};

const whenCategoriesLoad = function () {
  const categoriesData = JSON.parse(this.responseText).categories;
  console.log(categoriesData);
  printCategoriesToDom(categoriesData);
};

const errorFunction = function () {
  console.error('i be broke');
};

// require it in main.js
const initializer = () => {
  loadCategories(whenCategoriesLoad, errorFunction);
  loadElements(whenElementsLoad, errorFunction);
};

module.exports = {
  initializer,
};
