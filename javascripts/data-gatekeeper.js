const loadCategories = require('./xhr-categories');
const loadElements = require('./xhr-elements');
const data = require('./data');
const domElements = require('./dom-elements');
const addCheckListener = require('./events');

// required the files xhr-categories and xhr-elements as they are parsed below
// the functions below are the arguments passed through the calls for the xhr functions
// ultimately, load and fail functions are called in initializer

const whenCategoriesLoad = function () {
  // this.responseText IS the json file. it is actually a string until you parse it. parsing it turns it into an object. categoryData now holds it as an object. in its file it remains the string. what you get back is an object. categories is the key. writing .categories gives you the value of categories as an array now.
  const categoryData = JSON.parse(this.responseText).categories;
  // data is the variable that holds anything you export from data.js
  data.setCategories(categoryData);
  // the loadElements function is probably calling the getCategories
  // took this out of initializer and put here in load function
  // it goes here because you are saying don't start the loadElements load until the whenCategoriesLoad function has started loading
  // in console go to networks to see order of loading. you can see that now loadElements loads just after whenCategoriesLoad
  loadElements(whenElementsLoad, ifLoadFails);
};

const whenElementsLoad = function () {
  const elementsData = JSON.parse(this.responseText).elements;
  data.setElements(elementsData);
  domElements();
  addCheckListener();
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
