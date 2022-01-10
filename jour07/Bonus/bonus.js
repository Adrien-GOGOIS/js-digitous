const prompt = require('prompt');

prompt.start();

const mysteryWord = 'soupe';

function pendu() {

        let splitMysteryWord = mysteryWord.split('');

        let userTry = 10;

        while (userTry >= 0) {

            prompt.get({name : 'letter', description : `Rentre une lettre`}, function(err, res) {

                const userLetter = Object.values(res);
                let result = [];

                console.log(result.join(''));
                console.log(`Il vous reste ${userTry} essais`);

                for (let i = 0; i < splitMysteryWord.length; i++) {
                    
                    if (userLetter.toString() === splitMysteryWord[i]) {
                        result.push(userLetter);
                    
                    } else {
                        result.push(' _ ');
                
                    }

                }
            });

            userTry--;

        }
}

pendu();
