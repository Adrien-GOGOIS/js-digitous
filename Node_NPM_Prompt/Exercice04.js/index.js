const prompt = require('prompt');

prompt.start();

const mysteryNum = Math.floor(Math.random() * (100 + 1));

function play() {

    prompt.get({name : 'number', description : 'Quel est le nombre mystère?'}, function(err, res) {
        
        let num = parseInt(Object.values(res));

        if (isNaN(num)) {
            console.log('ERROR');
            console.log('Please enter un number');
            play();
        }

        if (mysteryNum === num) {
            console.log('Bravo!!');

        } else if (mysteryNum < num) {
            console.log('C\'est moins!');
            play();

        } else if (mysteryNum > num) {
            console.log('C\'est plus!');
            play();
        }
    })

}

play();