// 01 - Number

const integer = 102;
const float = 13.9;
console.log(integer, float);

// 02 - Convert

const basic = 34;
const stringified = basic.toString();
console.log(stringified);

// 03 - Round

const num = 1.5;
const rounded = Math.round(num);
console.log(rounded);

// 04 - Arithmétique

let test = 12;
let bis = 5;
console.log(test + bis);
console.log(test - bis);
console.log(test * bis);
console.log(test / bis);
console.log(test ** bis); // 12 puissance 5
console.log(test % bis); // Reste de la division 12/5 = 2 --> 'MODULO'

// 05 - Comparaison

test = 143;
bis = 219;
console.log(test > bis);
console.log(test < bis);
console.log(test === bis);
console.log(test !== bis);
console.log(test >= bis);
console.log(test <= bis);
console.log(test > bis);

// 06 - Condition

const limit = 50;
const score = 64;
score >= limit ? console.log('Ok good!') : console.log('Oh nooo...');

// 07 - Condition II

let password = 'azerty';
if (password.length >= 5) {
    console.log('The password is secure');
}

// 08 - Condition III

if (score >= limit && password.length >= 5) {
    console.log('Everything is good');
} else if (score >= limit || password.length >= 5) {
    console.log('Something is good');
} else {
    console.log('Nothing is good');
}

// BONUS

let random = Math.floor(Math.random() * 6 + 1);

random === 6 ? console.log('Yes I win!') : console.log('So close...');

// BONUS II

let month = 'October';

switch (month) {
    case 'January' :
        console.log('Winter');
        break;
    case 'February' :
        console.log('Winter');
        break;
    case 'March' :
        console.log('Winter');
        break;
    case 'April' :
        console.log('Spring');
        break;
    case 'May' :
        console.log('Spring');
        break;
    case 'June' :
        console.log('Spring');
        break;
    case 'July' :
        console.log('Summer');
        break;
    case 'August' :
        console.log('Summer');
        break;
    case 'September' :
        console.log('Summer');
        break;
    case 'October' :
        console.log('Fall');
        break;
    case 'November' :
        console.log('Fall');
        break;
    case 'December' :
        console.log('Fall');
        break;
}
console.log('END PROGRAM');

//METHODE 2 :

if (month === 'January' || month === 'February' || month === 'March') {
    console.log('Winter');
} else if (month === 'April' || month === 'May' || month === 'June') {
    console.log('Spring');
} else if (month === 'July' || month === 'August' || month === 'September') {
    console.log('Summer');
} else {
    console.log('Fall');
}
console.log('END PROGRAM');

// BONUS III

let roundedNumber = 3.4;
let result = roundedNumber - Math.floor(roundedNumber);

if (result >= 0.5) {
    roundedNumber = Math.ceil(roundedNumber);
    console.log(roundedNumber);
} else {
    roundedNumber = Math.floor(roundedNumber);
    console.log(roundedNumber);
}

//

let roundedNumber1 = 12.5;
let stringConvert = roundedNumber1.toString();
let splitNumber = stringConvert.split('.');

if (parseInt(splitNumber[1]) >= 5) {
    stringConvert = Math.ceil(stringConvert);
    console.log(stringConvert);
} else {
    stringConvert = Math.floor(stringConvert);
    console.log(stringConvert);
}



