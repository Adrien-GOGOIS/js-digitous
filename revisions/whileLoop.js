// 01 - Comptons

/* let result = 50;
const max = 200;

while (result <= 200) {
    if (result % 2 === 0) {
        console.log(result)
    }

    result++;
} */

// 02 - Try again

let dice = null;
let count = 0;

while (dice !== 6) {
    dice = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    count++;
}

console.log(count);

// 03 - Course

/* let ussainBolt = 0,
    tysonGay = 0;

while (ussainBolt <= 100 || tysonGay <= 100) {

    ussainBolt += Math.floor(Math.random() * (10 + 1));
    tysonGay += Math.floor(Math.random() * (10 + 1));

        if (ussainBolt >= 100 && ussainBolt > tysonGay) {
            return console.log('Ussain Bolt!');

        } else if (tysonGay >= 100 && tysonGay > ussainBolt) {
            return console.log('Tyson Gay!');
        }
} */

// 04 - Des boîtes

// Affichera 5, 2, 5, -8

// 05 - Encore des boîtes

// Affichera 0, 7 (Le while ne s'executera jamais)


