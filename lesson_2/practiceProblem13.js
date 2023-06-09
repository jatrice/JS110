let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

// sort the array so that the sub-arrays are ordered based on the sum of the
// odd numbers that they contain

arr.sort((a, b) => {
  const oddSumA = a.filter(num => num % 2 === 1)
    .reduce((sum, next) => sum + next, 0);

  const oddSumB = b.filter(num => num % 2 === 1)
    .reduce((sum, next) => sum + next, 0);

  return oddSumA - oddSumB;
});

console.log(arr);