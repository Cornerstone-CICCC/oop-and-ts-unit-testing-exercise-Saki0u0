// Create two test cases for converting between celsius and fahrenheit
// Test case 1: Converting 30 deg celsius will return 86 deg fahrenheit
// Test case 2: Converting 104 deg fahrenheit will return 40 deg celsius
// Both test cases need to pass

const Converter = require ('../src/convertTemp')

const convert = new Converter()

test('Converting 30 deg celsius will return 86 deg fahrenheit', () => {
  expect(convert.convertToCelsius(86)).toBe(30)
})

test('Converting 104 deg fahrenheit will return 40 deg celsius', () => {
  expect(convert.convertToCelsius(104)).toBe(40)
})
