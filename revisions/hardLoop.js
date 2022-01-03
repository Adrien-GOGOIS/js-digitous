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