let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

function selectFruit(produce) {
  let fruits = {};
  let fruitArr = Object.keys(produce);

  for (let count = 0; count < fruitArr.length; count++) {
    let currentKey = fruitArr[count];
    let currentValue = produce[currentKey]
    if (currentValue === 'Fruit') {
      fruits[currentKey] = currentValue;
    }
  }

  return fruits
}

