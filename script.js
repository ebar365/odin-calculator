
// start by creating functions
// and testing them in your browser’s console.
function add(a,b){
    return a+b;
};
function substract(a,b){
    return a-b;
};
function multiply(a,b){
    return a*b;
};
function divide(a,b){
    return a/b;
};

// Create three variables for each of the parts of a calculator operation.
// Create a variable for the first number, the operator, and the second number.

let firstNum=5;
let secondNum=2;
let operator='+';

// Create a new function operate that takes an operator and 2 numbers 
// and then calls one of the above functions on the numbers.

function operate(firstNum,secondNum,operator){
    switch (operator){
        case '+':
            console.log(add(firstNum,secondNum));
            break;
        case '-':
            console.log(substract(firstNum,secondNum));
            break;
        case '*':
            console.log(multiply(firstNum,secondNum));
            break;
        case '/':
           console.log(divide(firstNum,secondNum));
            break;
    };
};