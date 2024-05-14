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
    case 'delete':
      checkDelete()
      break;
    case 'percent':
      applyPercentage()
      break;
    case 'operand':
      updateValue(event)
      break;
    case 'operand zero':
      updateValue(event)
      break;
    case 'operator':
      if (lastValue) {
        compute(currentOperation)
      } else if (lastValue && currentValue === '') {
        updateValue(event)
      }
      currentOperation = event.target.value
      lastValue = currentValue
      currentValue = ''
      console.log('last value:', lastValue, 'current value:', currentValue, 'current op:', currentOperation)
      break;
    case 'compute':
      compute(currentOperation)
      lastValue = ''
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

function checkForDecimal(input) {
  if (input === '.' && currentValue.includes('.')) {
    return false
  }
  return true
}

function checkDelete() {
  if (typeof currentValue === 'number') {
    let stringValue = currentValue.toString()
    currentValue = stringValue.slice(0, -1)
    value.textContent = currentValue
  } else {
    currentValue = currentValue.slice(0, -1)
    value.textContent = currentValue
  }
}

function applyPercentage() {
  currentValue = currentValue * .01
  value.textContent = currentValue
}

function cleanOutput(result) {
  let stringResult = result.toString()
  let stringArr = stringResult.split('')
  if (stringArr.length > 3) {
    for (let i = stringArr.length - 3; i > 0; i -= 3) {
      stringArr.splice(i, 0, ',');
    }
    return stringArr.join('')
  }
}

function compute(operator) {
  if (!lastValue) return false
  switch (operator) {
    case '+':
      currentValue = Number(lastValue) + Number(currentValue)
      value.textContent = cleanOutput(currentValue)
      console.log(typeof currentValue)
      console.log('last value:', lastValue, 'current value:', currentValue)
      break;
    case '-':
      currentValue = Number(lastValue) - Number(currentValue)
      value.textContent = cleanOutput(currentValue)
      console.log('last value:', lastValue, 'current value:', currentValue)
      break;
    case 'x':
      currentValue = Number(lastValue) * Number(currentValue)
      value.textContent = cleanOutput(currentValue)
      console.log('last value:', lastValue, 'current value:', currentValue)
      break;
    case '/':
      currentValue = Number(lastValue) / Number(currentValue)
      value.textContent = cleanOutput(currentValue)
      console.log('last value:', lastValue, 'current value:', currentValue)
      break;
  }
}
