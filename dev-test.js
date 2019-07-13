const Block = require('./block');

// Create a new instance of Block
const testBlock = Block.mineBlock(Block.genesis(), 'chankruze gave $10,000 to nishant');

// Log the test data
console.log(testBlock.toString());