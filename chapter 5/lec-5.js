/*1. Write a program that take two numbers & add them in a
new variable. Show the result in your browser.*/
document.write(`Q1: <br><br>`);
let a = 30, b= 10;
let sum = a+b;
document.write( `Sum of ${a} & ${b}  is = ${sum} <br><br>`);

/*2. Repeat task1 for subtraction, multiplication, division &
modulus.*/
document.write(`Q2: <br><br>`);
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

document.write(`Q3: <br><br>`);

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


 /*4. Cost of one movie ticket is 600 PKR. Write a script to
store
ticket price in a variable & calculate the cost of buying 5
tickets
to a movie. */
document.write(`Q4: <br><br>`);
let ticketPrice = 600;
let buyingTickets = 5; 
let totalCost = ticketPrice*buyingTickets;
 document.write(`Total cost to buy ${buyingTickets} to a movie is ${totalCost} PKR`);


 /*5. Write a script to display multiplication table of any
  number in your browser. E.g*/

  document.write(`Q5: <br><br>`);

  document.write(`Table of 3 <br><br>`);
  let table = 3;
  for(let i =1; i<=10;i++){
    let res = i*table;
     document.write(` ${table}   *  ${i}  =  ${res}  <br>`);
  }

  /*The Temperature Converter: It’s hot out! Let’s make a
  converter based on the steps here.
  a. Store a Celsius temperature into a variable.
  b. Convert it to Fahrenheit & output “NNoC is NNoF”.
  c. Now store a Fahrenheit temperature into a variable.
  d. Convert it to Celsius & output “NNoF is NNoC”. */
  document.write(`  <br><br>`)
  document.write(`Q6 <br><br>`);
  let celsiusTemp = 25;
  let fahrenheit = (celsiusTemp * 9/5) + 32;

  document.write(`Temp of fahrenheit is : ${fahrenheit} F  <br> `);

  let fahrenheitTemp = 70;
  let celsius = (fahrenheitTemp - 32) * 5/9;
  document.write(`Temp of celsius is : ${celsius} C  <br><br>`);

 /*Write a program to implement checkout process of a
shopping cart system for an e-commerce website. Store
the following in variables
MATH EXPRESSIONS | JAVASCRIPT
Page 5 of 9
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges*/

document.write(`Q7 <br><br>`);

let Item_1_Price = 650;
let Item_2_Price  = 100;
let quantity_Item_1 = 3;
let quantity_Item_2 = 7;
let shipping_charges = 100;
let total_cost = 650*3+700+100;
document.write(`Price if item 1 is : ${Item_1_Price}<br>Quantity of itemm 1 is : ${quantity_Item_1}<br>
    Price of itemm 2 is : ${Item_2_Price}<br>Quanttity of itemm 2 is : ${Item_2_Price}<br>
    shipping Charges is : ${shipping_charges}<br><br>`);
    
    document.write(`Total cost of you order is ${total_cost} <br><br>`);

    /*8. Store total marks & marks obtained by a student in 2
    variables. Compute the percentage & show the result in
    your browser*/
    document.write(`Q8 <br><br>`);

    let totalMarks= 980;
    let obtainedMarks =804;
    let percenatge = 804/980*100;
    document.write(`Total marks : ${totalMarks}<br> obtain marks : ${obtainedMarks}<br>
     Percenatge : ${percenatge} <br><br>`);






