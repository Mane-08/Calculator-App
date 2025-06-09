// script.js

let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Replace % with /100 for percentage calculation
        let expression = display.value.replace(/%/g, '/100');
        display.value = eval(expression);
    } catch {
        display.value = 'Error';
    }
}
let memory = 0;

// Append function for scientific operations
function appendFunction(func) {
    display.value += func;
}

// Factorial calculation
function calculateFactorial() {
    try {
        let value = eval(display.value);
        if (value < 0 || !Number.isInteger(value)) {
            display.value = "Error";
            return;
        }
        let result = 1;
        for (let i = 2; i <= value; i++) result *= i;
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

// Memory functions
function memoryAdd() {
    try { memory += Number(eval(display.value)); } catch {}
}
function memorySubtract() {
    try { memory -= Number(eval(display.value)); } catch {}
}
function memoryRecall() {
    display.value += memory;
}
function memoryClear() {
    memory = 0;
}
