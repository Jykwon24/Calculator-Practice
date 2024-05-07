// const buttonSeven = document.querySelector('7')
const main = document.querySelector('main')
const operandButton = document.querySelectorAll('.operand')
const operatorButton = document.querySelectorAll('.operator')
const display = document.querySelector('.display')

let currentValue = 0
let valuesArr = []
let currentOperation = ''
console.log(currentDisplay)
console.log(currentOperation)


function handleClick(event) {
  const targetEvent = event.target.className
  switch (targetEvent) {
    case 'operand':
      updateDisplay(event)
      break;
    case 'operator':
      selectOperator(event)
      break;

  }


  console.log('inside handleclick', currentValue)
}
// console.log(operandButton)
// operandButton.addEventListener('click', handleClick)

// main.forEach(item => {
//   item.addEventListener('click', handleClick)
// })

main.addEventListener('click', handleClick)

function updateDisplay(num) {
  currentDisplay = num.target.value
  display.textContent = currentValue
}

function containValues() {
  valuesArr.push(currentValue)
  console.log(valuesArr)
}

function selectOperator(event) {
  switch (event.target.value) {
    case '+':
      // console.log(event.target.value)
      // console.log(currentDisplay)
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
