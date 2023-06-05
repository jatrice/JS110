let myNumbers = [1, 4, 3, 7, 2, 6];
multiply(myNumbers, 3); // => [3, 12, 9, 21, 6, 18]

function multiply(numbers, multiplier) {
  let multipliedNum = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNum = numbers[counter];

    multipliedNum.push(currentNum * multiplier)
  }

  return multipliedNum;
}

console.log(multiply(myNumbers, 3));