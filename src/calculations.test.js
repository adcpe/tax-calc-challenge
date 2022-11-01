const { calculateLineTax, calculateSalesTaxTotal } = require('./calculations')

test('calculate tax of an imported, exempt good', () => {
  expect(calculateLineTax(10, true, true)).toBe(0.5)
})

test('calculate tax of an exempt good', () => {
  expect(calculateLineTax(2, false, true)).toBe(0)
})

test('calculate tax of an imported good', () => {
  expect(calculateLineTax(5, true, false)).toBe(0.75)
})

test('add taxes', () => {
  expect(calculateSalesTaxTotal([{ tax: 0.345 }, { tax: 1.0675 }])).toBe(1.41)
})
