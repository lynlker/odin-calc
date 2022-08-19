// VARIABLES
let firstValue = 0;
let secondValue = 0;
let isOpActive = false;
let opType = "none"

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
function operate(op, x, y){
    return op(x, y);
}

// button click function
function whenClicked(btn){
    switch (btn) {
        case "+":
            isOpActive = true;
            opType = "add";
            break;
        case "-":
            isOpActive = true;
            opType = "subtract";
            break;
        case "*":
            isOpActive = true;
            opType = "multiply";
            break;
        case "/":
            isOpActive = true;
            opType = "divide";
            break;
        case "clear":
            isOpActive = false;
            opType = "none";
            //here i'd reset the DOM screen to 0
            break;
        default:
            //here i'd add whatever number to the DOM screen
            break;
    }
}


