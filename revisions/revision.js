// 01 - Alphabet

function sortLetters(string) {
    return string
    .split('')
    .sort()
    .join('');
}

console.log(sortLetters('konexio'));

// 02 - XOXO

function countEach(stringXO) {

    let split = stringXO.split('');
    let x = 0;
    let o = 0;

    for (let i = 0; i <= stringXO.length; i++) {
        if (split[i] === 'x') {
            x++;
        } else if (split[i] === 'o') {
            o++;
        }
    }

    if (x === o) {
        return true;
    } else if (x !== o) {
        return false;
    }
}

console.log(countEach('xxxoooox'));
console.log(countEach('xooox'));

// 03 - Palindrome

function checkPal(stringCheck) {

    let reversed = stringCheck
        .split('')
        .reverse()
        .join('');

        if (stringCheck === reversed) {
            return 'Palindrome!';
        } else {
            return 'Nope';
        }
}

console.log(checkPal('racecar'));
console.log(checkPal('laptop'));

// 04 - Swap



// BONUS

function makeItSpongeBob(stringSponge) {

    let splitSponge = stringSponge.split('');

    for (let n = 0; n <= splitSponge.length - 1; n++) {

        if (n % 2 === 0) {
            splitSponge[n] = splitSponge[n].toUpperCase();
        } else {
            splitSponge[n] = splitSponge[n].toLowerCase();
        }
    }

    console.log(splitSponge.join(''));

}

makeItSpongeBob('Javascript is easy');

// BONUS II

function sortLetters(string) {
    string = string.toLowerCase();
    return string
    .split('')
    .sort()
    .join('');
}

console.log(sortLetters('KoNeXiO'));


// BONUS III


function countEach(stringXO) {

    let split = stringXO.split('');
    let x = 0;
    let o = 0;
    let M = 0;

    for (let i = 0; i <= stringXO.length; i++) {

        if (split[i] === 'x') {
            x++;

        } else if (split[i] === 'o') {
            o++;

        } else if (split[i] === 'O' || split[i] === 'X') {
            M++;
        }
    }

    if (M > 0) {
        return `Il y a ${M} majuscules`;

    } else if (x === 0 && o === 0) {
        return 'ERROR';

    } else if (x === o) {
        return true;

    } else if (x !== o) {
        return false;
        
    }
}

console.log(countEach('xxxoooox'));
console.log(countEach('adr'));
