function multiply(num) {

    if (isNaN(num)) {
        return console.log('ERROR');
    }

    for (let i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

// console.log(multiply(process.argv[2]));

function addition(num) {

    if (isNaN(num)) {
        return console.log('ERROR');
    }

    for (let i = 1; i <= 10; i++) {
        console.log(num + i);
    }
}

// console.log(addition(process.argv[2]));

module.exports = {
    multiply,
    addition
}