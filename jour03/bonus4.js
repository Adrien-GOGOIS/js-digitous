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