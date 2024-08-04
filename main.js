let firstNumber = null;
let operator = null;
let resetDisplay = false;


function operate(operator,number1,number2){
    switch(operator){
        case '+':
            return number1 + number2;
            break;
        case '-':
            return number1 - number2;
            break;
        case '*':
            return number1 * number2;
            break;
        case '/':
            return number1 / number2;
            break;
        default:
            return 'Invalid operator';
    }
}

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
       
    });
});

    