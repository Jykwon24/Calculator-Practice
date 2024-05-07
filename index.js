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

function updateValue(num) {
  currentValue += num.target.value
  value.textContent = currentValue
}

function containValues() {
  valuesArr.push(currentValue)
  console.log(valuesArr)
}

function selectOperator(event) {
  switch (event.target.value) {
    case '+':
      currentOperation = event.target.value
      break;
    case '=':
      compute()
      break;
  }
}



function compute() {
  console.log(currentOperation)
}
