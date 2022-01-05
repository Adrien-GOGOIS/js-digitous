const colors = require('colors');
const prompt = require('prompt');

prompt.start();

const mysteryWord = 'coder';

function motus() {

        let splitMysteryWord = mysteryWord.split('');

    prompt.get({name : 'string', description : `Rentre un mot de 5 lettres commençant par "${splitMysteryWord[0].toUpperCase()}"`}, function(err, res) {

        // RECUPERE L'ENTREE UTILISATEUR ET LA TRANSFORME EN TABLEAU
        let userWord = Object.values(res);
        let splitWord = userWord.toString().split('');

        // GUARD
        if (splitWord.length !== splitMysteryWord.length) {
            return console.log('You loose! Please respect the rules!');
        }

        console.log(splitMysteryWord[0].red);

        // CONDITION POUR COLORISER LES LETTRES ET LES AFFICHER
        for (let i = 1; i < splitWord.length; i++) {

            if (splitWord[i] === splitMysteryWord[i]) {
                console.log(splitWord[i].red);

            } else if (splitWord[i] !== splitMysteryWord[i] && splitMysteryWord.indexOf(splitWord[i]) !== -1) {
                console.log(splitWord[i].yellow);

            } else if (splitWord[i] !== splitMysteryWord[i] && splitMysteryWord.indexOf(splitWord[i]) === -1) {
                console.log(splitWord[i]);
            } 

        }

    })
}

motus();