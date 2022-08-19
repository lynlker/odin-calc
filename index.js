// VARIABLES
let firstValue = 0;
let secondValue = 0;
let resultValue = 0;
let isOpActive = false;
let opType = "none"
let display = document.getElementById("screen");


// FUNCTIONS

// basic operation functions
function add(x, y){
    return x + y;
}
function subtract(x, y){
    return x - y;
}
function multiply(x, y){
    return x * y;
}
function divide(x, y){
    return x / y;
}

// Function that checks which variable to store to when typing in the calculator
function setValue(num){
    if (isOpActive === false){
        firstValue = parseFloat(num);
    } else {
        secondValue = parseFloat(num);
    }
}

function operate(op, x, y){
    switch (op) {
        case "add":
            resultValue = add(x, y);
            display.innerText = `${resultValue}`;
            break;
        case "subtract":
            resultValue = subtract(x, y);
            display.innerText = `${resultValue}`;
            break;
        case "multiply":
            resultValue = multiply(x, y);
            display.innerText = `${resultValue}`;
            break;
        case "divide":
            resultValue = divide(x, y);
            display.innerText = `${resultValue}`;
            break;

    }
}
// button click function
function whenClicked(btn){
    switch (btn) {
        case "+":
            isOpActive = true;
            opType = "add";
            display.innerText = "";
            break;
        case "-":
            isOpActive = true;
            opType = "subtract";
            display.innerText = "";
            break;
        case "*":
            isOpActive = true;
            opType = "multiply";
            display.innerText = "";
            break;
        case "/":
            isOpActive = true;
            opType = "divide";
            display.innerText = "";
            break;
        case "clear":
            isOpActive = false;
            opType = "none";
            //here i'd reset the DOM screen to 0
            display.innerText = "0";
            firstValue = 0;
            secondValue = 0;
            break;
        case "=":
            operate(opType, firstValue, secondValue);
            break;
        default:
            //here i'd add whatever number to the DOM screen
            if (display.innerText === "0"){
                display.innerText = `${btn}`;
                setValue(display.innerText);
            } else{
                display.innerText = display.innerText.concat(`${btn}`);
                setValue(display.innerText);
            }
            break;
    }
}


