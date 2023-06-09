// Compute and display the total age of the male members of the family

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let totalMaleAge = Object.values(munsters)
  .filter(obj => obj.gender === 'male')
  .map(person => person.age)
  .reduce((accumulator, element) => accumulator + element, 0);

console.log(totalMaleAge);

// let memberDetails = Object.values(munsters);
// let totalMaleAge = 0;
//
// memberDetails.forEach(member => {
//   if (member.gender === 'male') {
//     totalMaleAge += member.age;
//   }
// });
