
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
    if (b==0){
        return "error"
    } else{
        return a/b; 
    }
    
};

// Create three variables for each of the parts of a calculator operation.
// Create a variable for the first number, the operator, and the second number.

let firstNum=0;
let secondNum=2;
let operator='+';

// Create a new function operate that takes an operator and 2 numbers 
// and then calls one of the above functions on the numbers.

function operate(firstNum,secondNum,operator){
    switch (operator){
        case '+':
            return (add(firstNum,secondNum));
            
        case '-':
            return (substract(firstNum,secondNum));
            
        case '*':
            return (multiply(firstNum,secondNum));
            
        case '/':
            return (divide(firstNum,secondNum));    
    };
};
// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use 
// in the next step.
const display=document.querySelector(".row1");

let switc1=0;
let switc2=0;
let temp=0;

const numbers=document.querySelectorAll(".number");
numbers.forEach((number)=>{
    number.addEventListener("click",()=>{
        if (switc2==0){
            display.textContent=display.textContent+number.textContent;
        } else{
            display.textContent="";
            display.textContent=display.textContent+number.textContent;
            switc2=0;
        }
    });
});

// store the first number and second number that are input into the calculator, 
// utilize the operator that the user selects, and then operate() 
// on the two numbers when the user presses the “=” key.

let operations=document.querySelectorAll(".operator");
operations.forEach((operation)=>{
    operation.addEventListener("click",()=>{
        if (switc1==0){
            firstNum=Number(display.textContent);
            operator=operation.textContent;
            switc1=1;
            switc2=1;
        } else{
            secondNum=Number(display.textContent);
            temp=operate(firstNum,secondNum,operator);
            operator=operation.textContent;
            firstNum=temp;
            display.textContent=firstNum;
            switc2=1;
        }
        decimalButton.disabled=false;
    });
    
});

let result=document.querySelector(".result");
result.addEventListener("click",()=>{
    secondNum=Number(display.textContent);
    temp=operate(firstNum,secondNum,operator);
    firstNum=temp;
    display.textContent=firstNum;
    firstNum=0;
    secondNum=0;
    switc1=0;
    decimalButton.disabled=false;
});

let acButton=document.querySelector(".first.function");
acButton.addEventListener("click",()=>{
    display.textContent="";
    switc1=0;
    
});

let delButton=document.querySelector(".second.function");
delButton.addEventListener("click",()=>{
    display.textContent=display.textContent.slice(0,-1);
    
});

let decimalButton=document.querySelector(".decimal");
decimalButton.addEventListener("click",()=>{
    let array=Array.from(display.textContent);
    for(i=0;i<array.length;i++){
        if (array[i]=="."){
            decimalButton.disabled=true;
        }
    }
});

// Add keyboard support!.
document.body.addEventListener("keydown",(e)=>{
    let keyPressed=e.key;
    const numbersArray=["0","1","2","3","4","5","6","7","8","9"];
    const operatorsArray=["+","-","*","/"];
    if (numbersArray.includes(keyPressed)){
        if (switc2==0){
            display.textContent=display.textContent+keyPressed;
        } else{
            display.textContent="";
            display.textContent=display.textContent+keyPressed;
            switc2=0;
        }
    } else if (operatorsArray.includes(keyPressed)){
        if (switc1==0){
            firstNum=Number(display.textContent);
            operator=keyPressed;
            switc1=1;
            switc2=1;
        } else{
            secondNum=Number(display.textContent);
            temp=operate(firstNum,secondNum,operator);
            operator=keyPressed;
            firstNum=temp;
            display.textContent=firstNum;
            switc2=1;
        }
        decimalButton.disabled=false;
    } else if (keyPressed=="."){
        display.textContent=display.textContent+keyPressed;
        let array=Array.from(display.textContent);
        for(i=0;i<array.length;i++){
            if (array[i]=="."){
                decimalButton.disabled=true;
            }
        }
    } else if (keyPressed=="="){
        secondNum=Number(display.textContent);
        temp=operate(firstNum,secondNum,operator);
        firstNum=temp;
        display.textContent=firstNum;
        firstNum=0;
        secondNum=0;
        switc1=0;
        decimalButton.disabled=false;
    }
});