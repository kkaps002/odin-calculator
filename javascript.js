let operator = " ";
let previousNumber = 0;
let currentNumber = 0;


const currentDisplay = document.getElementById("current-display");
const previousDisplay= document.getElementById("previous-display");
const buttons = document.getElementsByTagName("button");


for (const button of buttons) {  // Add an event listener to each button
    button.addEventListener("click", () => {
        displayText(button);
    });
}


///////////////////////////////////////////////////////////////////////////////
function displayText (pressedButton){

    if (pressedButton.classList.contains("operator")){
        // operator = pressedButton.textContent; // set the operator for operate function
        // previousNumber = operate(operator,previousNumber,currentNumber); // store the current number as b operand
        // previousDisplay.textContent = currentNumber + operator; // display it in previous section
        // currentNumber = 0; //reset current number to be ready to receive new value
        // currentDisplay.textContent = "0";
        // return;

        operator = pressedButton.textContent; // set the operator for operate function
        const result = operate(operator,previousNumber,currentNumber); // store result 
        previousNumber = result;  
        previousDisplay.textContent = currentNumber + operator; // display it in previous section
        currentNumber = result;
        currentDisplay.textContent = currentNumber;
        return;

    }

    if(pressedButton.textContent === "="){ //behaves almost like other buttons without changing the operator
        const result = operate(operator,previousNumber,currentNumber); // store result 
        previousNumber = 0;  
        currentNumber = result;
        previousDisplay.textContent = previousNumber;
        currentDisplay.textContent = currentNumber;
        return;
    }

    if (pressedButton.textContent === "C"){
        const string = currentNumber.toString();
        if (string.length === 1){
            currentNumber = 0;
            currentDisplay.textContent = currentNumber;
            return;
        }
        const edited = string.slice(0,-1);
        currentNumber = edited;
        currentDisplay.textContent = currentNumber;
        return;
    }

    if (pressedButton.textContent === "AC"){
        previousNumber =0;
        currentNumber =0;
        previousDisplay.textContent = previousNumber;
        currentDisplay.textContent = currentNumber;
        
        return;
    }
    if (currentNumber === 0){
        currentNumber = pressedButton.textContent;
        currentDisplay.textContent = pressedButton.textContent;
        return;
    }
    currentNumber += pressedButton.textContent; // this part is repeated in almost all cases, could be written more efficiently
    currentDisplay.textContent += pressedButton.textContent;
    
}
///////////////////////////////////////////////////////////////////////////////

function operate(operator, a, b) { // operator needs to be string formatted
    switch(operator) {
        case "+" :
            return add(a,b);
        case "-" :
            return subtract(a,b);
        case "*" :
            return multiply(a,b);
        case "/" :
            return divide(a,b);
    }
}

// b is current 
function add(a,b) {
    return Number(a) + Number(b);
}
function subtract(a,b) {
    return Number(a) - Number(b);
}
function multiply(a,b) {
    return Number(a) * Number(b);
}
function divide (a,b) {
    return Number(a) / Number(b);
}