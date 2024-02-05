function dayOfTheWeek(input) {
    let number = Number(input[0]);
    let to_print = '';
    switch (number) {
        case 1:
            to_print = 'Monday';
            break;
        case 2:
            to_print = 'Tuesday';
            break;
        case 3:
            to_print = 'Wednesday';
            break;
        case 4:
            to_print = 'Thursday';
            break;
        case 5:
            to_print = 'Friday';
            break;
        case 6:
            to_print = 'Saturday';
            break;
        case 7:
            to_print = 'Sunday';
            break;
        default:
            to_print = 'Error';
    }
    console.log(to_print);
}

// dayOfTheWeek(["1"]);
// dayOfTheWeek(["2"]);
// dayOfTheWeek(["3"]);
// dayOfTheWeek(["4"]);
// dayOfTheWeek(["5"]);
// dayOfTheWeek(["6"]);
// dayOfTheWeek(["7"]);
// dayOfTheWeek(["-1"]);