const main=document.querySelector('main');
let grid=document.createElement('div');

grid.className='grid';
main.appendChild(grid);

let output=document.createElement('div');
output.className='output';
grid.appendChild(output);


let clear = document.createElement('button');
clear.className='span-two clear';
clear.innerHTML='C';
grid.appendChild(clear);

let delButton = document.createElement('button');
delButton.className='delete';
delButton.innerHTML='Del';
grid.appendChild(delButton);

let divide = document.createElement('button');
divide.className='operator';
divide.innerHTML='/';
grid.appendChild(divide);

let one = document.createElement('button');
one.className='number';
one.innerHTML='1';
grid.appendChild(one);

let two = document.createElement('button');
two.className='number';
two.innerHTML='2';
grid.appendChild(two);

let three = document.createElement('button');
three.className='number';
three.innerHTML='3';
grid.appendChild(three);

let plus = document.createElement('button');
plus.className='operator';
plus.innerHTML='+';
grid.appendChild(plus);

let four = document.createElement('button');
four.className='number';
four.innerHTML='4';
grid.appendChild(four);

let five = document.createElement('button');
five.className='number';
five.innerHTML='5';
grid.appendChild(five);

let six = document.createElement('button');
six.className='number';
six.innerHTML='6';
grid.appendChild(six);

let minus = document.createElement('button');
minus.className='operator';
minus.innerHTML='-';
grid.appendChild(minus);

let seven = document.createElement('button');
seven.className='number';
seven.innerHTML='7';
grid.appendChild(seven);

let eight = document.createElement('button');
eight.className='number';
eight.innerHTML='8';
grid.appendChild(eight);

let nine = document.createElement('button');
nine.className='number';
nine.innerHTML='9';
grid.appendChild(nine);

let multiply = document.createElement('button');
multiply.className='operator';
multiply.innerHTML='*';
grid.appendChild(multiply);

let zero = document.createElement('button');
zero.className='number';
zero.innerHTML='0';
grid.appendChild(zero);

let dot = document.createElement('button');
dot.className='number';
dot.innerHTML='.';
grid.appendChild(dot);

let equal = document.createElement('button');
equal.className='span-two equal';
equal.innerHTML='=';
grid.appendChild(equal);

let previousOperand= document.createElement('div');
previousOperand.className='previousOperand';
output.appendChild(previousOperand);

let currentOperand= document.createElement('div');
currentOperand.className='currentOperand';
output.appendChild(currentOperand);

const numberButton = document.querySelectorAll('.number');
const operatorButton = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');
const equalButton = document.querySelector('.equal');
const previousOperandText = document.querySelector('.previousOperand');
const currentOperandText = document.querySelector('.currentOperand');



class calculator{
    constructor(previousOperandText, currentOperandText){
        this.previousOperandText = previousOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();
    }
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    chooseOperation(operation){
        if(this.currentOperand === '') return;
        if(this.previousOperand !== ''){
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if(isNaN(prev) || isNaN(current)) return;
        switch(this.operation){
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case '*':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = '';
}

getDisplayNumber(number){
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if(isNaN(integerDigits)){
        integerDisplay = '';
    }
    else{
        integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
    }
    if(decimalDigits != null){
        return `${integerDisplay}.${decimalDigits}`;
    }
    else{
        return integerDisplay;
    }
}

    updateDisplay(){
        this.currentOperandText.innerText = this.getDisplayNumber(this.currentOperand);
        if(this.operation != null){
            this.previousOperandText.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        }
        else{
            this.previousOperandText.innerText = '';
        }
    }
}

numberButton.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.appendNumber(button.innerText);
        Calculator.updateDisplay();
    }
    )
}
)
operatorButton.forEach(button => {
    button.addEventListener('click', () => {
        Calculator.chooseOperation(button.innerText);
        Calculator.updateDisplay();
    }
    )
}
)

equalButton.addEventListener('click', button => {
    Calculator.compute();
    Calculator.updateDisplay();
}
)

clearButton.addEventListener('click', button => {
    Calculator.clear();
    Calculator.updateDisplay();
}
)

deleteButton.addEventListener('click', button => {
    Calculator.delete();
    Calculator.updateDisplay();
}
)

document.addEventListener('keydown',  event => {
    let patternForNumbers = /[0-9]/g;
    let patternForOperators = /[+\-*/]/g;
    if(event.key.match(patternForNumbers)){
        event.preventDefault();
        Calculator.appendNumber(event.key);
        Calculator.updateDisplay();
    }
    if (event.key === '. '){
        event.preventDefault();
        Calculator.appendNumber(event.key);
        Calculator.updateDisplay();
    }
    if (event.key.match(patternForOperators)){
        event.preventDefault();
        Calculator.chooseOperation(event.key);
        Calculator.updateDisplay();
    }
    if (event.key === 'Enter' || event.key === '='){
        event.preventDefault();
        Calculator.compute();
        Calculator.updateDisplay();
    }
    if (event.key === 'Backspace'){
        event.preventDefault();
        Calculator.delete();
        Calculator.updateDisplay();
    }
    if (event.key === 'Clear'){
        event.preventDefault();
        Calculator.clear();
        Calculator.updateDisplay();
    }
}
)

const Calculator = new calculator(previousOperandText, currentOperandText);