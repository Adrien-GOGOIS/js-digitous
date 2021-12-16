// BONUS 

function generatePassword(num) {
    if (num < 6 || num > 15) {
        console.log('ERROR');
    } else {
        let password = '';
        for (let i = 1; i <= num; i++) {
            password += String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65));
        }
    console.log(`Votre mot de passe aléatoire : ${password}`);
    }
}

generatePassword(15);

// BONUS II

function launchDice(numberOfDice) {
    let result = 0;
        for (let i = 1; i <= numberOfDice; i++) {
            let launch = Math.floor(Math.random() * (6 - 1 + 1) + 1);
            result += launch;
        }
    return result;
}

let joueur1 = launchDice(5);
let joueur2 = launchDice(5);

if (joueur1 > joueur2) {
    console.log(`Le joueur 1 a gagné! Score : ${joueur1} contre ${joueur2}`);
} else if (joueur2 > joueur1) {
    console.log(`Le joueur 2 a gagné! Score : ${joueur2} contre ${joueur1}`);
} else {
    console.log(`Egalité ! Score : ${joueur1} à ${joueur2}`);
}

