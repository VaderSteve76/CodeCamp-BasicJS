// One of the biggest problems with declaring variables with the var 
// keyword is that you can overwrite variable declarations without an error.

// var camper = 'James';
// var camper = 'David';
// console.log(camper);
// // logs 'David'

// As you can see in the code above, the camper variable is originally 
// declared as James and then overridden to be David. In a small application, 
// you might not run into this type of problem, but when your code becomes 
// larger, you might accidentally overwrite a variable that you did not intend 
// to overwrite. Because this behavior does not throw an error, searching 
// and fixing bugs becomes more difficult. A new keyword called let was introduced 
// in ES6 to solve this potential issue with the var keyword. If you were to replace 
// var with let in the variable declarations of the code above, the result would be an error.

// let camper = 'James';
// let camper = 'David'; // throws an error

// This error can be seen in the console of your browser. So unlike var, when 
// using let, a variable with the same name can only be declared once. Note 
// the "use strict". This enables Strict Mode, which catches common 
// coding mistakes and "unsafe" actions. For instance:

// "use strict";
// x = 3.14; // throws an error because x is not declared

// Update the code so it only uses the let keyword.
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();


// When you declare a variable with the var keyword, it is declared 
// globally, or locally if declared inside a function. The let keyword 
// behaves similarly, but with some extra features. When you declare a 
// variable with the let keyword inside a block, statement, or expression, 
// its scope is limited to that block, statement, or expression.

// For example:

// var numArray = [];
// for (var i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// // returns [0, 1, 2]
// console.log(i);
// // returns 3

// With the var keyword, i is declared globally. So when i++ is executed, 
// it updates the global variable. This code is similar to the following:

// var numArray = [];
// var i;
// for (i = 0; i < 3; i++) {
//   numArray.push(i);
// }
// console.log(numArray);
// // returns [0, 1, 2]
// console.log(i);
// // returns 3

// This behavior will cause problems if you were to create a function 
// and store it for later use inside a for loop that uses the i variable. 
// This is because the stored function will always refer to the 
// value of the updated global i variable.

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 3

// As you can see, printNumTwo() prints 3 and not 2. This is because 
// the value assigned to i was updated and the printNumTwo() returns 
// the global i and not the value i had when the function was created 
// in the for loop. The let keyword does not follow this behavior:

// 'use strict';
// let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function() {
//       return i;
//     };
//   }
// }
// console.log(printNumTwo());
// // returns 2
// console.log(i);
// // returns "i is not defined"

// i is not defined because it was not declared in the global scope. 
// It is only declared within the for loop statement. printNumTwo() 
// returned the correct value because three different i variables with 
// unique values (0, 1, and 2) were created by the let keyword within 
// the loop statement. Fix the code so that i declared in the if statement 
// is a separate variable than i declared in the first line of the function. 
// Be certain not to use the var keyword anywhere in your code. This exercise 
// is designed to illustrate the difference between how var and let keywords 
// assign scope to the declared variable. When programming a function similar 
// to the one used in this exercise, it is often better to use 
// different variable names to avoid confusion.
function checkScope() {
  'use strict';
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}
checkScope();


// The keyword let is not the only new way to declare variables. 
// In ES6, you can also declare variables using the const keyword.
// const has all the awesome features that let has, with the added 
// bonus that variables declared using const are read-only. They are 
// a constant value, which means that once a variable is 
// assigned with const, it cannot be reassigned.

// "use strict";
// const FAV_PET = "Cats";
// FAV_PET = "Dogs"; // returns error

// As you can see, trying to reassign a variable declared with 
// const will throw an error. You should always name variables 
// you don't want to reassign using the const keyword. This helps 
// when you accidentally attempt to reassign a variable that is 
// meant to stay constant. A common practice when naming constants 
// is to use all uppercase letters, with words separated by an underscore.
// Note: It is common for developers to use uppercase variable identifiers 
// for immutable values and lowercase or camelCase for mutable values 
// (objects and arrays). In a later challenge you will see an example of 
// a lowercase variable identifier being used for an array.
// Change the code so that all variables are declared using let or const. 
// Use let when you want the variable to change, and const when you want 
// the variable to remain constant. Also, rename variables declared with 
// const to conform to common practices, meaning constants should be in all caps.
// Passed
// var should not exist in your code.
// Passed
// SENTENCE should be a constant variable declared with const.
// Passed
// i should be declared with let.
// Passed
// console.log should be changed to print the SENTENCE variable.
function printManyTimes(str) {
  "use strict";
  // change code below this line
  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }
  // change code above this line
}
printManyTimes("freeCodeCamp");


