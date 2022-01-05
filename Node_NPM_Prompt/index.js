function calculate(n, n1, op) {
    switch(op) {
        case 'x' :
            return n * n1;
            break;
        case '/' :
            return n / n1;
            break;
        case '+' :
            return n + n1;
            break;
        case '-' :
            return n - n1;
            break;
        case '%' :
            return n % n1;
            break;
        default :
            return 'ERROR';
            break;

    }
}

console.log(calculate(process.argv[2], process.argv[3], process.argv[4]));