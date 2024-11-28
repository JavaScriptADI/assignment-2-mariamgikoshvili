// 1. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.
let myName = "Mariam"

console.log(myName)

// 2. What is the difference between "5" and 5?
//answer : 5 is a number and "5" is a string

// 3. Declare a variable and assign a number as a value. Make sure the number is greater than 9. Print the variable to the console.

let a = 11
console.log(a)


// 4. Declare a variable and assign a boolean as a value. Print the variable to the console.
let isBoolean = true
console.log(isBoolean)



// 5. What operators give us a boolean result?
//answer : > , <, >=, <=, ==, ===, !=, !==



// 6. Declare a variable with the value of "Hello". Covert the value to upper case and print the converted value to the console.
let word = "Hello"
console.log(word.toUpperCase)


// 7. Declare another variable with the value of "World". Convert the value to lower case and print the converted value to the console.
let word2 = "World"
console.log(word2.toLowerCase)


// 8. What is the value of the variable text1 before and after the method is called?
let text1 = "Hello";

text1.toUpperCase(); 
console.log(text1);

// answer: before method the value is "Hello" and after method value is "HELLO"

// 9. What is the value of the variable text?
let text2 = 'Hello';
console.log(text2.toLowerCase());

// answer: the value is "hello"


// 10. Find an error in the following code:

let text3 = 'Hello';
console.log(text.toLowercase());

// answer: console.log(text.toLowerCase());


// 11. Find and fix the error in the following code

let age1 = prompt('How old are you?');
let nextAge = age + 1;
console.log(`Next year you will be ${nextAge}`);

// answer: let nextAge = parseInt(age) + 1;




// 12. Finish the code

let name = prompt('What is your name?');
let age2 = Number(prompt('How old are you?'));
let isInSixties = age2 >= 60 && age2 <= 70 /* <---- answer */

// finish the code so that it prints true if the age is in 60s

console.log(`${name} is in sixties: ${isInSixties}`)


// 13. What is the value of x?
let x = 5;
console.log(x++);
console.log(x);

// answer : 5 and 6

// 14. What is the value of y?

let y = 5;
console.log(++y);
console.log(y);

// answer : 6 and 6


// 15. What is x++ and x--?
// answer : x++ adds 1 to an x , x-- substracts 1 from x


// 16. What is the difference between ++x and x++?
// answer : ++x adds 1 before it is returned and x++ adds 1 after it is returned


// 17. If we try to declare variable without any value, what will be the value of the variable in the console?
//answer: undefined

// 18. Show the example of equality operator.
let m = 5
let n = 10

console.log(m == n) //false


// 19. Show the example of not equal operator.

let o = 5
let p = 10

console.log(o != p) //true


// 20. What's going on when we try to add string and number?

// answer : number will be converted to string and concatenated
