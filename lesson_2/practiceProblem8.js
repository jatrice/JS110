let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

// Using the forEach method, write some code to output all vowels from the
// strings in the arrays

Object.values(obj).forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if ('aeiou'.includes(char)) {
        console.log(char);
      }
    });
  });
});