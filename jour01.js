// 01 - Hello World

console.log('Hello World!');

// 02 - String

var test = 'My name is Adrien';
console.log(test);

// 03 - Concatenation

var name = 'Adrien';
console.log(`Nice to meet you ${name}`);

// 04 - String lenght

var testLenght = "I'm very long !";
console.log(testLenght.length);

// 05 - Replace

var food = 'croissant is meh';
food = food.replace('meh', 'so good');
console.log(food);

// 06 - Up and Down

let basic = 'This is cool';
let basicUp = basic.toUpperCase();
let basicDown = basic.toLowerCase();
console.log(basic, basicUp, basicDown);

// 07 - Split

let word = 'banana';
let letters = word.split('');
console.log(letters);

// 08 - Template

let age = 32;
let template = `I'm ${age} years old`;
console.log(template);
