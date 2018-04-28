const categoriesOutputDiv = document.getElementById('categories');
const elementsOutputDiv = document.getElementById('elements');

console.log(categoriesOutputDiv);

const domStrang = (categories) => {
  let domString = '';
  categories.forEach((category) => {
    domString += `<div class="col-md-7">`;
    domString +=   `<h3>${category.name}</h3>`;
    domString += `</div>`;
  });
  return domString;
};

const printCategoriesToDom = (categories) =>
{
  categoriesOutputDiv.innerHTML = domStrang(categories);
};

const domElementsStrang = (elements) => {
  let domString = '';
  elements.forEach((element) => {
    domString += `<div class="col-md-7">`;
    domString +=   `<h3>${element.name}</h3>`;
    domString += `</div>`;
  });
  return domString;
};

const printElementsToDom = (elements) => {

  elementsOutputDiv.innerHTML = domElementsStrang(elements);
};

module.exports =
{
  printCategoriesToDom,
  printElementsToDom,
};
