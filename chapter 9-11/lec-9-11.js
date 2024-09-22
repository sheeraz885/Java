1. /*Write a program to take “city” name as input from user. If ser enters “Karachi”, 
   welcome the user like this: “Welcome to city of lights”*/

let city = prompt(`Enter the city name !`);
if((city===`karachi`)|| (city===`Karachi`)){
    alert(`Welcome to city of lights  `);
}

/*2. Write a program to take “gender” as input from user. If the
user is male, give the message: Good Morning Sir. If the
user is female, give the message: Good Morning Ma’am.*/

let gender = prompt("Enter your gender");
if((gender==="male")||(gender==="Male")){
    alert(`Good Morning Sir`);
}
if((gender==="female")||(gender==="Female")){
    alert(`Good Morning Ma’am`);
}

/*Write a program to take input color of road traffic signal
from the user & show the message according to this table:*/

let signalColor = prompt(`Enter the color of road traffic signal Please.`);
if((signalColor===`Red`)||(signalColor===`red`)){
    alert(`Must Stop`);
}
else if((signalColor===`Yellow`)||(signalColor===`yellow`)){
    alert(`Ready to move`);
}

else if((signalColor===`Green`)||(signalColor===`green`)){
    alert(`Move now`);
}
else{
    alert(`Invalid Color`);
}

/*4.Write a program to take input remaining fuel in car (in litres) from user. If the current 
fuel is less than 0.25litres, how the message “Please refill the fuel in your car”*/

let remaingFuel = prompt(`Enter the  remaining fuel in car (in litres)`);
if(remaingFuel<0.25 ){
    alert(`Please refill the fuel in your car`);
}
else{
    alert(`Keep Moving`);
}

/*5.Run this script, & check whether alert message would be
displayed or not. Record the outputs*/ 
  var a = 4;
if (++a === 5){
alert("given condition for variable a is true");//true
}

// b  
 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");//false
}

// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");//true
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");//true
}

// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");//true
}

// e.
 if (true){
    alert("True");//true
    }
    if (false){
    alert("False");
    }

    // f.
     if("car"  < "cat"){
        alert("car is smaller than cat");//true
        }
