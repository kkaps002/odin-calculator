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
        operator = pressedButton.textContent;
        previousNumber = currentNumber;
        currentDisplay.textContent += pressedButton.textContent;
        previousDisplay.textContent = currentDisplay.textContent;
        currentDisplay.textContent = "0";
        return;
    }

    if(pressedButton.textContent === "="){
        currentDisplay.textContent = operate(operator,previousNumber,currentNumber);
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
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide (a,b) {
    return a / b;
}


