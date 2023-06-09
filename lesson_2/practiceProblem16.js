// write some code that defines an object where the key is the first
// item in each subarray, and the value is the second.

let arr = [['a', 1], ['b', 'two'], ['sea', {c: 3}], ['D', ['a', 'b', 'c']]];

// expected value of object
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }

// let obj = {};
// arr.forEach(subArr => {
//   const key = subArr[0];
//   const value = subArr[1];
//
//   obj[key] = value;
// });

let obj = Object.fromEntries(arr);

console.log(obj);