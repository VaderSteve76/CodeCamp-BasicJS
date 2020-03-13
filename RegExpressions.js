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


// Up until now, you've looked at regexes to do literal matches of strings. 
// But sometimes, you might want to also match case differences. Case 
// (or sometimes letter case) is the difference between uppercase letters and 
// lowercase letters. Examples of uppercase are "A", "B", and "C". Examples 
// of lowercase are "a", "b", and "c". You can match both cases using what is 
// called a flag. There are other flags but here you'll focus on the flag that 
// ignores case - the i flag. You can use it by appending it to the regex. An 
// example of using this flag is /ignorecase/i. This regex can match the strings 
// "ignorecase", "igNoreCase", and "IgnoreCase".
// Write a regex fccRegex to match "freeCodeCamp", no matter its case. Your regex 
// should not match any abbreviations or variations with spaces.
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);


// So far, you have only been checking if a pattern exists or not within a string. 
// You can also extract the actual matches you found with the .match() method.
// To use the .match() method, apply the method on a string and pass in the regex 
// inside the parentheses. Here's an example:

// "Hello, World!".match(/Hello/);
// // Returns ["Hello"]
// let ourStr = "Regular expressions";
// let ourRegex = /expressions/;
// ourStr.match(ourRegex);
// // Returns ["expressions"]
// Apply the .match() method to extract the word coding.
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);


// So far, you have only been able to extract or search a pattern once.
// let testStr = "Repeat, Repeat, Repeat";
// let ourRegex = /Repeat/;
// testStr.match(ourRegex);
// // Returns ["Repeat"]
// To search or extract a pattern more than once, you can use the g flag.
// let repeatRegex = /Repeat/g;
// testStr.match(repeatRegex);
// // Returns ["Repeat", "Repeat", "Repeat"]

// Using the regex starRegex, find and extract both 
// "Twinkle" words from the string twinkleStar.
// Note
// You can have multiple flags on your regex like /search/gi
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);


// Sometimes you won't (or don't need to) know the exact characters 
// in your patterns. Thinking of all words that match, say, a misspelling 
// would take a long time. Luckily, you can save time using the wildcard character: .
// The wildcard character . will match any one character. The wildcard is 
// also called dot and period. You can use the wildcard character just like 
// any other character in the regex. For example, if you wanted to match "hug", 
// "huh", "hut", and "hum", you can use the regex /hu./ to match all four words.

// let humStr = "I'll hum a song";
// let hugStr = "Bear hug";
// let huRegex = /hu./;
// huRegex.test(humStr); // Returns true
// huRegex.test(hugStr); // Returns true

// Complete the regex unRegex so that it matches the strings "run", "sun", 
// "fun", "pun", "nun", and "bun". Your regex should use the wildcard character.
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);


// You learned how to match literal patterns (/literal/) and wildcard 
// character (/./). Those are the extremes of regular expressions, where 
// one finds exact matches and the other matches everything. There are 
// options that are a balance between the two extremes. You can search 
// for a literal pattern with some flexibility with character classes. 
// Character classes allow you to define a group of characters you wish 
// to match by placing them inside square ([ and ]) brackets.
// For example, you want to match "bag", "big", and "bug" but not "bog". 
// You can create the regex /b[aiu]g/ to do this. The [aiu] is the character 
// class that will only match the characters "a", "i", or "u".

// let bigStr = "big";
// let bagStr = "bag";
// let bugStr = "bug";
// let bogStr = "bog";
// let bgRegex = /b[aiu]g/;
// bigStr.match(bgRegex); // Returns ["big"]
// bagStr.match(bgRegex); // Returns ["bag"]
// bugStr.match(bgRegex); // Returns ["bug"]
// bogStr.match(bgRegex); // Returns null

// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex 
// to find all the vowels in the string quoteSample.
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; 
let result = quoteSample.match(vowelRegex);


// You saw how you can use character sets to specify a group of characters 
// to match, but that's a lot of typing when you need to match a large range 
// of characters (for example, every letter in the alphabet). Fortunately, 
// there is a built-in feature that makes this short and simple.
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
// For example, to match lowercase letters a through e you would use [a-e].

// let catStr = "cat";
// let batStr = "bat";
// let matStr = "mat";
// let bgRegex = /[a-e]at/;
// catStr.match(bgRegex); // Returns ["cat"]
// batStr.match(bgRegex); // Returns ["bat"]
// matStr.match(bgRegex); // Returns null

// Match all the letters in the string quoteSample.
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);


// Using the hyphen (-) to match a range of characters is not limited 
// to letters. It also works to match a range of numbers.
// For example, /[0-5]/ matches any number between 0 and 5, 
// including the 0 and 5. Also, it is possible to combine a range of 
// letters and numbers in a single character set.

// let jennyStr = "Jenny8675309";
// let myRegex = /[a-z0-9]/ig;
// // matches all letters and numbers in jennyStr
// jennyStr.match(myRegex);

