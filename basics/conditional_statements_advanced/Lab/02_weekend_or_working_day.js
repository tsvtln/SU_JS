function weekendOrWorkingDay(input) {
    let current_day = String(input[0]);
    let to_print = ''
    switch (current_day) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            to_print = 'Working day';
            break;
        case 'Saturday':
        case 'Sunday':
            to_print = 'Weekend';
            break;
        default:
            to_print = 'Error';
    }
    console.log(to_print);
}

// weekendOrWorkingDay(["Monday"]);
// weekendOrWorkingDay(["Sunday"]);
// weekendOrWorkingDay(["April"]);