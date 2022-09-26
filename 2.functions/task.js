// Задание 1
"use strict";
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for(let i = 0; i < arr.lenght; i++){
    if(arr[i] > max)
    max = arr[i];

    if(arr[i] < min)
    min = arr[i];

    sum = arr[i] + sum;

  }

  avg = Number((sum / arr.lenght).toFixed(2))

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
  for(let i = 0; i < arr.lenght; i++){
    sum = sum + arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for(let i = 0; i < arrOfArr.lenght; i++){
    const calculatingElements = func(arrOfArr[i]);
    if(calculatingElements > max){
      max = calculatingElements;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let res = getArrayParams(arr);
  return Math.abs(res.max - res.min);
}
