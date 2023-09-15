//---------------------------- 9 - 11 -----------------------------
//--------------- USER INPUT & CONDITIONAL STATEMENT ---------------

// Q1.Write a program to take “city” name as input from user. If 
// user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

var cityName = prompt("Enter your city name");
if(cityName === "karachi"){
    console.log("Welcome to city of lights");
}

// Q2.Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender");
if(gender === "male"){
    console.log("Good Morning sir");
}
else if(gender === "female"){
    console.log("Good Morning Ma'am");
}

// Q3.Write a program to take input color of road traffic signal 
// from the user & show the message according to this table:

var color = prompt("Enter color of traffic light");
if(color === "red"){
    console.log("Must stop");
}
else if(color === "yellow"){
    console.log("Ready to move");
}
else if(color === "green"){
    console.log("Move now");
}

// Q4.Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car”

var fuel = prompt("Enter your remaining fuel in the car");
if(fuel < 0.25){
    console.log("Please refill the fuel in your car");
}
else{
    console.log("you have sufficient fuel");
}

// Q5.Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// OUTPUT is "given condition for variable a is true"

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// OUTPUT (condition is false)

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// OUTPUT (only condition 2 and 4 is true)

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//OUTPUT (The cost equals)

if (true){
    alert("True");
    }
    if (false){
    alert("False");
}
//OUTPUT (TRUE)    

if("car" < "cat"){
    alert("car is smaller than cat");
}
//OUTPUT (Car is smaller than cat)

//Q6.Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute 
// grade as per following table:

document.write("MARKSHEET" + "<br>" + "<br>");
var totalMarks = 300;
document.write("Total marks: " + totalMarks + "<br>");
var phyMarks = +prompt("Enter  your marks in physics");
var mathMarks = +prompt("Enter your marks in maths");
var chemMarks = +prompt("Enter your marks in chemistry");
var marksObtained = phyMarks+mathMarks+chemMarks + " ";
document.write("Marks obtained :" + marksObtained + "<br>");
var percentage = (marksObtained/totalMarks)*100;
document.write("Percentage: " + percentage + "%" + "<br>")
if(percentage >= 80){
    document.write("Grade: A+"+ "<br>");
    document.write("Remarks: excellent");
}
else if(percentage >= 70){
    document.write("Grade: A"+ "<br>");
    document.write("Remarks: very good");
}
else if(percentage >= 60){
    document.write("Grade: B"+ "<br>");
    document.write("Remarks: keep it up");
}
else if(percentage >= 50){
    document.write("Grade: C"+ "<br>");
    document.write("Remarks: you need to work hard");
}
else if(percentage >= 40){
    document.write("Grade: D"+ "<br>");
    document.write("Remarks: you need to work very very hard")
}

// Q6.Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = Math.floor(Math.random()*10)+1;
var userGuess = +prompt("Guees the Number from (1 to 10)")
if(secretNumber === userGuess){
    document.write(secretNumber + " Bingo! Correct answer");
}
else if (userGuess + 1 === secretNumber) {
    console.log("Close enough to the correct answer");
}

// Q8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// is divisible by 3.

var number = +prompt("Enter number you want to cheak");
if(number % 3 === 0){
     document.write(number + " is divisible by 3 ");
}
else {
    document.write(number + " is not divisible by 3 ");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var numCheak = +prompt("Enter number you want to cheak");
if(numCheak % 2 === 0){
    document.write(numCheak + " is even number ");
}
else{
    document.write(numCheak + " is odd number ");
}

// Q10. Write a program that takes temperature as input and 
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature = +prompt("Enter temperature");
if(temperature >= 40){
    document.write("It is too hot outside.");
}
else if(temperature >= 30){
    document.write("The Weather today is Normal.");
}
else if(temperature >= 20){
    document.write("Today’s Weather is cool.");
}
else if(temperature >= 10){
    document.write("OMG! Today weather is so Cool.");
}

// Q11. Write a program to create a calculator for +,-,*, / & % 
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

var num1 = +prompt("Enter first number");
var operator = prompt("Enter operation you want (+,-,*, / & % )");
var num2 = +prompt("Enter second number");
if(operator === "+"){
    document.write(num1 + num2);
}
else if(operator === "-"){
    document.write(num1 - num2);
}
else if(operator === "*"){
    document.write(num1 * num2);
}
else if(operator === "/"){
    document.write(num1 / num2);
}
else if(operator === "%"){
    document.write(num1 % num2);
}

//--------------------- chapter 12 to 13 -------------------------
//------------------ IF…ELSE & ELSE IF STATEMENT,-----------------
//------------------- TESTING SET OF CONDITIONS ------------------

// Q1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var char = prompt("enter the charcter");

if(char >= 'a' && char <= 'z'){
    alert(char + " = this is a small letter");
} else if(char >= 'A' && char <= 'Z'){
    alert(char + " = this is capatile letter");
}else {
    alert("this is number not a small and capatile letter");
}

// Q2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = prompt("please enter first number");
var num2 = prompt("please enter second number");

if(num1 > num2){
    document.write(num1 + " number is graeter than..." + num2);
}else if(num1 < num2){
    document.write(num2 + " number is greater than..." + num1);
}else if(num1 = num2){
    document.write(num1 + num2 + "  boths numbers are equals..");
}

// Q3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var num1 = prompt("plaese enter the number");


if(num1 < 0){
    alert("the number is negative");
}else if(num1 > 0){
    alert("the number is positive");
}else{
    alert("the given number is zero");
}

// Q4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var vowels = prompt("please enter alphabets");
if(vowels === "a" || vowels === "e" || vowels === "i" || vowels === "o" || vowels === "u" || vowels === "A" || vowels === "E" || vowels === "I" || vowels === "O" || vowels === "U"){
    alert("this is vowel = " + vowels);
}else{
    alert("please enter a single charcter");
}

// Q5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.


var password = prompt("enter your password");

if(password === "ArsalanFayyaz"){
    alert("Correct! The password you entered matches the original password");
}else {
    alert("this is not correct password");
}

// Q6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


var greeting ;
var hour = 24;
 if(hour <= 8){
    greeting = "good day";
 }else if(hour >= 12){
    greeting = "good afternoon"
 }else if(hour >= 19){
    greeting = "good evening"
 }
 alert(greeting);

//  Q7. Write a program that takes time as input from user in 24
//  hours clock format like: 1900 = 7pm. Implement the
//  following case using if, else & else if statements

var time = prompt("enter the time like = 1700 is 5:pm");

if(time >= 0 && time < 499){
    alert("good night");
}else if(time >= 500 && time < 1299){
    alert("good morning");
}else if(time >= 1300 && time < 1699){
    alert("goodafter noon");
}else if(time >= 1700 && time < 1999){
    alert("good evening");
}else if(time >= 2399){
    alert("good night");
}