// The const declaration has many use cases in modern JavaScript.
// Some developers prefer to assign all their variables using const 
// by default, unless they know they will need to reassign the value. 
// Only in that case, they use let. However, it is important to understand 
// that objects (including arrays and functions) assigned to a variable 
// using const are still mutable. Using the const declaration only 
// prevents reassignment of the variable identifier.

// "use strict";
// const s = [5, 6, 7];
// s = [1, 2, 3]; // throws error, trying to assign a const
// s[2] = 45; // works just as it would with an array declared with var or let
// console.log(s); // returns [5, 6, 45]

// As you can see, you can mutate the object [5, 6, 7] itself and the 
// variable s will still point to the altered array [5, 6, 45]. Like 
// all arrays, the array elements in s are mutable, but because const 
// was used, you cannot use the variable identifier s to point to a 
// different array using the assignment operator.
// An array is declared as const s = [5, 7, 2]. Change the array to 
// [2, 5, 7] using various element assignment.
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // change code below this line
  // s = [2, 5, 7]; <- this is invalid
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // change code above this line
}
editInPlace();


// As seen in the previous challenge, const declaration alone 
// doesn't really protect your data from mutation. To ensure 
// your data doesn't change, JavaScript provides a function 
// Object.freeze to prevent data mutation. Once the object is 
// frozen, you can no longer add, update, or delete properties 
// from it. Any attempt at changing the object will be rejected without an error.

// let obj = {
//   name:"FreeCodeCamp",
//   review:"Awesome"
// };
// Object.freeze(obj);
// obj.review = "bad"; // will be ignored. Mutation not allowed
// obj.newProp = "Test"; // will be ignored. Mutation not allowed
// console.log(obj); 
// // { name: "FreeCodeCamp", review:"Awesome"}

// In this challenge you are going to use Object.freeze to prevent 
// mathematical constants from changing. You need to freeze the 
// MATH_CONSTANTS object so that no one is able to alter the 
// value of PI, add, or delete properties.
function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);
  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


// In JavaScript, we often don't need to name our functions, 
// especially when passing a function as an argument to another 
// function. Instead, we create inline functions. We don't need 
// to name these functions because we do not reuse them anywhere else.
// To achieve this, we often use the following syntax:

// const myFunc = function() {
//   const myVar = "value";
//   return myVar;
// }

// ES6 provides us with the syntactic sugar to not have to write 
// anonymous functions this way. Instead, you can use arrow function syntax:

// const myFunc = () => {
//   const myVar = "value";
//   return myVar;
// }

// When there is no function body, and only a return value, arrow 
// function syntax allows you to omit the keyword return as well 
// as the brackets surrounding the code. This helps simplify 
// smaller functions into one-line statements:

// const myFunc = () => "value";

// This code will still return value by default.

// Rewrite the function assigned to the variable magic which 
// returns a new Date() to use arrow function syntax. Also 
// make sure nothing is defined using the keyword var.
const magic = () => {
  "use strict";
  return new Date();
};


// Just like a regular function, you can pass 
// arguments into an arrow function.
// // doubles input value and returns it
// const doubler = (item) => item * 2;
// If an arrow function has a single argument, the 
// parentheses enclosing the argument may be omitted.
// // the same function, without the argument parentheses
// const doubler = item => item * 2;
// It is possible to pass more than one argument into an arrow function.
// // multiplies the first input value by the second and returns it
// const multiplier = (item, multi) => item * multi;
// Rewrite the myConcat function which appends contents of arr2 to 
// arr1 so that the function uses arrow function syntax.
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));


// In order to help us create more flexible functions, 
// ES6 introduces default parameters for functions.
// Check out this code:
// const greeting = (name = "Anonymous") => "Hello " + name;
// console.log(greeting("John")); // Hello John
// console.log(greeting()); // Hello Anonymous
// The default parameter kicks in when the argument is not specified 
// (it is undefined). As you can see in the example above, the 
// parameter name will receive its default value "Anonymous" when you 
// do not provide a value for the parameter. You can add default 
// values for as many parameters as you want. Modify the function increment 
// by adding default parameters so that it will add 1 to number if value is not specified.
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6


