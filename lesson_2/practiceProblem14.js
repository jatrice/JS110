// return an array containing the colors of the fruits and the sizes of the
// vegetables. The sizes should be uppercase, and the colors should be
// capitalized

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

// => [["Red", "Green"], "MEDIUM", ["Red", "Green"], ["Orange"], "LARGE"]


let objArr = Object.values(obj).map(subObj => {
  if (subObj['type'] === 'fruit') {
    return subObj['colors'].map(str => {
      return str[0].toUpperCase() + str.slice(1);
    });
  } else {
    return subObj['size'].toUpperCase();
  }
});

console.log(objArr);