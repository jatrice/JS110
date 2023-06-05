let myNumbers = [1, 4, 3, 7, 2, 6];


// double numbers at odd positions in array

function doubleOddNumbers(numbers) {
  let doubledNums = []

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNum = numbers[counter];

    if (counter % 2 === 1) {
      doubledNums.push(currentNum * 2)
    } else {
      doubledNums.push(currentNum);
    }
  }

  return doubledNums;
}

console.log(doubleOddNumbers(myNumbers));