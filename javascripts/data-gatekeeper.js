const callCategories = require('./xhr-categories');

// REQUIRED THE FILE XHR-CATEGORIES AS IT'S THE XHR CALL FUNCTION
// BELOW WRITE THE FUNCTIONS THAT WILL BE THE ARGUMENTS PASSED THROUGH WHEN CALLED.
// CALLED IN THE INITIALIZER FUNCTION BELOW

const whenCategoriesLoad = function () {
  const categoryData = JSON.parse(this.responseText).categories;
  console.log(categoryData);
};

const ifLoadFails = function () {
  console.log('somethinnotrite');
};

const initializer = () => {
  callCategories(whenCategoriesLoad, ifLoadFails);
};

module.exports = {
  initializer,
};
