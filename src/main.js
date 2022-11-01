function process() {
  let lines = document.querySelector('#input').value.split('\n')
  lines = convertLines(lines)
  printOutput(lines)
}

const calculateButton = document.querySelector('#calculate')
calculateButton.addEventListener('click', process)

function convertLines(lines) {
  return lines.map((line) => {
    const fields = line.split(' ')
    const noTax = new RegExp(/pill|chocolate|book/)

    const quantity = fields[0]
    const description = fields.slice(1, -2).join(' ')
    const unitPrice = +fields.slice(-1).join()
    const subTotal = quantity * unitPrice

    const isImported = description.indexOf('import') > -1
    const isExempt = Array.isArray(description.match(noTax))
    const tax = calculateLineTax(subTotal, isImported, isExempt)

    return {
      quantity,
      description,
      unitPrice,
      subTotal,
      tax
    }
  })
}

function printOutput(lines) {
  const output = document.querySelector('#output')
  output.innerHTML = ''
  const salesTaxVal = calculateSalesTaxTotal(lines)
  let totalVal = 0

  lines.forEach((line) => {
    const lineOutput = document.createElement('p')
    const lineTotal = (line.subTotal + line.tax).toFixed(2)
    totalVal += line.subTotal + line.tax
    lineOutput.innerText = `${line.quantity} ${line.description}: ${lineTotal}`
    output.appendChild(lineOutput)
  })

  const salesTax = document.createElement('p')
  salesTax.innerText = `Sales Taxes: ${salesTaxVal}`
  output.appendChild(salesTax)

  const total = document.createElement('p')
  total.innerText = `Total: ${totalVal.toFixed(2)}`
  output.appendChild(total)
}
