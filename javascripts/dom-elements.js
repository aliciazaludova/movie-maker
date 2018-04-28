const data = require('./data');
// const events = require('./events');

const elementDiv = document.getElementById('elements');

let categories = [];
let elements = [];

const domString = (categoriesHere, elementsHere) => {
  let domString = '';
  categoriesHere.forEach((category) => {
    domString += `<div class="container-fluid">`;
    domString += `<div class="col-xs-12">`;
    domString += `<h2>${category.name}</h2>`;
    elementsHere.forEach((element) => {
      if (category.id === element.categoryId) {
        domString += `<div class="col-xs-4">`;
        domString += `<div class="checkbox">`;
        domString += `<label>`;
        domString += `<input id="${element.id}" class="check" type="checkbox" value="" disabled>${element.name}`;
        domString += `</label>`;
        domString += `</div>`;
        domString += `</div>`;
      };
    });
    domString += `<div>`;
    domString += `</div>`;
  });
  return domString;
};

const printElementsToDom = () => {
  categories = data.getCategories();
  elements = data.getElements();
  elementDiv.innerHTML = domString(categories, elements);
};

module.exports = printElementsToDom;
