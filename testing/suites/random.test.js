const sum = require('./../env/random/sum')

test('Add 1 + 2 equals 3', () => {
  expect(sum(1,2)).toBe(3)
})
