// VARIABLES
let firstValue = 0;
let secondValue = 0;
let resultValue = 0;
let isOpActive = false;
let isDoomed = true;
let opType = "none"
let display = document.getElementById("screen");
let info = document.getElementById("infoText")

// FUNCTIONS

// Rounding function
function roundTo(n, digits) {
    if (digits === undefined) {
      digits = 0;
    }
  
    var multiplicator = Math.pow(10, digits);
    n = parseFloat((n * multiplicator).toFixed(11));
    var test =(Math.round(n) / multiplicator);
    return +(test.toFixed(digits));
  }

// basic operation functions
function add(x, y){
    return roundTo(x + y, 2);
}
function subtract(x, y){
    return roundTo(x - y, 2);
}
function multiply(x, y){
    return roundTo(x * y, 2);
}
function divide(x, y){
    return roundTo(x / y, 2);
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
            display.innerText = "|";
            isDoomed = true;
            info.innerText = "Mode selected: Add";
            break;
        case "-":
            isOpActive = true;
            opType = "subtract";
            display.innerText = "|";
            isDoomed = true;
            info.innerText = "Mode selected: Subtract";
            break;
        case "*":
            isOpActive = true;
            opType = "multiply";
            display.innerText = "|";
            isDoomed = true;
            info.innerText = "Mode selected: Multiply";
            break;
        case "/":
            isOpActive = true;
            opType = "divide";
            display.innerText = "|";
            isDoomed = true;
            info.innerText = "Mode selected: Divide";
            break;
        case "clear":
            isOpActive = false;
            opType = "none";
            display.innerText = "0";
            firstValue = 0;
            secondValue = 0;
            isDoomed = true;
            info.innerText = "";
            break;
        case "=":
            operate(opType, firstValue, secondValue);
            firstValue = parseFloat(display.innerText);
            isDoomed = true;
            break;
        default:
            //here i'd add whatever number to the DOM screen
            if (isDoomed === true){
                display.innerText = `${btn}`;
                setValue(display.innerText);
                isDoomed = false;
            } else{
                display.innerText = display.innerText.concat(`${btn}`);
                setValue(display.innerText);
            }
            break;
    }
}


