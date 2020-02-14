// this is a line-comment

/* this is a 
  multi line comment */

  // Example
var ourName;

// Declare myName below this line
var myName;

// Setup
var a;
var b = 2;

// Only change code below this line
// Assign the value 7 to variable a.
// Assign the contents of a to variable b.
var a = 7;
var b = a;


/* Initialize these three variables
Initialize the three variables a, b, and c with 5, 10, and "I am a" 
respectively so that they will not be undefined. */
var a = 5;
var b = 10;
var c = "I am a";
// Do not change code below this line
a = a + 1;
b = b + 5;
c = c + " String!";


/* Write variable names in JavaScript in camelCase. 
In camelCase, multi-word variable names have the first word 
in lowercase and the first letter of each subsequent word is capitalized.
*/ 
// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;


// JavaScript uses the + symbol as an addition operator when placed between two numbers.
// Example: myVar = 5 + 10; // assigned 15
// Change the 0 so that sum will equal 20.
var sum = 10 + 10;

// JavaScript uses the - symbol for subtraction.
// Change the 0 so the difference is 12
// var sum = 45 - 0;
var sum = 45 - 33;

// JavaScript uses the * symbol for multiplication of two numbers.
// Example: myVar = 13 * 13; // assigned 169
// Change the 0 so that product will equal 80.
var myVar = 8 * 10;

// JavaScript uses the / symbol for division.
// Example: myVar = 16 / 2; // assigned 8
// Change the 0 so that the quotient is equal to 2.
var quotient = 66 / 33;

// You can easily increment or add one to a variable with the ++ operator.
// i++; is the equivalent of i = i + 1;
// Note The entire line becomes i++;, eliminating the need for the equal sign.
// Change the code to use the ++ operator on myVar.
var myVar = 87;
// Only change code below this line
// myVar = myVar + 1;
++myVar;

// You can easily decrement or decrease a variable by one with the -- operator.
// i--; is the equivalent of i = i - 1;
// Note The entire line becomes i--;, eliminating the need for the equal sign.
// Change the code to use the -- operator on myVar.
var myVar = 11;
// Only change code below this line
// myVar = myVar - 1;
--myVar;

// We can store decimal numbers in variables too. 
// Decimal numbers are sometimes referred to as 
// floating point numbers or floats.
// Note Not all real numbers can accurately be 
// represented in floating point. 
// This can lead to rounding errors. 
// Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7)
var ourDecimal = 5.7;
var myDecimal = 7.5;

// In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.
// Let's multiply two decimals together to get their product.
// Change the 0.0 so that product will equal 5.0.
// var product = 2.0 * 0.0;
var product = 2.5 * 2.0;

// Now let's divide one decimal by another.
// Change the 0.0 so that quotient will equal to 2.2.
// var quotient = 0.0 / 2.0; 
var quotient = 4.4 / 2.0;

// The remainder operator % gives the remainder of the division of two numbers.
// Example
//     5 % 2 = 1 because
//     Math.floor(5 / 2) = 2 (Quotient)
//     2 * 2 = 4
//     5 - 4 = 1 (Remainder)

// Usage
// In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2.
//     17 % 2 = 1 (17 is Odd)
//     48 % 2 = 0 (48 is Even)

// Note The remainder operator is sometimes incorrectly referred 
// to as the "modulus" operator. It is very similar to modulus, 
// but does not work properly with negative numbers.
// Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.
var remainder = 2 % 11;

// In programming, it is common to use assignments to modify the 
// contents of a variable. Remember that everything to the right 
// of the equals sign is evaluated first, so we can say:
// myVar = myVar + 5; to add 5 to myVar. 
// Since this is such a common pattern, there are 
// operators which do both a mathematical operation 
// and assignment in one step. One such operator is the += operator.
var a = 3;
var b = 17;
var c = 12;

// Only modify code below this line
a = a + 12;
b = 9 + b;
c = c + 7;

a += 12;
b += 9;
c += 7;


