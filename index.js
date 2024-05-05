// const buttonSeven = document.querySelector('7')
const operandButton = document.querySelectorAll('.operand')
const display = document.querySelector('.display')

let currentDisplay = 0

function handleClick(e) {
  console.log(e.target.value)
  display.textContent = e.target.value
}
console.log(operandButton)
// operandButton.addEventListener('click', handleClick)

operandButton.forEach(item => {
  item.addEventListener('click', handleClick)
})
