// 01 - FORMAT

function formatDate(str) {
    let test = new Date(str);
    return console.log(`${test.getDate()}/${test.getMonth() + 1}/${test.getFullYear()}`);
    }

formatDate('2021/12/31');

// 02 - AGE

function calculateAge(date) {

    let birthDate = new Date(date);
    let diff = Date.now() - birthDate.getTime(); 
    let age = Math.floor(diff / 31536000000);

    console.log(age);

}

calculateAge('1989/01/31');