// 01 - Sum

let numbers = [];

for (let i = 1; i <= 50; i++) {
    numbers.push(Math.floor(Math.random() * (100 + 1)));
}

console.log(numbers);

let result = 0;

for (let j = 0; j <= numbers.length - 1; j++) {
    result += numbers[j];
}

console.log(result);

// 02 - Max

let numbers1 = [];

for (let k = 1; k <= 50; k++) {
    numbers1.push(Math.floor(Math.random() * (200 - 50 + 1) + 50));
}

console.log(numbers1);

let result1 = null;

for (let m = 0; m <= numbers1.length; m++) {
    if (numbers1[m] > result1) {
        result1 = numbers1[m];
    }
}

console.log(result1);

console.log('__________________');

// 03 - Unique

let numbers2 = [];

for (let k = 1; k <= 50; k++) {
    numbers2.push(Math.floor(Math.random() * (200 - 50 + 1) + 50));
}

console.log(numbers2);

let result3 = null;
let n = 0;

while (n <= numbers2.length - 1) {

    if (numbers2[n] >= 75 && numbers2[n] <= 100) {
    result3 = numbers2[n];
    }

    n++;
}

console.log(result3);
console.log('-------------------------------')

// 04 - Nested Loop

const words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
let splited = [];
let result4 = 0;

for (let p = 0; p <= words.length - 1; p++) {
    splited.push(words[p].split(''));

    for (let q = 0; q <= splited.length - 1; q++) {
        if (splited[q] === 'o') {
            result4++;
        }
    }
}


console.log(result4);