// In order to help us create more flexible functions, ES6 introduces 
// the rest parameter for function parameters. With the rest parameter, 
// you can create functions that take a variable number of arguments. 
// These arguments are stored in an array that can be accessed 
// later from inside the function. Check out this code:

// function howMany(...args) {
//   return "You have passed " + args.length + " arguments.";
// }
// console.log(howMany(0, 1, 2)); 
// console.log(howMany("string", null, [1, 2, 3], { })); 

// The rest parameter eliminates the need to check the args array and 
// allows us to apply map(), filter() and reduce() on the parameters array.
// Modify the function sum using the rest parameter in such a way that 
// the function sum is able to take any number of arguments and return their sum.
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6


// ES6 introduces the spread operator, which allows us to expand arrays 
// and other expressions in places where multiple parameters or elements are expected.
// The ES5 code below uses apply() to compute the maximum value in an array:

// var arr = [6, 89, 3, 45];
// var maximus = Math.max.apply(null, arr); // returns 89

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. 
// Math.max() expects comma-separated arguments, but not an array. The spread 
// operator makes this syntax much better to read and maintain.

// const arr = [6, 89, 3, 45];
// const maximus = Math.max(...arr); // returns 89

// ...arr returns an unpacked array. In other words, it spreads the array. 
// However, the spread operator only works in-place, like in an argument to 
// a function or in an array literal. The following code will not work:
// const spreaded = ...arr; // will throw a syntax error
// Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // change this line

console.log(arr2);


// Destructuring assignment is special syntax introduced in ES6, 
// for neatly assigning values taken directly from an object.
// Consider the following ES5 code:
// const user = { name: 'John Doe', age: 34 };
// const name = user.name; // name = 'John Doe'
// const age = user.age; // age = 34

// Here's an equivalent assignment statement using the ES6 destructuring syntax:

// const { name, age } = user;
// // name = 'John Doe', age = 34

// Here, the name and age variables will be created and assigned the values of 
// their respective values from the user object. You can see how much cleaner this is.
// You can extract as many or few values from the object as you want.
// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables today and tomorrow the values of today 
// and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// change code below this line
const { today, tomorrow } = HIGH_TEMPERATURES;
// change code above this line
console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80


// Destructuring allows you to assign a new variable name when extracting values. You 
// can do this by putting the new name after a colon when assigning the value.
// Using the same object from the last example:
// const user = { name: 'John Doe', age: 34 };
// Here's how you can give new variable names in the assignment:
// const { name: userName, age: userAge } = user;
// // userName = 'John Doe', userAge = 34
// You may read it as "get the value of user.name and assign it 
// to a new variable named userName" and so on.
// Replace the two assignments with an equivalent destructuring 
// assignment. It should still assign the variables highToday and 
// highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// change code below this line
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// change code above this line
console.log(yesterday) // should be not defined
console.log(highToday); // should be 77
console.log(highTomorrow); // should be 80


// You can use the same principles from the previous two 
// lessons to destructure values from nested objects.
// Using an object similar to previous examples:

// const user = {
//   johnDoe: { 
//     age: 34,
//     email: 'johnDoe@freeCodeCamp.com'
//   }
// };

// Here's how to extract the values of object properties and 
// assign them to variables with the same name:

// const { johnDoe: { age, email }} = user;

// And here's how you can assign an object properties' 
// values to variables with different names:

// const { johnDoe: { age: userAge, email: userEmail }} = user;

// Replace the two assignments with an equivalent destructuring 
// assignment. It should still assign the variables lowToday and 
// highToday the values of today.low and today.high from the LOCAL_FORECAST object.
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// change code below this line
  const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;
// change code above this line
console.log(lowToday); // should be 64
console.log(highToday); // should be 77


// ES6 makes destructuring arrays as easy as destructuring objects.
// One key difference between the spread operator and array destructuring 
// is that the spread operator unpacks all contents of an array into a 
// comma-separated list. Consequently, you cannot pick or choose 
// which elements you want to assign to variables.
// Destructuring an array lets us do exactly that:

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b); // 1, 2

// The variable a is assigned the first value of the array, and b is assigned the 
// second value of the array. We can also access the value at any index in 
// an array with destructuring by using commas to reach the desired index:

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c); // 1, 2, 5

// Use destructuring assignment to swap the values of a and b so that a 
// receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
[a, b] = [b, a];
console.log(a); // should be 6
console.log(b); // should be 8


