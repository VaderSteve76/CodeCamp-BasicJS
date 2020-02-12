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