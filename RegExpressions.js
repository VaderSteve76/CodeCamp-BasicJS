// Regular expressions are used in programming languages to 
// match parts of strings. You create patterns to help you 
// do that matching. If you want to find the word "the" in the 
// string "The dog chased the cat", you could use the following 
// regular expression: /the/. Notice that quote marks are not 
// required within the regular expression. JavaScript has multiple 
// ways to use regexes. One way to test a regex is using the .test() 
// method. The .test() method takes the regex, applies it to a string 
// (which is placed inside the parentheses), and returns true or 
// false if your pattern finds something or not.

// let testStr = "freeCodeCamp";
// let testRegex = /Code/;
// testRegex.test(testStr);
// // Returns true

// Apply the regex myRegex on the string myString using the .test() method.
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);


// In the last challenge, you searched for the word "Hello" 
// using the regular expression /Hello/. That regex searched 
// for a literal match of the string "Hello". Here's another 
// example searching for a literal match of the string "Kevin":

// let testStr = "Hello, my name is Kevin.";
// let testRegex = /Kevin/;
// testRegex.test(testStr);
// // Returns true

// Any other forms of "Kevin" will not match. For example, 
// the regex /Kevin/ will not match "kevin" or "KEVIN".

// let wrongRegex = /kevin/;
// wrongRegex.test(testStr);
// // Returns false

// A future challenge will show how to match those other forms as well.
// Complete the regex waldoRegex to find "Waldo" in the string 
// waldoIsHiding with a literal match.
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);


// Using regexes like /coding/, you can look for the pattern "coding" 
// in another string. This is powerful to search single strings, but 
// it's limited to only one pattern. You can search for multiple patterns 
// using the alternation or OR operator: |. This operator matches patterns 
// either before or after it. For example, if you wanted to match "yes" or 
// "no", the regex you want is /yes|no/. You can also search for more than 
// just two patterns. You can do this by adding more patterns with more OR 
// operators separating them, like /yes|no|maybe/. Complete the regex petRegex 
// to match the pets "dog", "cat", "bird", or "fish".
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);