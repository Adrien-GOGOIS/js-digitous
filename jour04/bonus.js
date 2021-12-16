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