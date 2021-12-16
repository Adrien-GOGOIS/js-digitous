// Access

const ingredients = ['eggs', 'milk', 'butter'];
console.log(ingredients[1]);
console.log(ingredients.indexOf('butter'));

let i = 0;
while (ingredients[i] !== 'butter') {
    i++;
}

console.log(i);