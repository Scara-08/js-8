let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}
function koren(){
   displayValue =  Math.sqrt(+displayValue)
updateDisplay()
}
function calculate() {
    const result = new Function('return ' + displayValue)();
    if (result !== undefined && !isNaN(result)) {
        displayValue = result;
    } else {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}


console.log(Math.sqrt(16));