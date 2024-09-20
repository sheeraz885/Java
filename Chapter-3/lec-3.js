/*1. Declare a variable called age & assign to it your age. Show
your age in an alert box.*/

let age = 22;
alert(`I am ${age} years old`);

/*2. Declare & initialize a variable to keep track of how many
times a visitor has visited a web page. Show his/her
number of visits on your web page. For example: “You
have visited this site N times”.*/

let visit_Count = localStorage.getItem("visitCount")|| 0;
visit_Count++;
localStorage.setItem("visitCount",visit_Count);
alert( `You have visited this site ${visit_Count}`);


/*3. Declare a variable called birthYear & assign to it your
birth year. Show the following message in your browser:*/ 

let birthYear = 2002;
 let para = document.createElement("p");
 let list = document.querySelector("ul");

 list.after(para);
 para.style.marginLeft="50px";
 para.style.lineHeight= "2rem"
 para.innerText = `My birth year is ${2002}\nData type of my declaredvariable is number`; 

 /*4. A visitor visits an online clothing store
www.xyzClothing.com . Write a script to store in variables
the following information:
a. Visitor’s name
b. Product title
c. Quantity i.e. how many products a visitor wants to
order
Show the following message in your browser: “John
Doe ordered 5 T-shirt(s) on XYZ Clothing store”.*/

let visitorName="Sheeraz";
let productsTittle = "T-Shirts";
let quantities = 5;

let store = document.querySelector("#paragraph");
store.innerText= `${visitorName} ordered ${quantities} ${productsTittle} on Clothes Fashion store`;
 
 
