//initialize all values 
let operator = null;
let result = null;
let previous = null;
let current = null; 
let displayVal = 0;


//get elements from html
const display = document.getElementById("display");
const buttons = document.getElementsByTagName("button");

// add event listener to each button
for (const button of buttons) {  
    button.addEventListener("click", () => {
        // first check if button pressed is a number or operator or misc 
        if (button.classList.contains("number")){ 
            updateOperand(button);
        }
        else if (button.classList.contains("operator")){
             updateOperator(button);
        }
        else if (button.classList.contains("equals")){ 
            calculateResult();
        }
       
    });
}

///////////////////////////////////////////////////////////////////////////////
function updateOperand(button) {
        
    if (current === null || current === displayVal || current === result) { // if curr is 0 or equal to prev bc user didn't update yet
        current = button.textContent; 
    }
    else {
        current = current + button.textContent; //apend input to the end of current number, button text is a string so both get converted here 
    } 
    display.textContent = current; // display user input
    console.log("assigned:" + current);
}

function updateOperator(button) {
    //remove clicked states from all operators
    for (const button of buttons) { 
        button.classList.remove("clicked")
     }
     //add clicked state to last one cliked , this way only one can appear active at a time
    button.classList.add("clicked");
     
    if (previous === null){
        previous = 0;
    }
    
    if (previous !== 0){ // if prev is not 0 calculate the result of previous 2 nums before changing the operator and update curr value 
        calculateResult();

    }
    else if (previous === 0) {  // previous is 0 only if calculate function is called 
        operator = button.textContent; // just set the operator to user input
        
        previous = current; // set current to previous and standby for other input, if the user just presses equals or operator again, we get a new result but with the same number input
        display.textContent = current;
        // current = null; 
        displayVal = current;
    } 
    // console.log(displayVal);
    console.log("current after setting " + operator + " operator:" + current);
}

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


function add(a,b) { // b is current 
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


//Ideally this would only deal with the display and updating the logic would be in a different funciton
function calculateResult() { // calculate the result of an operation and update previous and current numbers 
    result = operate(String(operator),previous,current);
            display.textContent = result;
            displayVal = previous;
            previous = 0;
            current = result;
}