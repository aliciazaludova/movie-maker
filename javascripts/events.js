const data = require('./data');
const printSelectionsToDom = require('./dom-print-selections');

const addBudgetListener = () => {
  const budgetButton = document.getElementById('budget-submit-button');
  console.log(budgetButton);
  budgetButton.addEventListener('click', getBudget);
  // the event listener on the button selects the input and takes the value
};

const getBudget = (e) => {
  e.preventDefault(); // prevents page refresh that is default of form submission
  const getBudgetValue = document.getElementById('entered-budget').value;
  data.setBudget(getBudgetValue);
  const budget = data.getBudget();
  const budgetOutputDiv = document.getElementById('budget-amount');
  budgetOutputDiv.innerHTML = `$${budget}`; // need to ask about this
};

// nothing is passed through because doesn't need input; getting element happens anyway
// don't want this function to do anything but add event listener to each checkbox
const addCheckListener = () => {
  const checkBoxes = document.getElementsByClassName('check-box');
  // every element w 'check-box' ID is now saved in checkedBoxes; console log and see
  console.log(checkBoxes); // this shows in the console the HTML collection; it is not an array because it is an HTML collection and does not say 'Array' there
  // now loop through the collection and add event listener to each one
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', checkedEvents);  // checkEvent is function written below
  }
};

// this is the callback; the event listener is activated here after click
const checkedEvents = (e) => {
  console.log('e.target:', e.target);
  // store elements into variable
  // below getting all the elements from the data and storing them in elements const
  const elements = data.getElements();
  for (let j = 0; j < elements.length; j++) {
    if (elements[j].id === e.target.id) {  // if json element matches checked one
      // setSelections is taking the object (elements[j]) and adding it to the array that exists in data
      data.setSelections(elements[j]); // the .push() is in setSelections function in data
      console.log(data.getSelections());
      data.setElementCost(elements[j].cost);
    };
  };
  printSelectionsToDom(data.getSelections());
};

module.exports = {
  addCheckListener,
  addBudgetListener,
};
