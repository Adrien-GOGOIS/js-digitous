// BONUS FizzBuzz

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizz');
    } else if (i % 5 === 0) {
        console.log('buzz');
    } else if (i % 3 === 0) {
        console.log('fizzbuzz');
    } else if (i % 7 === 0) {
        continue;
    } else {
        console.log(i);
    } 
}

// BONUS II

let total = 0;
const limit = 10;
let result = null;

while (total <= limit) {
    result = result + total;
    total++;
}
console.log(result);

// BONUS III

const megaDev = ['Kevin', 'Jessica', 'Charles', 'Chris', 'Andrei', 'Pauline', 'Lysiane', 'Djibril', 'JL', 'Caroline', 
'Chi', 'Axel', 'Adrien', 'David', 'Anita', 'Nicolas'];

console.log(megaDev[Math.floor(Math.random() * megaDev.length)]);

