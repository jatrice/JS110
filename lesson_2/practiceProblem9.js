let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

// return a new array with the same structure, but with the values in
// each subarray ordered -- alphabetically or numerically as appropriate
// -- in ascending order

let newArr = arr.map(subArr => {
  if (typeof subArr[0] === 'number') {
    return subArr.slice().sort((a, b) => a - b);
  } else {
    return subArr.slice().sort();
  }
});

console.log(arr);
console.log(newArr);