// In some situations involving array destructuring, we might 
// want to collect the rest of the elements into a separate array.
// The result is similar to Array.prototype.slice(), as shown below:

// const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
// console.log(a, b); // 1, 2
// console.log(arr); // [3, 4, 5, 7]

// Variables a and b take the first and second values from the array. 
// After that, because of the rest parameter's presence, arr gets the 
// rest of the values in the form of an array. The rest element only 
// works correctly as the last variable in the list. As in, you cannot 
// use the rest parameter to catch a subarray that leaves out the last 
// element of the original array. Use destructuring assignment with the 
// rest parameter to perform an effective Array.prototype.slice() so that 
// arr is a sub-array of the original array source with the first two elements omitted.
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  "use strict";
  const [a, b, ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // should be [3,4,5,6,7,8,9,10]
console.log(source); // should be [1,2,3,4,5,6,7,8,9,10];


// In some cases, you can destructure the object 
// in a function argument itself.

// Consider the code below:

// const profileUpdate = (profileData) => {
//   const { name, age, nationality, location } = profileData;
//   // do something with these variables
// }

// This effectively destructures the object sent into 
// the function. This can also be done in-place:

// const profileUpdate = ({ name, age, nationality, location }) => {
//   /* do something with these fields */
// }

// This removes some extra lines and makes our code look neat. 
// This has the added benefit of not having to manipulate an entire 
// object in a function — only the fields that are needed are 
// copied inside the function. Use destructuring assignment within 
// the argument to the function half to send only max and min inside the function.
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = ({ max, min }) => (max + min) / 2.0;
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015


// A new feature of ES6 is the template literal. This is a special 
// type of string that makes creating complex strings easier.
// Template literals allow you to create multi-line strings and to 
// use string interpolation features to create strings.

// Consider the code below:

// const person = {
//   name: "Zodiac Hasbro",
//   age: 56
// };

// // Template literal with multi-line and string interpolation
// const greeting = `Hello, my name is ${person.name}!
// I am ${person.age} years old.`;

// console.log(greeting); // prints
// // Hello, my name is Zodiac Hasbro!
// // I am 56 years old.

// A lot of things happened there. Firstly, the example uses backticks (`),
// not quotes (' or "), to wrap the string. Secondly, notice that the string 
// is multi-line, both in the code and the output. This saves inserting \n 
// within strings. The ${variable} syntax used above is a placeholder. Basically, 
// you won't have to use concatenation with the + operator anymore. To add 
// variables to strings, you just drop the variable in a template string and 
// wrap it with ${ and }. Similarly, you can include other expressions in your 
// string literal, for example ${a + b}. This new way of creating strings gives 
// you more flexibility to create robust strings. Use template literal syntax with 
// backticks to display each entry of the result object's failure array. Each entry 
// should be wrapped inside an li element with the class attribute text-warning, 
// and listed within the resultDisplayArray. Use an iterator method 
// (any kind of loop) to get the desired output.
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
  "use strict";
  const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`);
  return resultDisplayArray;
}
const resultDisplayArray = makeList(result.failure);


// ES6 adds some nice support for easily defining object literals.

// Consider the following code:

// const getMousePosition = (x, y) => ({
//   x: x,
//   y: y
// });

// getMousePosition is a simple function that returns an object 
// containing two properties. ES6 provides the syntactic sugar to 
// eliminate the redundancy of having to write x: x. You can simply 
// write x once, and it will be converted tox: x (or something equivalent) 
// under the hood. Here is the same function from above rewritten to use this new syntax:

// const getMousePosition = (x, y) => ({ x, y });

// Use object property shorthand with object literals to create 
// and return an object with name, age and gender properties.
const createPerson = (name, age, gender) => {
  "use strict";
  return {
    name,
    age,
    gender
  };
};
console.log(createPerson("Zodiac Hasbro", 56, "male"));


// When defining functions within objects in ES5, we 
// have to use the keyword function as follows:

// const person = {
//   name: "Taylor",
//   sayHello: function() {
//     return `Hello! My name is ${this.name}.`;
//   }
// };

// With ES6, You can remove the function keyword and colon 
// altogether when defining functions in objects. 
// Here's an example of this syntax:

// const person = {
//   name: "Taylor",
//   sayHello() {
//     return `Hello! My name is ${this.name}.`;
//   }
// };

// Refactor the function setGear inside the object 
// bicycle to use the shorthand syntax described above.
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);