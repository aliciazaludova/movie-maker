const budgetComparison = (selections) => {
  let enteredBudget = document.getElementById('entered-budget');
  // establish enteredBudget as number by multiplying it by 1
  // does input automatically not enter as a number, but a string?
  enteredBudget = enteredBudget * 1;
  // set the initial cost to 0 -- what will be the accumulated elements
  let allElementsCost = 0;
  // loop through the array of selections and for each one add its cost to allElementsCost
  selections.forEach((selection) => {
    allElementsCost += selection.cost; // this .cost -- is it the key from the json?
  });
  // need to calculate difference between entered budget and cost of all elements selected
  const costDifference = enteredBudget - allElementsCost;
  return costDifference;
};

module.exports = {
  budgetComparison,
};
