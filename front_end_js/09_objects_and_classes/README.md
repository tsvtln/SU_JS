### Iteraterate over objects
    for (let [n, v] of Object.entries(phoneCatalogue)){
        console.log(`${n} -> ${v}`);
    }

### Sort objects

    function sortObjectByKeys(obj) {
        return Object.fromEntries(Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)));
    }

### Create matrix
const mxSpread = (Array(int).fill().map(() => (Array(int).fill(int).join(' ')))).join('\n');

### Reverse string
String(array[i]) === String(array[i]).split("").reverse().join("")

### Arrow func examples
    let sum = (a, b) => a + b;
    result = (num1, num2, num3) => num1 * num2 * num3;

### Find min/max number
Math.min.apply(Math, [v1, v2, v3])

### Switch example
    switch (operator) {
        case 'multiply':
            result = (num1, num2) => num1 * num2;
            break;
        case 'divide':
            result = (num1, num2) => num1 / num2;
            break;
        case 'add':
            result = (num1, num2) => num1 + num2;
            break;
        case 'subtract':
            result = (num1, num2) => num1 - num2;
            break;
        default:
            return "Invalid operator";
    }

### Repeater example
function censoreship(sentence, cesnorWord) {
    console.log(sentence.replaceAll(cesnorWord, '*'.repeat(cesnorWord.length)));
}
