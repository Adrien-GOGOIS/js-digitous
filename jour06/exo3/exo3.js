const prompt = require('prompt');

prompt.start();

function checkProfile() {

    prompt.get({name : 'email', description : 'Entrez votre email'}, function(err, res) {

        let userMail = Object.values(res);
        let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

        if (!regex.test(userMail)) {
            console.log('ERROR');
            checkProfile();
        } 
        
        else {

        prompt.get({name : 'pseudo', description : 'Entrez votre pseudo'}, function(err, res) {

            let username = Object.values(res);
            let regex1 = new RegExp('^[\w-]$');

            if (regex1.test(username)) {
                return console.log('ERROR');
                checkProfile();
            }

            else {

                prompt.get({name : 'mdp', description : 'Entrez votre mot de passe'}, function(err, res) {

                    let userPassword = Object.values(res);
                    let regex2 = new RegExp('^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{6})$');

                    if (regex2.test(userPassword)) {
                        console.log('ERROR');
                        checkProfile();
                    }

                    console.log('All good!');

                });

            }

        })
    
    }
    })

}

checkProfile();