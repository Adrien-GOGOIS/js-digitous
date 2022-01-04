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

function swap(stringSwap) {
    let splitSwap = stringSwap.split('');
    let result5 = [];

    for (let i = 0; i <= splitSwap.length - 1; i++) {

        if (splitSwap[i] === splitSwap[i].toLowerCase()) {
            result5.push(splitSwap[i].toUpperCase());

        } else if (splitSwap[i] === splitSwap[i].toUpperCase()) {
            result5.push(splitSwap[i].toLowerCase());

        }
    }

    return result5.join('');

}

console.log(swap('Hello World'));

console.log('**********************');

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
