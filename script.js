// const numbers = document.querySelectorAll('.numbers');
// const display = document.querySelector('.display span');
// const signs = document.querySelectorAll('.sign');
// const negative = document.querySelector('.negative');
// const percent = document.querySelector('.percent');
// const equals = document.querySelector('.equals');
// const decimal = document.querySelector('.decimal');
// const clear = document.querySelector('.clear');


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
//     if(firstValue != "" && secondValue != "" && sign != ""){
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
//     if(firstValue != "" && secondValue != "" && sign != ""){
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