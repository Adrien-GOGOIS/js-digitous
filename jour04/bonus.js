// BONUS 


function generatePassword(num) {

    if (num < 6 || num > 15) {
        console.log('ERROR');

    } else {
        let password = '';
        // password = Math.random().toString(16).slice(-num); // Melange lettres et nombres à condition de ne pas dépasser 13 caractères
        for (let i = 1; i <= num; i++) {
            password += String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1) + 65));
            // password += String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1) + 48)); // Avec que des chiffres par exemple
        }

    console.log(`Votre mot de passe aléatoire : ${password}`);

    }
}

generatePassword(13);


// METHODE 2 --> Composer un MdP aléatorie contenant tous les caractères alphanumériques

function generatePass(num1) {

    if (num1 < 6 || num1 > 15) {

        console.log('ERROR');

    } else {

        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

        for (let i = 1; i <= num1; i++) {
            var char = Math.floor(Math.random() * (str.length + 1 - 1) + 1);  
            pass += str.charAt(char);
        }

    console.log(`Votre mot de passe aléatoire : ${pass}`);

    }
}

generatePass(13);


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

