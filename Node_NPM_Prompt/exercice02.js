// 02 - TABLE

function multiply(num) {

    if (isNaN(num)) {
        return console.log('ERROR');
    }

    for (let i = 1; i <=10; i++) {
        console.log(num * i);
    }
    
}

multiply(process.argv[2]);