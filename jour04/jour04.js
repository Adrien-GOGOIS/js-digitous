// 01 - Object

const cat = {
    name : 'Garfield',
    age : 3,
    isCute : true,
};

console.table(cat);

if (cat.isCute === true) {
    console.log('So cute !');
}


// 02 - Combine

const cat2 = {
    name : 'O\'Malley',
    age : 10,
    isCute : false
};

const cats = Object.assign(cat, cat2);
console.log(cat.age);
console.log(cat['age']);

console.log(cat2.isCute);
console.log(cat2['isCute']);

// 03 - Even

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

checkIfEven(1);
checkIfEven(3);
checkIfEven(10);
checkIfEven(123);
checkIfEven(2448);

// 04 - COMPARE

function compare(num1, num2) {
    if (num1 > num2) {
        console.log(`${num1} is bigger`);
    } else if (num2 > num1) {
        console.log(`${num2} is bigger`);
    } else {
        console.log('Both are the same');
    }
}

compare(2, 4);
compare(1, 0);
compare(3, 3);

// 05 - Add Up

function addUp(num) {
    for (let i = 1; i < 12; i++) {
        num = num + i;
    }
    console.log(num);
}

addUp(12);

// 06 - Time

function format(num) {
    let hours = Math.floor(num / 3600);
    let minutes = Math.floor((num % 3600) / 60);
    let seconds = Math.ceil(num % 60 % 60);

    console.log(`${hours} : ${minutes} : ${seconds}`);
}

format(3700);

