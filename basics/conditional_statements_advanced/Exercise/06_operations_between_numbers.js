function obn(input) {
    let [first_num, second_num, ,] = input.map(Number);
    let operator = input[2];
    let to_print = '';
    let e_o = '';
    let result = 0

    if (first_num === 0 && (operator === '/' || operator === '%')) {
        to_print = `Cannot divide ${second_num} by zero`
    }
    else if (second_num === 0 && (operator === '/' || operator === '%')) {
        to_print = `Cannot divide ${first_num} by zero`
    }
    else {
        switch (operator) {
            case '-':
                result = first_num - second_num;
                break;

            case '+':
                result = first_num + second_num;
                break;

            case '*':
                result = first_num * second_num;
                break;

            case '/':
                result = (first_num / second_num).toFixed(2);
                break;

            case '%':
                result = first_num % second_num;
                break;
        }
        if (operator === '+' || operator === '-' || operator === '*') {
            if (result % 2 === 0) {
                e_o = ' - even';
            }
            else {
                e_o = ' - odd';
            }
        }
    }

    if (to_print === '') {
        console.log(`${first_num} ${operator} ${second_num} = ${result}${e_o}`);
    }
    else {
        console.log(to_print);
    }

}

// obn(["10", "12", "+"]);
// obn(["10", "1", "-"]);
// obn(["7", "3", "*"]);
// obn(["123", "12", "/"]);
// obn(["10", "3", "%"]);
// obn(["112", "0", "/"]);
// obn(["10", "0", "%"]);
