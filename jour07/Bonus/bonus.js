const prompt = require('prompt');

prompt.start();

const mysteryWord = 'soupe';

function pendu() {

    let splitMysteryWord = mysteryWord.split('');

    let userTry = 10;
        
        prompt.get({name : 'letter', description : `Rentre une lettre`}, function(err, res) {

            const userLetter = Object.values(res);
            let result = [];

            for (let i = 0; i < splitMysteryWord.length; i++) {
                
                if (userLetter.toString() === splitMysteryWord[i]) {
                    result.push(userLetter);
                
                } else {
                    result.push(' _ ');
            
                }
            }

            console.log(result.join(''));
            userTry--;
            console.log(`Il vous reste ${userTry} essais`);

        });

}


pendu();
