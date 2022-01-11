const axios = require('axios');

function getFact() {
    axios
        .get('https://api.chucknorris.io/jokes/random')
        .then(function(res) {
            console.log(res.data.value);
        });
}

getFact();