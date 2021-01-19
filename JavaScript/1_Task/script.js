
let age = prompt('How old are you?');
//i have to learn the ternary use cases better
//()=> { age <= 18 ? alert('You are too young!') : alert('welcome!') };
if (age <= 18) {
    alert('You are to young!');
} else { 
    alert('welcome!');
};
let firstNumber = prompt('Please enter a number:');
let operator = prompt('Please enter a math operator:');
let secondNumber = prompt('Please enter one more number:');
let myEquation = firstNumber + operator + secondNumber;
let result = eval(myEquation);
document.getElementById('answer').innerHTML = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
