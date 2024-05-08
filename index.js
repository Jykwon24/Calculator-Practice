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
  if (checkForDecimal(currentInput)) {
    currentValue += currentInput
    value.textContent = currentValue
  }
}

function checkForDecimal(key) {
  let stringValue = currentValue.toString()
  let lastInput = stringValue.slice(-1)
  if (key === '.' && lastInput === '.') {
    return false
  }
  return true
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
  switch (operator) {
    case '+':
      currentValue = Number(lastValue) + Number(currentValue)
      value.textContent = currentValue
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



  console.log(currentOperation)
}
