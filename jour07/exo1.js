// 01 - File System

const fs = require('fs');

fs.readFile('jour07.txt', function(err, data) {
    if (err) {
        console.error(err);
    }

    console.log('Contenu du fichier : ' + data.toString());
});