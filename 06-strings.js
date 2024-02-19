let name = "Chandrachood Chauhan"

// another way of declaring a string

let userName = new String("Chandrachood Chauhan")
let stringLength = userName.length

// methods in string

console.log(userName.charAt(5));                                        // display the character at index 5 in the string
console.log(`The String '${userName}' has ${stringLength} characters`); // concating strings 

console.log(userName.substring(3, 5));                // displays the string from index 3 to index (5-1) = 4
console.log(userName.substring(3));
console.log(userName.substring('r', 8));             // treats the value 'r' as 0 and displays the string upto index (8-1) = 7
console.log(userName.substring('r'));
console.log(userName.substring(-1, 8));             // treats the value -1 as 0 and displays the string upto index 7
console.log(userName.substring(-1));


// another method of concating string
let str = "My name is "
console.log(str.concat(" ", userName));

console.log(str.endsWith("is ")); // checks whether the String ends with the given String 
console.log(str.includes("is"));  // checks whether the String contains the given String

let str1 = "     Hello World"
console.log(str1);
console.log(str1.trim());

console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));

let str2 = "HeLlo WoRld"
console.log(str2.toLowerCase());
console.log(str2.toUpperCase());

// another way of extraction of extraction of string

let paragraph = "The quick brown fox jumps over the lazy dog."
console.log(paragraph.slice(3, 9));
console.log(paragraph.slice(3));
console.log(paragraph.slice(-9, -5));

// coverting a String into an array

let words = paragraph.split(" ")    // splits the String into individual words
let chars = paragraph.split("")     // splits the String into individual characters
console.log(words);
console.log(chars);
console.log(words[3]);
console.log(chars[8]);

// replacing a String with new String 

console.log(paragraph.replace(" ", "-"));
console.log(paragraph.replaceAll(" ", "-"));
