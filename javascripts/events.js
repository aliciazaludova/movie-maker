const data = require('./data');

// nothing is passed through because it doesn't need input; getting the element happens anyway
// don't want this function to do anything but add event listener
const addCheckListener = () => {
  const checkBoxes = document.getElementsByClassName('check-box');
  // every element w 'check-box' ID is now saved in checkedBoxes; console log and see
  console.log(checkBoxes); // this shows in the console the HTML collection; it is not an array because it is an HTML collection and does not say 'Array' there
  // now loop through and add event listener to each one
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', checkEvent);
  }
};

// this is the callback; the event listener
const checkEvent = (e) => {
  console.log('e.target:', e.target);
  // store elements into variable
  // the below is getting all the elements from the data and storing them in elements
  const elements = data.getElements();
  for (let j = 0; j < elements.length; j++) {
    if (elements[j].id === e.target.id) {
      // setSelections is taking the object and adding it to the array that exists in data
      data.setSelections(elements[j]);
      console.log(data.getSelections());
    }
  }
};

// now have list of all selections. loop through them and add the cost of each together

// const addSelections = () => {
//   for (let q = 0; q < )
// }

// now that have element w the cost find way to

// const costCounter

// // apply the cost of the element clicked to the cost counter
// const applyElementCost =

module.exports = addCheckListener;