// Like the += operator, -= subtracts a number from a variable.
// myVar = myVar - 5; will subtract 5 from myVar. 
// This can be rewritten as: myVar -= 5;
// Convert the assignments for a, b, and c to use the -= operator.
var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a = a - 6;
b = b - 15;
c = c - 1;

a -=6;
b -= 15;
c -= 1;

// The *= operator multiplies a variable by a number. 
// myVar = myVar * 5; will multiply myVar by 5. 
// This can be rewritten as: myVar *= 5;
// Convert the assignments for a, b, and c to use the *= operator.
var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a = a * 5;
b = 3 * b;
c = c * 10;

a *= 5;
b *= 3;
c *= 10;

// The /= operator divides a variable by another number.
// myVar = myVar / 5; Will divide myVar by 5. 
// This can be rewritten as: myVar /= 5;
// Convert the assignments for a, b, and c to use the /= operator.
var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a = a / 12;
b = b / 4;
c = c / 11;

a /= 12;
b /= 4;
c /= 11;


// var myName = "your name";
// "your name" is called a string literal. 
// It is a string because it is a series of 
// zero or more characters enclosed in single or double quotes.
// Create two new string variables: myFirstName and myLastName 
// and assign them the values of your first and last name, respectively.
// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line
var myFirstName = "Steve";
var myLastName = "Alverson";


// When you are defining a string you must start and end with a single or double quote. 
// What happens when you need a literal quote: " or ' inside of your string?
// In JavaScript, you can escape a quote from considering it as an end of 
// string quote by placing a backslash (\) in front of the quote.
// var sampleStr = "Alan said, \"Peter is learning JavaScript\".";
// This signals to JavaScript that the following quote is not the end of 
// the string, but should instead appear inside the string. So if you 
// were to print this to the console, you would get:
// Alan said, "Peter is learning JavaScript".
// Use backslashes to assign a string to the myStr variable so 
// that if you were to print it to the console, you would see:
// I am a "double quoted" string inside "double quotes".
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
// badStr = 'Finn responds, "Let's go!"'; // Throws an error
// In the goodStr above, you can use both quotes safely by using 
// the backslash \ as an escape character. Note
// The backslash \ should not be confused with the 
// forward slash /. They do not do the same thing.
// Change the provided string to a string with single 
// quotes at the beginning and end and no escape characters.
// Right now, the <a> tag in the string uses double quotes 
// everywhere. You will need to change the outer quotes to 
// single quotes so you can remove the escape characters.
var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';




// Quotes are not the only characters that can be escaped inside a string. 
// There are two reasons to use escaping characters:

//     To allow you to use characters you may not otherwise be able to type out, such as a carriage return.
//     To allow you to represent multiple quotes in a string without JavaScript misinterpreting what you mean.

// We learned this in the previous challenge.

// Code	Output
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	word boundary
// \f	form feed

// Note that the backslash itself must be escaped in order to display as a backslash.

// Assign the following three lines of text into the single variable myStr using escape sequences.

//     FirstLine
//         \SecondLine
//     ThirdLine

// You will need to use escape sequences to insert special characters correctly. 
// You will also need to follow the spacing as it looks above, 
// with no spaces between escape sequences or words.

// Here is the text with the escape sequences written out.

// "FirstLinenewlinetabbackslashSecondLinenewlineThirdLine"
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";


// In JavaScript, when the + operator is used with a String value, 
// it is called the concatenation operator. You can build a new 
// string out of other strings by concatenating them together.
// Example: 'My name is Alan,' + ' I concatenate.'
// Note Watch out for spaces. Concatenation does not add spaces 
// between concatenated strings, so you'll need to add them yourself.
// Build myStr from the strings "This is the start. " and "This is the end." using the + operator.
var myStr = "This is the start. " + "This is the end.";

