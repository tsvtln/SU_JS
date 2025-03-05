function calc(num1, num2, operator) {
    let result;

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

    return result(num1, num2);
}


console.log(calc(5, 5, 'multiply'));
console.log(calc(40, 8, 'divide'));
console.log(calc(2, 19, 'add'));
console.log(calc(50, 13, 'subtract'));