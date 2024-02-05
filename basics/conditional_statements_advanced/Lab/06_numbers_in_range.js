function numbersInRange(input) {
    let number = Number(input[0]);
    let to_print = '';

    switch (true) {
        case (number === 0):
            to_print = 'No';
            break;
        case (number >= 1 && number <= 100):
            to_print = 'Yes';
            break;
        case (number >= -100 && number <= -1):
            to_print = 'Yes';
            break;
        default:
            to_print = 'No';
    }
    console.log(to_print);
}

// numbersInRange(["-25"]);
// numbersInRange(["0"]);
// numbersInRange(["25"]);
