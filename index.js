// const buttonSeven = document.querySelector('7')
const main = document.querySelector('main')
const operandButton = document.querySelectorAll('.operand')
const operatorButton = document.querySelectorAll('.operator')
const value = document.querySelector('.display')

let currentValue = ''
let lastValue = ''
let currentOperation = ''

main.addEventListener('click', handleClick)

function handleClick(event) {
  const targetEvent = event.target.className
  switch (targetEvent) {
    case 'clear':
      value.textContent = '0'
      currentValue = ''
      lastValue = ''
      break;
    case 'operand':
      updateValue(event)
      break;
    case 'operand zero':
      updateValue(event)
      break;
    case 'operator':
      if (lastValue) {
        console.log('Current Value inside handleclick', currentValue)
        compute(currentOperation)
      }
      currentOperation = event.target.value
      lastValue = currentValue
      currentValue = ''
      console.log('Operator inside handleclick:', currentOperation)
      console.log('Last Value inside handleclick:', lastValue)
      break;
    case 'negative':
      checkForNegative(-Number(currentValue))
      break;
    case 'compute':
      compute(currentOperation)
      break;
  }

}

function updateValue(input) {
  let currentInput = input.target.value
  if (typeof currentValue === 'number') {
    currentValue = ''
    lastValue = ''
  }
  if (currentInput === '0' && currentValue === '') {
    return false
  }
  if (checkForDecimal(currentInput)) {
    currentValue += currentInput
    value.textContent = currentValue
  }
}

function checkFirstInput(input) {

}

function checkForDecimal(input) {
  let stringValue = currentValue.toString()
  let lastInput = stringValue.slice(-1)
  if (input === '.' && lastInput === '.' || input === '.' && currentValue.includes('.')) {
    return false
  }
  return true
  // for (let i = 0; i < currentValue.length; i++) {

  // }

}

function checkForNegative(input) {
  value.textContent = input
  console.log(input)
}

function selectOperator(event) {
  switch (event.target.value) {
    case '+':

      break;
    case '=':
      compute(currentOperation)
      break;
  }
}

function compute(operator) {
  let numConvertLast = lastValue
  let numConvertCurrent = currentValue
  switch (operator) {
    case '+':
      console.log('inside operator:', numConvertLast)
      // currentValue = Number(lastValue) + Number(currentValue)
      console.log(numConvertLast - numConvertCurrent)
      break;
    case '-':
      currentValue = Number(lastValue) - Number(currentValue)
      value.textContent = currentValue
      break;
    case '*':
      currentValue = Number(lastValue) * Number(currentValue)
      value.textContent = currentValue
      break;
    case '/':
      currentValue = Number(lastValue) / Number(currentValue)
      value.textContent = currentValue
      break;
  }
}
