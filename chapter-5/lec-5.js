/*1. Write a program that take two numbers & add them in a
new variable. Show the result in your browser.*/

let a = 30, b= 10;
let sum = a+b;
document.write( `Sum of ${a} & ${b}  is = ${sum} <br><br>`);

/*2. Repeat task1 for subtraction, multiplication, division &
modulus.*/

let sub = a-b;
document.write( `Subtraction of ${a} & ${b}  is = ${sub} <br><br>` );

let multi = a*b;
document.write( `Subtraction of ${a} & ${b}  is = ${multi} <br><br>` );

let divi = a/b;
document.write( `Division of ${a} & ${b}  is = ${divi} <br><br>` );

let mod = a%b;
document.write( `Division of ${a} & ${b}  is = ${mod} <br><br>` );


/*3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial
value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value
after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value
after decrement is: 12”.
k. Show the remainder after dividing the variable’s value
by 3.
l. Output : “The remainder is : 0”.*/

document.write(`Q2: <br><br>`);

let variable;
document.write(`Value after the variable declaration is ${variable} <br><br>`   );

variable = 50;
document.write(`Inital Value : ${variable}  <br><br> `);

variable++;
document.write(`Value after Increment ${variable}  <br><br>`);

let newVariable = variable+7;
document.write(`Value after addition of 7   is = ${newVariable}  <br><br>`);

newVariable--;
document.write(`Value after decrement of 7   is = ${newVariable}  <br><br>`);

let result = newVariable % 3;
document.write(`The Reminder is = ${result}  <br><br>`);







