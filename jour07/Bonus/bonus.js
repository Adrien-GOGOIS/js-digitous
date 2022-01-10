const prompt = require('prompt');

prompt.start();

const mysteryWord = 'kayak';

let splitMysteryWord = mysteryWord.split('');

let userTry = 10;

let result = ['_', '_', '_', '_', '_'];
        

    function guess() {

        if (result === splitMysteryWord) {
            return console.log('*** GAGNE ***');
        }

        if (userTry === 0) {
            return console.log('*** PENDU ***');
        }

        prompt.get({name : 'letter', description : `Rentre une lettre`}, function(err, res) {

            const userLetter = Object.values(res);
            
            for (let i = 0; i < splitMysteryWord.length; i++) {
                
                if (userLetter.toString() === splitMysteryWord[i]) {
                    result.splice(i, 1, `${userLetter}`);
                
                } 
            }

            console.log(result.join(''));
            userTry--;
            console.log(`Il vous reste ${userTry} essais`);
            guess();

        });

    
    }



guess();
