const main=document.querySelector('main');
let grid=document.createElement('div');

grid.className='grid';
main.appendChild(grid);


let one = document.createElement('input');
one.type = 'button';
one.value = '1';
one.classList.add('btn');
grid.appendChild(one);

let two = document.createElement('input');
two.type = 'button';
two.value = '2';
two.classList.add('btn');
grid.appendChild(two);

let three = document.createElement('input');
three.type = 'button';
three.value = '3';
three.classList.add('btn');
grid.appendChild(three);

let four = document.createElement('input');
four.type = 'button';
four.value = '4';
four.classList.add('btn');
grid.appendChild(four);

let five = document.createElement('input');
five.type = 'button';
five.value = '5';
five.classList.add('btn');
grid.appendChild(five);

let six = document.createElement('input');
six.type = 'button';
six.value = '6';
six.classList.add('btn');
grid.appendChild(six);

let seven = document.createElement('input');
seven.type = 'button';
seven.value = '7';
seven.classList.add('btn');
grid.appendChild(seven);

let eight = document.createElement('input');
eight.type = 'button';
eight.value = '8';
eight.classList.add('btn');
grid.appendChild(eight);

let nine = document.createElement('input');
nine.type = 'button';
nine.value = '9';
nine.classList.add('btn');
grid.appendChild(nine);

let zero = document.createElement('input');
zero.type = 'button';
zero.value = '0';
zero.classList.add('btn');
grid.appendChild(zero);

let dot = document.createElement('input');
dot.type = 'button';
dot.value = '.';
dot.classList.add('btndot');
grid.appendChild(dot);

let plus = document.createElement('input');
plus.type = 'button';
plus.value = '+';
plus.classList.add('btnplus');
grid.appendChild(plus);

let minus = document.createElement('input');
minus.type = 'button';
minus.value = '-';
minus.classList.add('btnminus');
grid.appendChild(minus);

let multiply = document.createElement('input');
multiply.type = 'button';
multiply.value = '*';
multiply.classList.add('btnmultiply');
grid.appendChild(multiply);
 
let divide = document.createElement('input');
divide.type = 'button';
divide.value = '/';
divide.classList.add('btndivide');
grid.appendChild(divide);

let equal = document.createElement('input');
equal.type = 'button';
equal.value = '=';
equal.classList.add('btnequal');
grid.appendChild(equal);

let clear = document.createElement('input');
clear.type = 'button';
clear.value = 'C';
clear.classList.add('btnclear');
grid.appendChild(clear);






