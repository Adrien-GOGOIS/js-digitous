let tableau = [];

for (let i = 1; i <= 20; i++) {
    tableau.push(Math.floor(Math.random() * (100 + 1)));
}

console.log(tableau);

for (let j = 0; j < 20; j++) {
    tableau.sort((a, b) => a - b);
    if (tableau[j] === tableau[19]) {
        console.log(tableau[j]);
    }
}

// METHODE 2, moins capillo-tractée :

let max = tableau[0];

for (let k = 0; k < 20; k++) {
    if (tableau[k] > max) {
        max = tableau[k];
    }
}

console.log(max);
