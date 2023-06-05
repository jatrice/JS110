let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};



let combinedAge = Object.values(ages).reduce((agesSum, currentAge) => agesSum + currentAge, 0);
console.log(combinedAge);

// let minAge = Object.values(ages).sort((a, b) => a - b);
// console.log(minAge[0]);

let agesArr = Object.values(ages);
console.log(Math.min(...agesArr));  // => 10
