// 01 - Sum

let numbers = [];

for (let i = 1; i <= 50; i++) {
    numbers.push(Math.floor(Math.random() * (100 + 1)));
}

let result = 0;

for (let j = 0; j <= numbers.length - 1; j++) {
    result += numbers[j];
}

console.log(result);
console.log('------------EXO 2-----------');

// 02 - Max

let numbers1 = [];

for (let k = 1; k <= 50; k++) {
    numbers1.push(Math.floor(Math.random() * (200 - 50 + 1) + 50));
}

let result1 = null;

for (let m = 0; m <= numbers1.length; m++) {
    if (numbers1[m] > result1) {
        result1 = numbers1[m];
    }
}

console.log(result1);

console.log('________EXO 3__________');

// 03 - Unique

let numbers2 = [];

for (let k = 1; k <= 50; k++) {
    numbers2.push(Math.floor(Math.random() * (200 - 50 + 1) + 50));
}

let result3 = 0;
let N = numbers2.length;

while (N >= 0) {
    if (numbers2[N] >= 75 && numbers2[N] <= 100) {
        result3 = numbers2[N]; 
    }

    N--
}

console.log(result3);

console.log('---------------EXO 4----------------')

// 04 - Nested Loop

const tab = ["hello", "goodbye", 78, "no", "stop", "go go go"];

function splitWordsAddInTab(words) {

    // GUARD
    if (!Array.isArray(words)) {
        console.log('We need an array here!');
        return null;
    }

    let number0 = 0;

    for (let i = 0; i < words.length; i++) {

        // GUARD
        if (typeof(words[i]) !== 'string') {
            console.log('We need an array of string');
            return null;
        }

        let word = words[i].split("");

        for (let j = 0; j < word.length; j++) {
            if (word[j] === 'o') {
                number0++;
            }
        }
    }

    return number0;

}

console.log(splitWordsAddInTab(tab));