// We can also use the += operator to concatenate a string onto the end 
// of an existing string variable. This can be very helpful to break a 
// long string over several lines.
// Note Watch out for spaces. Concatenation does not add spaces between 
// concatenated strings, so you'll need to add them yourself.
// Build myStr over several lines by concatenating these two 
// strings: "This is the first sentence. " and "This is the second sentence." 
// using the += operator. Use the += operator similar to how it is shown in 
// the editor. Start by assigning the first string to myStr, then add on the second string.
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Sometimes you will need to build a string, Mad Libs style. 
// By using the concatenation operator (+), you can insert 
// one or more variables into a string you're building.
// Set myName to a string equal to your name and build 
// myStr with myName between the strings "My name is " and " and I am well!"
var myName = "Steve";
var myStr = "My name is" + myName + "and I am well";


// Just as we can build a string over multiple lines out 
// of string literals, we can also append variables to a 
// string using the plus equals (+=) operator.
// Set someAdjective and append it to myStr using the += operator.
// Example
// var anAdjective = "awesome!";
// var ourStr = "freeCodeCamp is ";
// ourStr += anAdjective;
// Only change code below this line
var someAdjective;
var myStr = "Learning to code is ";

var someAdjective = "fun";
var myStr = "Learning to code is ";
myStr += someAdjective;


// You can find the length of a String value by writing
// .length after the string variable or string literal.
// "Alan Peter".length; For example, if we created a 
// variable var firstName = "Charles", we could find out 
// how long the string "Charles" is by using the firstName.length property.
// Use the .length property to count the number of characters
// in the lastName variable and assign it to lastNameLength.
// Example
// var firstNameLength = 0;
// var firstName = "Ada";
// firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.
lastNameLength = lastName.length;


// Bracket notation is a way to get a character at 
// a specific index within a string.
// Most modern programming languages, like 
// JavaScript, don't start counting at 1 like 
// humans do. They start at 0. This is referred to 
// as Zero-based indexing.
// For example, the character at index 0 in the word 
// "Charles" is "C". So if var firstName = "Charles", you 
// can get the value of the first letter of the string by using firstName[0].
// Use bracket notation to find the first character in
// the lastName variable and assign it to firstLetterOfLastName.
// Example
// var firstLetterOfFirstName = "";
// var firstName = "Ada";
// firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];


// In JavaScript, String values are immutable, which 
// means that they cannot be altered once created.
// For example, the following code:

// var myStr = "Bob";
// myStr[0] = "J";

// cannot change the value of myStr to "Job", because 
// the contents of myStr cannot be altered. Note that 
// this does not mean that myStr cannot be changed, just 
// that the individual characters of a string literal cannot 
// be changed. The only way to change myStr would be to assign 
// it with a new string, like this:

// var myStr = "Bob";
// myStr = "Job";

// Correct the assignment to myStr so it contains the string value 
// of Hello World using the approach shown in the example above.

// Setup
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Fix Me
myStr = "Hello World";


// You can also use bracket notation to get the 
// character at other positions within a string.
// Remember that computers start counting at 0, 
// so the first character is actually the zeroth character.
// Let's try to set thirdLetterOfLastName to equal the 
// third letter of the lastName variable using bracket notation.

// Example
// var firstName = "Ada";
// var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";
// Only change code below this line.
var thirdLetterOfLastName = lastName;
var thirdLetterOfLastName = lastName[2];


// In order to get the last letter of a string, 
// you can subtract one from the string's length.
// For example, if var firstName = "Charles", you 
// can get the value of the last letter of the string by using firstName[firstName.length - 1].
// Use bracket notation to find the last character in the lastName variable.

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";
// Only change code below this line.
var lastLetterOfLastName = lastName;
var lastLetterOfLastName = lastName[lastName.length - 1];


// You can use the same principle we just used to retrieve 
// the last character in a string to retrieve the Nth-to-last 
// character. For example, you can get the value of the third-to-last letter of the 
// var firstName = "Charles" string by using firstName[firstName.length - 3]
// Use bracket notation to find the second-to-last character in the lastName string.
// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";
// Only change code below this line
var secondToLastLetterOfLastName = lastName;
var secondToLastLetterOfLastName = lastName[lastName.length - 2];




