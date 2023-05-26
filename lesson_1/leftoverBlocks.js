// Input: Number of cubes to build structure
// Output: Number of cubes left
//
// - Top layer is a single block
// - Block in upper layer must be supported by four blocks in lower layer
// - One block in lower layer can support more than one block
// - No gaps
//
// Implicit requirement:  layer number correlates with blocks in a layer
// (layer number x layer number => number of blocks in layer)
//
//   1   -1			           - - -
//   4   -2		        - - -     - - -
//   9   -3		   - - -     - - -    - - -

console.log(calculateLeftoverBlocks(0) === 0); //true
console.log(calculateLeftoverBlocks(1) === 0); //true
console.log(calculateLeftoverBlocks(2) === 1); //true
console.log(calculateLeftoverBlocks(4) === 3); //true
console.log(calculateLeftoverBlocks(5) === 0); //true
console.log(calculateLeftoverBlocks(6) === 1); //true
console.log(calculateLeftoverBlocks(14) === 0); //true

// - Perhaps use a nested array to represent the structure?
// - Each subarray could represent a layer

// 1. Start with:
// - A count of the 'number of blocks remaining' equal to the input
// - A count of the 'current layer' equal to 0
// 2. Calculate the number for the 'next layer' by adding 1 to the value for the 'current layer'
// 3. Using the number for the 'next layer', calculate the 'number of blocks required' to build that layer, by multiplying the number by itself
// 4. Determine if the 'number of blocks remaining' is greater than or equal to the 'number of blocks required' to build the layer
// - If it is:
//   - Subtract the 'number of blocks required' from the 'number of blocks remaining'
// - Increment the 'current layer' by 1
// - Go back to Step 2
// - If it isn't:
// - Return the 'number of blocks remaining'

function calculateLeftoverBlocks(blocks) {
  let leftoverBlocks = blocks;
  let currentLayer = 0;

  let requiredBlocks = (currentLayer + 1)**2;

  while (leftoverBlocks >= requiredBlocks) {
    leftoverBlocks -= requiredBlocks;
    currentLayer += 1;
    requiredBlocks = (currentLayer + 1)**2;
  }

  return leftoverBlocks;
}
