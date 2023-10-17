let operator = " ";
let numberA = " ";
let numberB = " ";

let pressedButton;

const display = document.getElementById("display");

const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    
    const button = buttons[i]; // Add an event listener to each button
    button.addEventListener("click", () => {
        pressedButton = button;
        displayText(pressedButton);
    });
}

function displayText (pressedButton){

    if (pressedButton.classList.contains("operator")){
        operator = pressedButton.textContent;
    }

    if (pressedButton.classList.contains("number")) {
        if (numberA === " " && operator === " "){
            numberA = pressedButton.textContent;
        }
        if (numberA !== " " && operator !== " ") {
            numberB = pressedButton.textContent;
        }
        
    }

    display.textContent = `${numberA} ${operator} ${numberB} `;
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


