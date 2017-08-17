const add = require ("./app.js");

const test = (value1, value2) => {

  if (add(value1, value2) === (value1 + value2)) {
    console.log ("the answer is correct");
  } else {
    console.log ("There is an error with your addition function");
  }

};

test (2, 3);


  /*if (add (2, 3) === 5) {
  console.log ("the answer is correct");
} else {
    console.log ("there is an error with your addition function");
}*/


