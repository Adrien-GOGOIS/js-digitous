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