// Create a single regex that matches a range of letters between h and s, 
// and a range of numbers between 2 and 6. Remember 
// to include the appropriate flags in the regex.
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex);


// So far, you have created a set of characters that you want to match, 
// but you could also create a set of characters that you do not want to 
// match. These types of character sets are called negated character sets.
// To create a negated character set, you place a caret character (^) after 
// the opening bracket and before the characters you do not want to match.
// For example, /[^aeiou]/gi matches all characters that are not a vowel. 
// Note that characters like ., !, [, @, / and white space are matched - 
// the negated vowel character set only excludes the vowel characters.
// Create a single regex that matches all characters that are not a number 
// or a vowel. Remember to include the appropriate flags in the regex.
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-9]/gi;
let result = quoteSample.match(myRegex); 


// Sometimes, you need to match a character (or group of characters) 
// that appears one or more times in a row. This means it occurs at 
// least once, and may be repeated. You can use the + character to 
// check if that is the case. Remember, the character or pattern has 
// to be present consecutively. That is, the character has to repeat 
// one after the other. For example, /a+/g would find one match in "abc" 
// and return ["a"]. Because of the +, it would also find a single match 
// in "aabc" and return ["aa"]. If it were instead checking the string 
// "abab", it would find two matches and return ["a", "a"] because the a 
// characters are not in a row - there is a b between them. Finally, 
// since there is no "a" in the string "bcd", it wouldn't find a match.
// You want to find matches when the letter s occurs one or more times in 
// "Mississippi". Write a regex that uses the + sign.
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // this is the solution
let result = difficultSpelling.match(myRegex);


// The last challenge used the plus + sign to look for characters 
// that occur one or more times. There's also an option that 
// matches characters that occur zero or more times.
// The character to do this is the asterisk or star: *.

// let soccerWord = "gooooooooal!";
// let gPhrase = "gut feeling";
// let oPhrase = "over the moon";
// let goRegex = /go*/;
// soccerWord.match(goRegex); // Returns ["goooooooo"]
// gPhrase.match(goRegex); // Returns ["g"]
// oPhrase.match(goRegex); // Returns null

// For this challenge, chewieQuote has been initialized as 
// "Aaaaaaaaaaaaaaaarrrgh!" behind the scenes. Create a regex 
// chewieRegex that uses the * character to match an uppercase 
// "A" character immediately followed by zero or more lowercase 
// "a" characters in chewieQuote. Your regex does not need flags 
// or character classes, and it should not match any of the other quotes.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);


// In regular expressions, a greedy match finds the longest possible part 
// of a string that fits the regex pattern and returns it as a match. The 
// alternative is called a lazy match, which finds the smallest possible 
// part of the string that satisfies the regex pattern. You can apply the 
// regex /t[a-z]*i/ to the string "titanic". This regex is basically a 
// pattern that starts with t, ends with i, and has some letters in between.
// Regular expressions are by default greedy, so the match would return 
// ["titani"]. It finds the largest sub-string possible to fit the pattern.
// However, you can use the ? character to change it to lazy matching. 
// "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
// Note: Parsing HTML with regular expressions should be avoided, but pattern 
// matching an HTML string with regular expressions is completely fine.
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the text 
// "<h1>Winter is coming</h1>". Remember the wildcard . in a regular 
// expression matches any character.
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // it's the answer!
let result = text.match(myRegex);


// Time to pause and test your new regex writing skills. A group 
// of criminals escaped from jail and ran away, but you don't know 
// how many. However, you do know that they stay close together when 
// they are around other people. You are responsible for finding all 
// of the criminals at once.
// Here's an example to review how to do this:

// The regex /z+/ matches the letter z when it appears one or more times 
// in a row. It would find matches in all of the following strings:

// "z"
// "zzzzzz"
// "ABCzzzz"
// "zzzzABC"
// "abczzzzzzzzzzzzzzzzzzzzzabc"

// But it does not find matches in the following strings 
// since there are no letter z characters:

// ""
// "ABC"
// "abcabc"

// Write a greedy regex that finds one or more criminals within a 
// group of other people. A criminal is represented by the capital letter C.
let crowd = "P1P2P3P4P5P6CCCP7P8P9";
let reCriminals = /C+/;
let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);


// Prior challenges showed that regular expressions can be used 
// to look for a number of matches. They are also used to search 
// for patterns in specific positions in strings. In an earlier 
// challenge, you used the caret character (^) inside a character 
// set to create a negated character set in the form 
// [^thingsThatWillNotBeMatched]. Outside of a character set, the 
// caret is used to search for patterns at the beginning of strings.

// let firstString = "Ricky is first and can be found.";
// let firstRegex = /^Ricky/;
// firstRegex.test(firstString);
// // Returns true
// let notFirst = "You can't find Ricky now.";
// firstRegex.test(notFirst);
// // Returns false

// Use the caret character in a regex to find "Cal" 
// only in the beginning of the string rickyAndCal.
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);