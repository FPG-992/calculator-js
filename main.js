let firstNumber = null;
let operator = null;
let resetDisplay = false;
let hasPressedEqual = false;

function operate(operator,number1,number2){
    switch(operator){
        case '+':
            return number1 + number2;
        case '-':
            return number1 - number2;
        case '*':
            return number1 * number2;
        case '/':
            return number1 / number2;
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

function shouldReset(resetDisplay){
    if(resetDisplay){
        display.textContent = '';
        resetDisplay = false;
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')){
            display.textContent += button.textContent;
        } else if (button.classList.contains('operator')){
            if (hasPressedEqual){
                number2 = parseFloat(display.textContent);
                operator = button.textContent;
                resetDisplay = true;
                shouldReset(resetDisplay);
            } else {
            number1 = parseFloat(display.textContent);
            operator = button.textContent;
            resetDisplay = true;
            shouldReset(resetDisplay);
            }
        } else if (button.classList.contains('clear')){
            number1 = null;
            operator = null;
            number2 = null;
            resetDisplay = true;
            shouldReset(resetDisplay);
            hasPressedEqual = false;
        } else if (button.classList.contains('equal')){
            if (number1 === null || operator === null || display.textContent === '') {
                display.textContent = "Error, press A/C to clear";
            } else {
                number2 = parseFloat(display.textContent);
                display.textContent = operate(operator, number1, number2);
                number1 = parseFloat(display.textContent);
                resetDisplay = true;
                hasPressedEqual = true;
            }
        } else if (button.classList.contains('percent')){
            display.textContent = parseFloat(display.textContent) / 100;
        } else if (button.classList.contains('sign')){
            display.textContent = parseFloat(display.textContent) * -1;
        } else if (button.classList.contains('decimal')){
            if (!display.textContent.includes('.')){
                display.textContent += '.';
            }
        }

    });
});

    