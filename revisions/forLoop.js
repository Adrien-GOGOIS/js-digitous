// 01 - Somme des carrés

let result = 0;

for (let i = 5; i <= 10; i++) {
   result += i * i;
}

console.log(result);

// 02 - Comptons

let result1 = 0;

for (let i = 100; i <= 1000; i++) {
    if (i % 7 !== 0) {
        continue;
    } else {
        result1++;
    }
}

console.log(result1);

// 03 - Chanceux

let result2 = 0;

for (let i = 1; i <= 20; i++) {
    let launch = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    if (launch >= 5) {
        result2 += launch;
    }
}  

console.log(result2);

// 04 - Des boîtes 

// Affichera = 10, 34, 17, 30, 14

// 05 - Des Setiob

// Affichera = 12, 24, 33, 39, 42, 0

console.log('--------------');

// 06 - Encore des boîtes

// Affichera 0, 3, -3, 2,