// 06 - Reverse

let sentence = 'Hello Konexio !';
let letters = sentence.split('');
let result = [];

for (let i = letters.length; i >= 0 ; i--) {
    result.push(letters[i]);
}
console.log(result.join(''));