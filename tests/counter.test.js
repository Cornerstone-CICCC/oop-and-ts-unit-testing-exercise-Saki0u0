// Create two test cases for incrementing and decrementing a number
// Test case 1: counter(10, 'increment') will eventualy return 10
// Test case 2: counter(10, 'decrement') will eventually return 0
// Both test cases need to pass
// HINT: Use the jest `resolves` matcher so that it is easier to work with async functions

const counter = require('../src/counter')

test('counter will eventually return 10', async () => {
  await expect(counter(5, 'increment')).resolves.toBe(5);
}, 10000); 

test('counter will eventually return 0', async () => {
  await expect(counter(5, 'decrement')).resolves.toBe(0);
}, 10000);