// We will now use our knowledge of strings to build a "Mad Libs" 
// style word game we're calling "Word Blanks". You will create an 
// (optionally humorous) "Fill in the Blanks" style sentence.
// In a "Mad Libs" game, you are provided sentences with some 
// missing words, like nouns, verbs, adjectives and adverbs. 
// You then fill in the missing pieces with words of your choice 
// in a way that the completed sentence makes sense.
// Consider this sentence - "It was really ____, and we ____ ourselves ____". 
// This sentence has three missing pieces- an adjective, a verb and an adverb, 
// and we can add words of our choice to complete it. 
// We can then assign the completed sentence to a variable as follows:
// var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
// In this challenge, we provide you with a noun, a verb, an adjective 
// and an adverb. You need to form a complete sentence using 
// words of your choice, along with the words we provide.
// You will need to use the string concatenation operator + to build a 
// new string, using the provided variables: myNoun, myAdjective, myVerb, 
// and myAdverb. You will then assign the formed string to the wordBlanks 
// variable. You should not change the words assigned to the variables.
// You will also need to account for spaces in your string, so that the 
// final sentence has spaces between all the words. The result should be a complete sentence.
var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = ""; // Only change this line;
var wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";


// With JavaScript array variables, we can store 
// several pieces of data in one place.
// You start an array declaration with an opening 
// square bracket, end it with a closing square bracket, 
// and put a comma between each entry, like this:
// var sandwich = ["peanut butter", "jelly", "bread"].
// Modify the new array myArray so that it contains both 
// a string and a number (in that order).
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = [];
var myArray = ["Steve", 43];


// You can also nest arrays within other arrays, 
// like this: [["Bulls", 23], ["White Sox", 45]]. 
// This is also called a multi-dimensional array.
// Create a nested array called myArray.
// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [];
var myArray = [["Steve", 43], ["Jen", 30]];


// We can access the data inside arrays using indexes.
// Array indexes are written in the same bracket notation 
// that strings use, except that instead of specifying a 
// character, they are specifying an entry in the array. 
// Like strings, arrays use zero-based indexing, so the first 
// element in an array has an index of 0.
// Example
// var array = [50,60,70];
// array[0]; // equals 50
// var data = array[1];  // equals 60
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // equals 50

// Setup
var myArray = [50,60,70];
// Only change code below this line.
// Create a variable called myData and set it to 
// equal the first value of myArray using bracket notation.
var myData = myArray[0];


// Unlike strings, the entries of arrays are 
// mutable and can be changed freely.
// Example
// var ourArray = [50,40,30];
// ourArray[0] = 15; // equals [15,40,30]
// Note
// There shouldn't be any spaces between the 
// array name and the square brackets, like array [0]. 
// Although JavaScript is able to process this correctly, 
// this may confuse other programmers reading your code.
// Modify the data stored at index 0 of myArray to a value of 45.
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].

// Setup
var myArray = [18,64,99];
// Only change code below this line.
myArray[0] = 45;


// One way to think of a multi-dimensional array, 
// is as an array of arrays. When you use brackets to 
// access your array, the first set of brackets refers 
// to the entries in the outer-most (the first level) array, 
// and each additional pair of brackets refers to the next level of entries inside.
// Example
// var arr = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9],
//   [[10,11,12], 13, 14]
// ];
// arr[3]; // equals [[10,11,12], 13, 14]
// arr[3][0]; // equals [10,11,12]
// arr[3][0][1]; // equals 11
// Note There shouldn't be any spaces between the array 
// name and the square brackets, like array [0][0] and even
// this array [0][0] is not allowed. Although JavaScript is 
// able to process this correctly, this may confuse other programmers reading your code.
// Using bracket notation select an element from myArray such that myData is equal to 8.
// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray = [0][0];
var myData = myArray[2][1];


