const axios = require('axios');

function catchPokemon(id) {
    axios
        .get('https://pokeapi.co/api/v2/pokemon-species/')
        .then(function(res) {
            console.log(res['results'][0]);
        });
}

catchPokemon();