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

const lowerCase = 'azertyuiopmlkjhgfdsqwxcvnb';
const upperCase = lowerCase.toUpperCase();

function swap(stringSwap) {
    let split = stringSwap.split('');

    for (let j = 0; j <= split.length; j++) {
        if (split[j] === )
    }

}

console.log(swap('Hello World'));

