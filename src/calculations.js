function calculateLineTax(subTotal, isImported, isExempt) {
  let lineTax = isImported ? subTotal * 0.05 : 0
  lineTax = isExempt ? lineTax : lineTax + subTotal * 0.1
  return +(Math.ceil(lineTax * 20) / 20).toFixed(2)
}

function calculateSalesTaxTotal(lines) {
  let taxes = lines.map((line) => line.tax)
  taxes = taxes.reduce((prevValue, currValue) => prevValue + currValue, 0)
  return +parseFloat(taxes).toFixed(2)
}

module.exports = { calculateLineTax, calculateSalesTaxTotal }
