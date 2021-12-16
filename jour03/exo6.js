// 06 - Reverse

let sentence = 'Hello Konexio !';
let letters = sentence.split('');
let result = [];

for (let i = letters.length - 1; i >= 0 ; i--) {
    result.push(letters[i]);
}
console.log(result.join(''));

// Methode 2

let result1 = "";

for (let i = sentence.length - 1; i >= 0; i--) {
    result1 += sentence[i];
}

console.log(result1);