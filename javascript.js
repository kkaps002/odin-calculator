let operator = " ";
let previousNumber = 0;
let currentNumber = 0;


const currentDisplay = document.getElementById("current-display");
const previousDisplay= document.getElementById("previous-display");

const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    
    const button = buttons[i]; // Add an event listener to each button
    button.addEventListener("click", () => {
        displayText(button);
    });
}

function displayText (pressedButton){

    if (pressedButton.classList.contains("operator")){
        operator = pressedButton.textContent; // set the operator for operate function
        previousNumber = currentNumber; // store the current number as b operand
        previousDisplay.textContent = currentNumber + operator; // display it in previous section
        currentNumber = 0; //reset to be ready to receive new value


        // currentDisplay.textContent += pressedButton.textContent; // display b operand with the operator next to it 
        currentDisplay.textContent = "0";
        return;
    }

    if(pressedButton.textContent === "="){
        currentDisplay.textContent = operate(operator,previousNumber,currentNumber);
        previousNumber = currentDisplay.textContent;
        return;
    }
    currentNumber = pressedButton.textContent;
    currentDisplay.textContent = pressedButton.textContent;
    
}

function operate(operator, numberA, numberB) { // operator needs to be string formatted
    switch(operator) {
        case "+" :
            return add(numberA,numberB);
        case "-" :
            return subtract(numberA,numberB);
        case "*" :
            return multiply(numberA,numberB);
        case "/" :
            return divide(numberA,numberB);     
    }
}

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


