//----------------------- CLASS WORK -------------------------
//--------------------- ARRAYS AND LOOP ----------------------

// Q1. Declare and initialize an empty multidimensional array.
// (Array of arrays)

// var multidimensional = [[],[]];

// Q2. Declare and initialize a multidimensional array 
// representing the following matrix:

// var matrix = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]

// Q3. Write a program to print numeric counting from 1 to 10.

// for (var i=1;i<=10;i++){
//     document.write(i + "<br>");
// }

// Q4. Write a program to print multiplication table of any 
// number using for loop. Table number & length should be 
// taken as an input from user.

// var tableNumber = +prompt("Enter table number you want to generate");
// var tableLength = +prompt("Enter the length of your table");
// for(var i=1;i<=tableLength;i++){
//     document.write(tableNumber + "X" + i + "=" + tableNumber*i + "<br>");
// }

// Q5. Write a program to print items of the following array 
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, 
// “strawberry”]

// var fruits = ["apple","banana","mango","orange","strawberry"];
// for (i=0;i<fruits.length;i++){
//     document.write(fruits[i] + "<br>")
// }
// document.write("<br>")
// for (i=0;i<fruits.length;i++){
//     document.write("Element at index " + i + " is " + fruits[i] + "<br>")
// }

// Q6. Generate the following series in your browser. See 
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

//a
// document.write("<b> counting: </b> " + "<br>" + "<br>")
// for (var i=1;i<=15;i++){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//b
// document.write("<b> Reverse counting: </b>" + "<br>" + "<br>")
// for (var i=10;i>=1;i--){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//c
// document.write("<b> Even: </b>" + "<br>" + "<br>")
// for(var i=0;i<=20;i+=2){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//d
// document.write("<b> Odd: </b>" + "<br>" + "<br>")
// for(var i=1;i<20;i+=2){
//     document.write(i + ", ")
// }
// document.write("<br>" + "<br>")

//e
// document.write("<b> Series: </b>" + "<br>" + "<br>")
// for(var i=2;i<=20;i+=2){
//     document.write(i + "K, ")
// }
// document.write("<br>" + "<br>")

// Q7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an 
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:


// var myArray = ["cake", "apple pie", "cookie", "chips", "patties"];
// var itemToSearch = prompt("Welcome to ABC Bakery.What do you want to order sir/maam?");
// var found = false;
// for (let i = 0; i < myArray.length; i++) {
//     if (myArray[i] === itemToSearch) {
//         found = true;
//         document.write(itemToSearch +" is available at index " + i + " in our bakery");
//         break;
//     }
// }
// if (!found) {
//     document.write("We are sorry " + itemToSearch + " is not availabe in our bakery" )
// }

//Q8. Write a program to identify the largest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

// var num = [24, 53, 78, 91, 12];
// var largestNum = num[0];
// for(var i = 1;i<num.length;i++){
//     if(num[i] > largestNum){
//         largestNum = num[i];
//     }
// }
// document.write("The largest number is " + largestNum);

//Q9. Write a program to identify the smallest number in the 
// given array.
// A = [24, 53, 78, 91, 12]

// var num1 = [24, 53, 78, 91, 12,];
// var smallestNum = num1[0];
// for ( var j=1;j<num1.length;j++){
//      if(num1[j]<smallestNum){
//         smallestNum = num1[j];
//      }
// }
// document.write("The smallest number is " + smallestNum);

//Q10. Write a program to print multiples of 5 ranging 1 to 100

// for (var i=5;i<=100;i++){
//     if(i%5 === 0){
//         document.write(i+",");
//     }
// }

//----------------------- HOME WORK -------------------------
//----------------------- FOR LOOPS -------------------------

// Q1. Write a statement in which loop is to run 10 times. 

// for(var i=1;i<=10;i++)
// console.log(i);

// Q2. Code the first line of a for loop with the usual counter name, 
// usual starting value, and usual increment. Run it 12 times 
// using <= to specify how many loops. 

// for (var i=1;i<=11;i++)
// console.log(i);

