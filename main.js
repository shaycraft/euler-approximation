const prompt = require('prompt-sync')({sigInt: true});
const n = prompt('Enter number of variables: ');

console.log('You got ' + n + ' variables fool!');
console.log(printFunctionForm(+n));

function printFunctionForm(n) {
    const sb = [];

    for (let i of Array(n).keys()) {
        if (i !== 0) {
            sb.push(' + ');
        }
        sb.push(`C${i}*X${i}`);
    }

    return sb.join('');
}
