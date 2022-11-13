let firstValue = "";
let secondValue = "";
let displayValue = '0';
let refresh = false;
let comma = '';

const numbers = document.querySelectorAll('.numbers');
const display = document.querySelector('.display span');
const signs = document.querySelectorAll('.sign');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
const equals = document.querySelector('.equals');
const decimalPoint = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const commas = document.querySelectorAll('#comma');

window.addEventListener('keydown', keyInput);
negative.addEventListener('click', outputNegative);
percent.addEventListener('click',outputPercent);
decimalPoint.addEventListener('click', outputDecimal);
clear.addEventListener('click', clearDisplay);
equals.addEventListener('click', evaluate);

numbers.forEach((button) =>
    button.addEventListener('click', () => outputNumber(button.textContent)));

signs.forEach((button) =>
    button.addEventListener('click', () => operation(button.textContent)));

function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function divide(a,b) {
    return a / b; 
}

function multiply(a,b) {
    return a * b;
}

function operate(op,a,b) {
    a = Number(a);
    b = Number(b);
    switch (op){
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            if (b === 0) return null
            else return divide(a, b);
        default:
            return null;
    }
}

function expo(x,f) {
    return Number.parseFloat(x).toExponential(f);
}

function outputNumber(number) {
    if (display.textContent === '0' || refresh)
        refreshScreen();
    display.textContent += number;
    checkDisplayLength();
}

function outputDecimal() {
    if (refresh) refreshScreen();
    if (display.textContent === '')
        display.textContent = '0'
    if (display.textContent.includes('.'))  return
        display.textContent += '.'
}

function outputPercent() {
    operation();
    if(display.textContent != '') {
        display.textContent = display.textContent/100;
    }
}

function outputNegative() {
    operation();
    if(display.textContent != '') {
        display.textContent = -display.textContent;
    }
}

function operation(operator) {
    if (displayValue !== '0') evaluate()
    firstValue = display.textContent;
    displayValue = operator;
    refresh = true;
}
  
function evaluate() {
    if (displayValue === '0' || refresh) return
    if (displayValue === '÷' && display.textContent === '0') {
        return display.textContent = "Nope";
    }
    secondValue = display.textContent;
    display.textContent = roundOutput(operate(displayValue, firstValue, secondValue));
    checkDisplayLength();
}

function roundOutput(number) {
    return Math.round(number * 1000) / 1000;
}

function checkDisplayLength() {
    if(display.textContent.length > 10 || displayValue.length > 10) {
        display.textContent = expo(display.textContent, 4);
        display.style.fontSize = '65px';
    
    } else if(display.textContent.length >= 9 || displayValue.length >= 9) {
        display.textContent = display.textContent.substring(0,9);
        display.style.fontSize = '65px';
    
    } else if(display.textContent.length >= 8 || displayValue.length >= 8){
        display.style.fontSize = '75px';

    } else if(display.textContent.length >= 7 || displayValue.length >= 7){
        display.style.fontSize = '85px';

    } else if(display.textContent.length <= 6 || displayValue.length <= 6){
        display.style.fontSize = '100px';

    }
        
}
  
function keyInput(e) {
    if (e.key === '.') outputDecimal();
    if (e.key === '=' || e.key === 'Enter') evaluate();
    if (e.key >= 0 && e.key <= 9) outputNumber(e.key);
    if (e.key === 'Escape') clearDisplay();
    if (e.key === 'Backspace') deleteInput();
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      operation(convertOperator(e.key));
}

function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'; 
    if (keyboardOperator === '*') return '×'; 
    if (keyboardOperator === '-') return '-'; 
    if (keyboardOperator === '+') return '+'; 
}

function deleteInput() {
    display.textContent = display.textContent
      .toString()
      .slice(0, -1);
    if(display.textContent === '') {
        display.textContent = displayValue;
        clearDisplay();
    }
}

function refreshScreen() {
    display.textContent = '';
    refresh = false;
}

function clearDisplay() {
    display.style.fontSize = '100px';
    display.textContent = '0';
    firstValue = "";
    secondValue = "";
    displayValue = '0';
}



// let firstValue = "";
// let isFirstValue = false;
// let secondValue = "";
// let isSecondValue = false;
// let sign = "";
// let displayValue = '0';


// for (let i = 0; i < numbers.length; i++) {
//     numbers[i].addEventListener('click', (e) => {
//         let atr = e.target.getAttribute('value');
//         if(isFirstValue === false) {
//             getFirstValue(atr)
//         }
//         if(isSecondValue ==  false) { 
//             getSecondValue(atr);
//         } 
//     })
// }

// function getFirstValue(el) {
//     display.innerHTML = "";
//     firstValue += el;
//     display.innerHTML = firstValue;
//     firstValue = +firstValue;
// }

// function getSecondValue(el) {
//     if(firstValue != "" && sign != "") {
//         secondValue += el;
//         display.innerHTML = secondValue;
//         secondValue = +secondValue;
//     }
// }

// function getSign() {
//     for(let i = 0; i < signs.length; i++) {
//         signs[i].addEventListener('click', (e) => {
//             sign = e.target.getAttribute('value');
//             isFirstValue = true;
//         })
//     }
// }
// getSign();

// function inputDecimal(dot) {
//     if(!displayValue.includes(dot)) {
//         displayValue += dot;
//     } 
// }

// decimal.addEventListener('click', () => {
//     inputDecimal(decimal.value);
// })

// equals.addEventListener('click', () => {
//     display.innerHTML = "";
//     if(sign === "+") {
//         displayValue = firstValue + secondValue;
//     } else if (sign === "-") {
//         displayValue = firstValue - secondValue;
//     } else if (sign === "×") {
//         displayValue = firstValue * secondValue;
//     } else if (sign === "÷") {
//         displayValue = firstValue / secondValue;
//         if(firstValue == '0') {
//             displayValue = "Nah";
//         } else if(secondValue == '0'){
//             displayValue = "Nope"
//         } else {
//             displayValue = firstValue / secondValue;
//         }
//     } 
//     display.innerHTML = displayValue;
//     displayValue = firstValue;
//     secondValue = "";

// })

// negative.addEventListener('click', () => {
//     display.innerHTML = ""; 
//     if(firstValue != "") {
//         displayValue = -firstValue;
//         firstValue = displayValue;
//     }
//     if(firstValue != "" && secondValue != "" && signs != ""){
//         displayValue = -displayValue;
//     }

//     display.innerHTML = displayValue;
// })

// percent.addEventListener('click', () => {
//     display.innerHTML = ""; 
//     if(firstValue != "") {
//         displayValue = firstValue / 100;
//         firstValue = displayValue;
//     }
//     if(firstValue != "" && secondValue != "" && signs != ""){
//         displayValue = displayValue / 100;
//     }

//     display.innerHTML = displayValue;
// })

// clear.addEventListener('click', () => {
//     display.innerHTML = '0';

//     firstValue = "";
//     isFirstValue = false;
//     secondValue = "";
//     isSecondValue = false;
//     sign = "";
//     displayValue = '0';
// })