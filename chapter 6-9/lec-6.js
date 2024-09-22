/*1. Write a program to take a number in a variable, do the
required arithmetic to display the following result in your
browser:*/
document.write(`Q1 : <br><br>`);
let a =10;
document.write(`Result <br><br>`);
document.write(`The value of a is : ${a} <br> `);

let new_a= ++a; 
document.write(`.......................................<br><br>`);
document.write(`The value of ++a is : ${new_a} <br> `);
document.write(`Now the value a is : ${a} <br><br>`);

let increament_a = a++;
document.write(`The the value a++ is : ${ increament_a} <br>`);
document.write(`Now the value a is : ${a} <br><br><br> `);

let decreament_a = --a;
document.write(`The the value --a is : ${decreament_a} <br>`);
document.write(`Now the value a is : ${a} <br><br><br> `);

let post_decreament = a--;
document.write(`The the value --a is : ${post_decreament} <br>`);
document.write(`Now the value a is : ${a} <br><br><br> `);

/*2-What will be the output in variables a, b & result after
execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
Explain the output at each stage:
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;*/

document.write(`Q2 : <br><br>`);
 
 
var aa = 2, b = 1;
var result = --a - --b + ++b + b--;

 
var step1 = --aa;  
document.write("Step 1: --a = " + step1 + " => a = " + aa + "<br><br>");

 
var step2 = --b; 
document.write("Step 2: --b = " + step2 + " => b = " + b + "<br><br>");

 
var step3 = step1 - step2;  
document.write("Step 3: --aa - --b = " + step3 + "<br><br>");

 
var step4 = ++b;  
document.write("Step 4: ++b = " + step4 + " => b = " + b + "<br><br>");

  
var step5 = step3 + step4;  
document.write("Step 5: --aa - --b + ++b = " + step5 + "<br><br>");

 
var step6 = b--;  
document.write("Step 6: b-- = " + step6 + " => b = " + b + "<br><br>");

 
var result = step5 + step6; 
document.write("Final result = " + result + "<br><br>");

/*3. Write a program that takes input a name from user &
greet the user.*/

// document.write(`Q3 : Greeting with alert <br><br>`);
// let greet = prompt(` Hy ! what's your name ? `);
// alert( ` Asslama O Alaikum  `  +  greet );

/*5. Write a program to take input a number from user &
display it’s multiplication table on your browser. If user
does not enter a new number, multiplication table of 5
should be displayed by default.*/

// let number = prompt(`Enter the number to print the table`);
//   number = input ? Number(input) : 5;

//   document.write(`Multiplication Table of ${number}:`);
// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
// }
// if(number===number) {
//     for(let i = 1; i<=10;i++){
//         let res = i*number;
//         document.write(`${number} * ${i} = ${res} <br><br>`);
//     }
   
// }
// else  { 
//         let ans = i*5;
//         document.write(`${number} * ${i} = ${ans} <br><br>`);
// }
// }

/*6. Take
a) Take three subjects name from user and store them in 3
different variables.
b) Total marks for each subject is 100, store it in another
variable.
c) Take obtained marks for first subject from user and
stored it in different variable.
Take obtained marks for remaining 2 subjects from user
and store them in variables.
e) Now calculate total marks and percentage and show the
result in browser like this.(Hint: user table)*/

let Subject1 = prompt(`Enter your first subject `);
let marks1 = prompt(`Enter your first subject marks`);

let Subject2 = prompt(`Enter your Second subject `);
let marks2 = prompt(`Enter your Second subject marks`);

let Subject3 = prompt(`Enter your Third subject `);
let marks3 = prompt(`Enter your Third subject marks`);

let sub_1_per = marks1/100*100;
let sub_2_per = marks2/100*100;
let sub_3_per = marks3/100*100;
 let subMarks=100;
let obtain_marks =  (Number(marks1)+Number(marks2)+Number(marks3));
let total_marks = 300;

let percentage = obtain_marks/total_marks*100;
document.write(`Subject   Totalmarks   Obtainmarks  Percentage <br><br>`);
 
    document.write( `${Subject1} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;         ${subMarks}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${marks1} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ${sub_1_per}  <br>  ${Subject2} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ${subMarks} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ${marks2}  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ${sub_2_per} <br>   ${Subject3} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ${subMarks} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ${marks3} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ${sub_3_per} <br><br>` );
    document.write(` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         300  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${obtain_marks} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         ${percentage} `);
 
 









