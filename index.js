// const buttonSeven = document.querySelector('7')
const main = document.querySelector('main')
const operandButton = document.querySelectorAll('.operand')
const operatorButton = document.querySelectorAll('.operator')
const value = document.querySelector('.display')

let currentValue = ''
let valuesArr = []
let currentOperation = ''

function handleClick(event) {
  const targetEvent = event.target.className
  switch (targetEvent) {
    case 'operand':
      updateValue(event)
      break;
    case 'operator':
      selectOperator(event)
      break;
  }
  console.log('Value inside handleclick', currentValue)
  console.log('Operator inside handleclick:', currentOperation)
}

main.addEventListener('click', handleClick)

function updateValue(key) {
  let currentInput = key.target.value
  if (checkForDecimal(currentInput)) {
    currentValue += currentInput
    value.textContent = currentValue
  }
}

function checkForDecimal(key) {
  console.log(currentValue)
  let lastInput = currentValue.slice(-1)
  if (key === '.' && lastInput === '.') {
    return false
  }
  return true
}

function containValues() {
  valuesArr.push(Number(currentValue))
  console.log(valuesArr)
}

function selectOperator(event) {
  switch (event.target.value) {
    case '+':
      currentOperation = event.target.value
      containValues()
      break;
    case '=':
      compute()
      break;
  }
}

function compute() {
  console.log(currentOperation)
}
