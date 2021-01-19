
let age = prompt('How old are you?');
//why the arrow below does not run? because i never called it. or alternatively i can use immediately invoked function(()=>)() 
//()=> { return (age <= 18 ? alert('You are too young!') : alert('welcome!')); };
(() => { return (age <= 18 ? alert('You are too young!') : alert('welcome!')); })();
/*let validator = (i) => { return (age <= 18 ? alert('You are too young!') : alert('welcome!')); }
validator(age);
*/
/*
if (age <= 18) {
    alert('You are to young!');
} else { 
    alert('welcome!');
};*/
let firstNumber = prompt('Please enter a number:');
let operator = prompt('Please enter a math operator:');
let secondNumber = prompt('Please enter one more number:');
let myEquation = firstNumber + operator + secondNumber;
let result = eval(myEquation);
document.getElementById('answer').innerHTML = `${firstNumber} ${operator} ${secondNumber} = ${result}`;
