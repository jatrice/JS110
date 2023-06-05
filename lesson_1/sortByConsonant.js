// Input: Array of strings
// Output: Array of strings
//
// Explicit requirements:
//    - check strings for adjacent consonants
//    - create new array with order highest adjacent consonants
//    - if two strings same count of adj cons, maintain original order
//    - adjacent consonants, next to each other or seperated by space in adjacent words
//
// Implicit requirements:
//    - strings can contain multiple words
//    - Single consonants in a string do not affect sort order in comparison to strings with no consonants.
//      Only adjacent consonants affect sort order.
//
// Create function that loops over array, removes all the spaces in strings
// & checks how many adjacent consonants there are
// then rank them from highest to lowest and add them to a new array
//

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']


function countMaxAdjacentConsonants(string) {
  string = string.split(' ').join('');
  let count = 0;
  let tempString = '';
  for  (let i = 0; i <= string.length; i++) {
    let letter = string[i];

    if ('bcdfghjklmnpqrstvwxyz'.includes(letter)) {
      tempString += letter;
    } else {
      if (tempString.length > 1 && tempString.length > count) {count = tempString.length}
      tempString = '';
    }
  }

  return count;
}
function sortStringsByConsonants(strings){

  let sortedStrings = strings.sort((a, b) =>  countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a));

  return sortedStrings;
}

