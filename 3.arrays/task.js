function compareArrays(arr1, arr2) {
  let result;

  result = (arr1.lenght === arr2.lenght) && arr1.every((elment, index) => element === arr2[index])

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr;

  resultArr = arr.filter((number) => number > 0) filter((number) =>number % 3 === 0) map((number) => number * 10)

  return resultArr; // array
}
