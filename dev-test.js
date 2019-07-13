const Block = require('./block');

// Create a new instance of Block
const block = new Block("Time in milli", "Previous node hash", "This node hash", "Data");

// Log the test data
console.log(block.toString());