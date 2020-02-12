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