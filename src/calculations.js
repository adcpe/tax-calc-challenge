function calculateLineTax(subTotal, isImported, isExempt) {
  let taxPercent = 0
  if (isImported) taxPercent += 0.05
  if (!isExempt) taxPercent += 0.1
  taxPercent = taxPercent.toFixed(2)
  return +(Math.ceil(subTotal * taxPercent * 20) / 20).toFixed(2)
}

function calculateSalesTaxTotal(lines) {
  let taxes = lines.map((line) => line.tax)
  taxes = taxes.reduce((prevValue, currValue) => prevValue + currValue, 0)
  return +parseFloat(taxes).toFixed(2)
}

module.exports = { calculateLineTax, calculateSalesTaxTotal }
