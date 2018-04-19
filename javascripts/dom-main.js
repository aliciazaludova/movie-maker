const categoriesOutputDiv = document.getElementById('categories');

console.log(categoriesOutputDiv);

const domStrang = (categories) => {
  let domString = '';
  categories.forEach((category) => {
    domString += `<div class="col-sm-12">`;
    domString +=   `<h3>${category.name}</h3>`;
    domString += `</div>`;
  });
  return domString;
};

const printCategoriesToDom = (categories) => {
  categoriesOutputDiv.innerHTML = domStrang(categories);
};

module.exports = printCategoriesToDom;
