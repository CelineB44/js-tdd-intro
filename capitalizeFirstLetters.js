// capitalizeFirst.js
const assert = require('assert');

// WRITE THE ACTUAL FUNCTION HERE

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, 'function');

// Check that capitalizeFirst accepts chaine caracter
assert.strictEqual(capitalizeFirst.length);

// Check that capitalizeFirst transforms "i am learning TDD" correctly
assert.strictEqual(capitalizeFirst(''), 'I Am Learning TDD');

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst('z'), 'Z');
// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(''), '');
