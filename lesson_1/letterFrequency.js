let statement = "The Flintstones Rock";

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

// charsInStatement.forEach(char => {
//   if (Object.keys(result).includes(char)) {
//     result[char] += 1;
//   } else {
//     result[char] = 1;
//   }
// });

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
});

console.log(result);