// An easy way to append data to the end of an array is via the push() function.
// .push() takes one or more parameters and "pushes" them onto the end of the array.
// var arr = [1,2,3];
// arr.push(4);
// // arr is now [1,2,3,4]
// Push ["dog", 3] onto the end of the myArray variable.
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);


// Another way to change the data in an array is with the .pop() function.
// .pop() is used to "pop" a value off of the end of an array. 
// We can store this "popped off" value by assigning it to a variable. 
// In other words, .pop() removes the last element from an array and returns that element.
// Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.
// var threeArr = [1, 4, 6];
// var oneDown = threeArr.pop();
// console.log(oneDown); // Returns 6
// console.log(threeArr); // Returns [1, 4]
// Use the .pop() function to remove the last item from myArray, 
// assigning the "popped off" value to removedFromMyArray.
// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();


// pop() always removes the last element of an array. 
// What if you want to remove the first?
// That's where .shift() comes in. It works just like .pop(), 
// except it removes the first element instead of the last.
// Use the .shift() function to remove the first item from myArray, 
// assigning the "shifted off" value to removedFromMyArray.
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
// Setup
var myArray = [["John", 23], ["dog", 3]];
// Only change code below this line.
var removedFromMyArray = myArray.shift();


// Not only can you shift elements off of the beginning 
// of an array, you can also unshift elements to the beginning 
// of an array i.e. add elements in front of the array.
// .unshift() works exactly like .push(), but instead of adding 
// the element at the end of the array, unshift() adds the 
// element at the beginning of the array.
// Add ["Paul",35] to the beginning of the myArray variable using unshift().
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line.
myArray.unshift(["Paul", 35]);


// Create a shopping list in the variable myList. 
// The list should be a multi-dimensional array containing several sub-arrays.
// The first element in each sub-array should contain a string with the 
// name of the item. The second element should be a number representing the quantity i.e.
// ["Chocolate Bar", 15]
// There should be at least 5 sub-arrays in the list.
var myList = [
  ["Steve", 43],
  ["Donna", 64],
  ["Skyler", 22],
  ["Cai", 28],
  ["Jen", 30]
];


// In JavaScript, we can divide up our code 
// into reusable parts called functions.
// Here's an example of a function:

// function functionName() {
//   console.log("Hello World");
// }

// You can call or invoke this function by using 
// its name followed by parentheses, like this: 
// functionName(); Each time the function is called 
// it will print out the message "Hello World" on 
// the dev console. All of the code between the curly 
// braces will be executed every time the function is called.

// Create a function called reusableFunction which prints "Hi World" to the dev console.
// Call the function.

// Example
function ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction();
// Only change code below this line
function reusableFunction() {
  console.log("Hi World");
}

reusableFunction();


// Parameters are variables that act as placeholders 
// for the values that are to be input to a function 
// when it is called. When a function is defined, it is 
// typically defined along with one or more parameters. 
// The actual values that are input (or "passed") into 
// a function when it is called are known as arguments.
// Here is a function with two parameters, param1 and param2:

// function testFun(param1, param2) {
//   console.log(param1, param2);
// }

// Then we can call testFun: testFun("Hello", "World"); 
// We have passed two arguments, "Hello" and "World". 
// Inside the function, param1 will equal "Hello" and 
// param2 will equal "World". Note that you could call 
// testFun again with different arguments and the parameters 
// would take on the value of the new arguments.
// Create a function called functionWithArgs that accepts 
// two arguments and outputs their sum to the dev console.
// Call the function with two numbers as arguments.
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5
// Only change code below this line.
function functionWithArgs(a, b) {
  console.log(a +b);
}
functionWithArgs(5, 5);


// In JavaScript, scope refers to the visibility of variables. 
// Variables which are defined outside of a function 
// block have Global scope. This means, they can be 
// seen everywhere in your JavaScript code.
// Variables which are used without the var keyword 
// are automatically created in the global scope. 
// This can create unintended consequences elsewhere 
// in your code or when running a function again. 
// You should always declare your variables with var.
// Using var, declare a global variable myGlobal outside 
// of any function. Initialize it with a value of 10.
// Inside function fun1, assign 5 to oopsGlobal without using the var keyword.

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