// Q3. What are the 5 characters missing from this code, excluding 
// any spaces that are missing? Type them in order, with no 
// spaces or commas between them. 
// for var i = 0 i <= 4 i++ 
// Note: Complete this statement by yourself 

// for(var i = 0;i<=4;i++)
// console.log(i);

// Q4. Code the first line of a for loop with a counter name that's 
// not i. Code the usual starting value and usual increment. Run 
// it 100 times using < to specify how many loops. 

// for (var count = 1; count <100; count++)
// console.log("the loop line is " + count); 

// Q5. Code the first line of a for loop with the usual counter and 
// the usual starting value. Run it 3 times using > to specify how 
// many loops. Decrement it with each iteration. 

// for(var i=3;i>0;i--)
// console.log("the decrement is " + i);

// Q6. The statement assigns the number of elements in the array 
// to the variable. 

// var arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr);

// Q7. Set a variable named “flag” with an initial Boolean value of 
// your choice. 

// var flag = true;

// Q8. Code the first line of a for loop with the usual counter, the 
// usual starting value, and the usual incrementing. Limit the 
// number of loops by the number of elements in the array 
// pets. 

// var pets = ["dog","cat","rabbit","dove","horse"];
// for(var i = 0; i<pets.length;i++)
// {
//     console.log(`Pet  ${i + 1} : ${pets[i]}`);
// }

// Q9. Coding Exercise: 
// Set a for loop to run 10 iterations. 
// On the second iteration, display the counter in an alert. (It should 
// be 1.) 
// Break out of the loop. 

// for(var i=1;i<10;i++)
// if(i === i) {
//     alert("the counter is : " + i );
// }

// Q10. Create an array which contains user names 
// Code a prompt with the message "Enter first name". The user's 
// response is assigned to firstName. 
// Code the first line of a for loop with the usual counter, the usual 
// starting value, and the usual incrementing. Limit the number of 
// loops by the number of elements in the array user names. Code 
// an if statement that tests the presense of (user name) in an 
// array. 
// If user name match Alert that "Enter". if not then alert ("Please 
// write correct user name"). 

// var userName = ["daniyal","noman","faraz","arsalan","mustafa"];

// var firstName = prompt("please enter first name");

// for(var i = 0 ; i < userName.length; i++)
// {
//     if(firstName === userName[i]){
//         alert("Welcome " + firstName + " !");

//     }if(i === userName.length - 1 ){
//         alert("please enter your correct user name");
//     }
// }

// Q11. Complete this code to display an alert if a match isn't found. 
// var matchFound = false; 
// for (var i = 0; i < list.length; i++) { 
// if (userInput === list[i]) { 
// alert("Match found"); 
// matchFound = true; break; 
//  } 
// }; 

// var List = [1,2,3,4,5,6,7,8,9,10];

// var matchFound = false ;

// for(var i =0; i<List.length; i++)
// {
//     if(userInput === list[i]){
//         alert("match found");
//         break;
//     }
// }

// var list = [1,2,3,4,5,6,7,8,9,0];

// var userInput = +prompt("please enter number");

// var matchFound = false;

// for (var i = 0; i < list.length; i++) {
//   if (userInput === list[i]) {
//     alert("Match found");
//     matchFound = true;
//     break;
//   }
// }

// if (!matchFound) {
//   alert("Match not found");
// }


// Q12. var firstArr = [“a”, “b”, “c”, “d”, “e”, “f”]; var secondArr = [1, 2, 
// 3, 4, 5, 6]; 
// Code the first line of a for loop with the usual counter, the usual 
// starting value, and the usual incrementing. Limit the number of 
// loops by the number of elements in the array firstArr. 
// In the scope of main loop Code the nested loop. Limit the number 
// of nested loops by the number of elements in the array secondArr. 
// After that concatenate the both loops. 
// Expected Output: 
// a1 
// a2 
// a3 
// a4 
// … 
// f6

// var firstArr = ["a","b","c","d","e","f"];

// var secondArr = [1,2,3,4,5,6];

// for(var i = 0;i<firstArr.length;i++){

// for (var j = 0;j<secondArr.length;j++){
//     console.log(firstArr[i] + secondArr[j]);
// }

// }