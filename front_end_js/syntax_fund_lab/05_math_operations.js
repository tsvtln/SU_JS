function mp(num1_, num2_, operator_) {
    let num1 = Number(num1_)
    let num2 = Number(num2_)
    let op = String(operator_)
    let tp = 0

    switch(op) {
        case '+':
            tp = num1 + num2
            break;
        case '-':
            tp = num1 - num2
            break;
        case '*':
            tp = num1 * num2
            break;
        case '/':
            tp = num1 / num2
            break;
        case '%':
            tp = num1 % num2
            break;
        case '**':
            tp = num1 ** num2
            break;
    }
    console.log(tp)
}

// mp(5, 6, '+')
// mp(3, 5.5, '*')