// Variables which are declared within a function, 
// as well as the function parameters have local scope. 
// That means, they are only visible within that function.
// Here is a function myTest with a local variable called loc.

// function myTest() {
//   var loc = "foo";
//   console.log(loc);
// }
// myTest(); // logs "foo"
// console.log(loc); // loc is not defined

// loc is not defined outside of the function.
// Declare a local variable myVar inside myLocalScope. 
// Run the tests and then follow the instructions commented out in the editor.
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "Hi";
  console.log(myVar);
}
myLocalScope();
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);
// Now remove the console log line to pass the test


// It is possible to have both local and global variables 
// with the same name. When you do this, the local variable 
// takes precedence over the global variable.

// In this example:

// var someVar = "Hat";
// function myFun() {
//   var someVar = "Head";
//   return someVar;
// }

// The function myFun will return "Head" because the 
// local version of the variable is present.
// Add a local variable to myOutfit function to 
// override the value of outerWear with "sweater".
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();


// We can pass values into a function with arguments. 
// You can use a return statement to send a value back out of a function.

// Example

// function plusThree(num) {
//   return num + 3;
// }
// var answer = plusThree(5); // 8

// plusThree takes an argument for num and returns a value equal to num + 3.

// Create a function timesFive that accepts one argument, multiplies it by 5, 
// and returns the new value. See the last line in the editor for an example 
// of how you can test your timesFive function.
// Example
function minusSeven(num) {
  return num - 7;
}

// Only change code below this line
function timesFive(num) {
  return num * 5;
}
console.log(minusSeven(10));


// A function can include the return statement but 
// it does not have to. In the case that the function 
// doesn't have a return statement, when you call it, 
// the function processes the inner code but the returned value is undefined.

// Example
// var sum = 0;
// function addSum(num) {
//   sum = sum + num;
// }
// addSum(3); // sum will be modified but returned value is undefined

// addSum is a function without a return statement. The 
// function will change the global sum variable but the 
// returned value of the function is undefined.
// Create a function addFive without any arguments. This 
// function adds 5 to the sum variable, 
// but its returned value is undefined.
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line
addThree();
addFive();


// If you'll recall from our discussion of Storing 
// Values with the Assignment Operator, everything to 
// the right of the equal sign is resolved before the 
// value is assigned. This means we can take the return 
// value of a function and assign it to a variable.
// Assume we have pre-defined a function sum which 
// adds two numbers together, then:
// ourSum = sum(5, 12);
// will call sum function, which returns a value of 
// 17 and assigns it to ourSum variable.
// Call the processArg function with an argument of 
// 7 and assign its return value to the variable processed.
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}
changed = change(10);
// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7);


// In Computer Science a queue is an abstract 
// Data Structure where items are kept in order. 
// New items can be added at the back of the queue 
// and old items are taken off from the front of the queue.
// Write a function nextInLine which takes an array (arr) 
// and a number (item) as arguments. Add the number to the 
// end of the array, then remove the first element of the array.
// The nextInLine function should then return the element that was removed.
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var removed = arr.shift();
  return removed;  // Change this line
}
// Test Setup
var testArr = [1,2,3,4,5];
// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));


// Another data type is the Boolean. Booleans may only 
// be one of two values: true or false. They are basically 
// little on-off switches, where true is "on" and false is 
// "off." These two states are mutually exclusive. Note
// Boolean values are never written with quotes. The 
// strings "true" and "false" are not Boolean and have 
// no special meaning in JavaScript.
// Modify the welcomeToBooleans function so that it returns 
// true instead of false when the run button is clicked.
function welcomeToBooleans() {
  // Only change code below this line.
  return true; // Change this line
  // Only change code above this line.
}
