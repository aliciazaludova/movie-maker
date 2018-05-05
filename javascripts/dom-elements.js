const elementsDiv = document.getElementById('elements');
const data = require('./data');

let categories = [];
let elements = [];

const domString = (cats, els) => {
  let domString = '';
  cats.forEach((category) => {
    domString += `<h3>${category.name}</h3>`;
    domString += `<div class="row">`;
    els.forEach((element) => {
      if (category.id === element.categoryid) {
        domString += `<div class="col-sm-2">`;
        // domString += `<div class="checkbox">`;  // sets name next to checkbox instead of below
        domString += `<input id="${element.id}" class="check-box" type="checkbox" value="">`;
        domString +=  `<label class="element-label" for="${element.id}">${element.name}`;
        domString += `</label>`;
        // domString += `</div>`;
        domString += `</div>`;
      }
    });
    domString += `</div>`;
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
