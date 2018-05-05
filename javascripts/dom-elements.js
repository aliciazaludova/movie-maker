const elementsDiv = document.getElementById('elements');
const data = require('./data');

let categories = [];
let elements = [];

const domString = (cats, els) => {
  let domString = '';
  cats.forEach((category) => {
    domString += `<h3>${category.name}</h3>`;
    els.forEach((element) => {
      if (category.id === element.categoryid) {
        domString += `<h4>${element.name}</h4>`;
      }
    });
  });
  return domString;
};

// put into the empty arrays categories and elements
const printToDom = () => {
  categories = data.getCategories();
  elements = data.getElements();
  elementsDiv.innerHTML = domString(categories, elements);
};

module.exports = printToDom;
