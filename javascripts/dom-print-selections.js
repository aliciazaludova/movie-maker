// const budget = require('./budget');

const printSelections = (selections) => {
  const selectionsList = document.getElementById('selections-list');
  selectionsList.innerHTML = selections; // this is a string
};

const selectionsDomString = (selectionsArray) => {
  let selectionsString = '';
  selectionsArray.forEach((selection) => {
    selectionsString += `<p>${selection.name}: $${selection.cost}</p>`;
  });
  printSelections(selectionsString); // selectionsString is selections in the printSelections func
};

module.exports = selectionsDomString;
