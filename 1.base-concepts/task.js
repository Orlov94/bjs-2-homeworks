"use strict";
function solveEquation(a, b, c) {
  const arr = [];
  const discriminant = Math.pow(b, 2) - 4 * a * c; 
  if (discriminant > 0) {   
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  }
  else if (discriminant === 0) {   
    let x1 = -b / (2 * a);
    arr.push(x1);
  }
  else if (discriminant < 0) {  
  }
  
  return arr; // array
}


// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }
