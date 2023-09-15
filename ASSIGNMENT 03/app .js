//----------------- Assignment # 14-16------------------------
//------------------------- ARRAYS----------------------------

// Q1. Declare an empty array using JS literal notation to store
// student names in future.

var studentNames = [];

// Q2. Declare an empty array using JS object notation to store
// student names in future.



// Q3. Declare and initialize a strings array.

var stringArray = ["red","green","orange","blue"];

// Q4. Declare and initialize a numbers array.

var numberArray = [1,2,3,4,5];

// Q5. Declare and initialize a boolean array.

var booleanArray = [true,false,true,false,true];

// Q6. Declare and initialize a mixed array.

var mixedArray = ["apple", 42, true, "banana", false, 7];

//Q7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:

var eduArray = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PHD"];
document.write("Qualification" + "</br>" + "</br>" + "1)" + eduArray[0] + "</br>" + "2)" + eduArray[1] + "</br>" + "3)" + eduArray[2] + "</br>" + "4)" + eduArray[3] + "</br>" + "5)" + eduArray[4] + "</br>" + "6)" + eduArray[5] + "</br>" + "7)" + eduArray[6] + "</br>");

// Q8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:

var students = [];
var score = [];

for (var i = 1; i <=3; i++){
    var studentsName = prompt("enter the students name");
    var marks = +prompt ("enter the marks of students");

    students.shift(studentsName);
    score.shift(marks);

    document.write( "the score of " + studentsName + " is " + marks + "." +  "Percentage = " + (marks / 500) * 100  + "% ." + "</br>");
}

// Q9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors = ["red","green","blue","yellow","purple"];

colors.pop();
colors.push("sky");
colors.shift();
colors.unshift("grey");
colors.splice(1,2,"dark blue");
colors.slice(0,2);

console.log(colors);

// Q10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.

var studentsScore = [98,1,45,57,90];
studentsScore.sort((a,b) => a-b);
document.write("this is the ascending order = " + studentsScore);

// Q11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.

var cities = ["karachi", "peshawar", "quetta", "islamabad", "Multan"];
var selectedCities = [];

for (var i = 0; i < 3; i++) {
  if (cities[i] !== undefined) {
    selectedCities.push(cities[i]);
  }
}
document.write(cities); 
document.write(selectedCities); 

// Q12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["this","is","my","cat."];

var singlestring = arr.join("");

document.write(singlestring);

//Q13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)

var fifo = ["keybord","mouse","printer","moniter"];

fifo.push("keyboard");
fifo.push("mouse");
fifo.push("printer");
fifo.push("moniter");

var firstvalue = fifo.shift()
var secondvalue = fifo.shift()
var thirdvalue = fifo.shift()
var fourthvalue = fifo.shift()

console.log(fifo);

console.log(firstvalue);
console.log(secondvalue);
console.log(thirdvalue);
console.log(fourthvalue);

// Q14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-First Out)

var lifo = ["keybord","mouse","printer","moniter"];


lifo.push("keyboard");
lifo.push("mouse");
lifo.push("printer");
lifo.push("moniter");

var lastValue = lifo.pop()
var secondlastvalue = lifo.pop()
var thirdlastvalue = lifo.pop()
var fourthlastvalue = lifo.pop()

console.log(lifo);

console.log(lastValue);
console.log(secondlastvalue);
console.log(thirdlastvalue);
console.log(fourthlastvalue);


// Q15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method:

var mobiles = ["apple","samsung","motorola","nokia","sony","haier"];

document.write("<select>" + "<option>" + "nokia" + "</option>"  + "<option>" + "apple" + "</option>" + + "<option>" + "samsung" + "</option>" + "<option>" + "motorola" + "</option>" + "<option>" + "sony" + "</option>" + "<option>" + "haier" + "</option>" + "</select>");


