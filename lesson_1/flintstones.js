let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Expected output
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

let flintstonesObj = {};

flintstones.forEach((name, index) => flintstonesObj[name] = index);

console.log(flintstonesObj);