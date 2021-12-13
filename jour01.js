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

// BONUS

// Selection d'un caractère
var changed = 'Bonjour';
console.log(changed.charAt(3));
console.log(changed[3]);

// Remplacement d'une chaine de caractère
var method1 = changed.replace('o', 'a').replace('o', 'a');
console.log(method1);
// Ou alors :
var method2 = changed.replace(/o/g, 'a');
console.log(method2);
// Ou alors :
let method3 = changed.split('o');
console.log(method3);
method3 = method3.join('a');
console.log(method3);

//*  *//

let string1 = "konexio";
let string2 = new String(string1);
let number1 = 32;
let boolean1 = false;
console.log(typeof string1);
console.log(typeof string2);
console.log(typeof number1);
console.log(typeof boolean1);

//* *//

let result = '1 + 1';
let result2 = new String('1 + 1');
console.log(eval(result)); // Traite la chaîne primitive comme code source
console.log(eval(result2));
console.log(eval(result.valueOf())); // Result converti la string en primitif

/* Echappement des caractères */

let chaineLongue = 'Voici une\nchaine longue'; // Methode 1
console.log(chaineLongue);
let chaineLongue2 = `Voici une
chaine longue`; // Methode 2
console.log(chaineLongue2);

let quotes = 'Voici une \"phrase\" avec guillemets';
console.log(quotes);