const prompt = require('prompt');
prompt.start();

let player = 0;
const bank = Math.floor(Math.random() * (21 - 16 + 1) + 16);

function blackJack() {

    // ON ASSIGNE DIRECTEMENT DE NOUVELLES CARTES AU JOUEUR JUSQU'A ATTEINDRE 16
    while (player < 16) {
        player = player + Math.floor(Math.random() * (10) + 1);
        console.log(`Votre score est de : ${player}`);
    }

    // LE JOUEUR PERD OU GAGNE AUTOMATIQUEMENT EN FONCTION DE SON SCORE
    if (player > 21) {
        return console.log('Perdu!');
    } else if (player === 21) {
        return console.log('BLACK JACK !', 'Score de la banque : ' + bank);
    }

    // MENU DES TOUCHES POUR TIRER UN NOUVELLE CARTE OU PASSER
    console.log('Tirez une carte supplémentaire : tapez "d"');
    console.log('Ou vous pouvez mettre fin à la partie : tapez "p"');

    // CHOIX DU JOUEUR ?
    prompt.get({name : 'letter', description : '"draw" ou "pass"?'}, function(err, res) {

        let choice = Object.values(res);
        
        // GUARD
        if(err) {
            console.error('Something went wrong');
        }

        // SI LE JOUEUR CHOISI DE TIRER UNE CARTE :
        if (choice[0] === 'd') {
            player = player + Math.floor(Math.random() * (10) + 1);
            console.log(`Votre score est de : ${player}`);

                /*    if(player < 21) {
                        prompt.get({name : 'letter', description : '"draw" ou "pass"?'}, function(err, res) {
                            let choice2 = Object.values(res);

                            if (choice2[0] === 'd') {
                                player = player + Math.floor(Math.random() * (10) + 1);
                                console.log(`Votre score est de : ${player}`);
                            }

                            if (player > 21) {
                                return console.log('Perdu!');
                            } else if (player === 21) {
                                return console.log('BLACK JACK !', 'Score de la banque : ' + bank);
                            } else if (player > bank) {
                                return console.log('Gagné!', 'Score de la banque : ' + bank);
                            }
                        });
                    }   */
        }

        // SI LE JOUEUR DECIDE DE PASSER :
        if (choice[0] === 'p') {
            console.log('Vous avez passé');
            console.log(`Votre score est de : ${player}`);
        }

        // RESULTAT FINAL
        if (player > 21) {
            return console.log('Perdu!');
        } else if (player === 21) {
            return console.log('BLACK JACK !', 'Score de la banque : ' + bank);
        } else if (player > bank) {
            return console.log('Gagné!', 'Score de la banque : ' + bank);
        } else if (player < bank) {
            return console.log('Perdu !', 'Score de la banque : ' + bank);
        }

    });
}

blackJack();