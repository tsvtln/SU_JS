function workingHours(input) {
    let hour = Number(input[0]);
    let day = String(input[1]);
    let to_print = '';

    let working_days = {
        Monday: [10, 11, 12, 13, 14, 15, 16, 17, 18],
        Tuesday: [10, 11, 12, 13, 14, 15, 16, 17, 18],
        Wednesday: [10, 11, 12, 13, 14, 15, 16, 17, 18],
        Thursday: [10, 11, 12, 13, 14, 15, 16, 17, 18],
        Friday: [10, 11, 12, 13, 14, 15, 16, 17, 18],
        Saturday: [10, 11, 12, 13, 14, 15, 16, 17, 18]
    }

    if (day in working_days) {
        if (working_days[day].includes(hour)) {
            to_print = 'open';
        }
        else {
            to_print = 'closed';
        }
    }
    else {
        to_print = 'closed';
    }

    console.log(to_print);
}

// workingHours(["11", "Monday"]);
// workingHours(["19", "Friday"]);
// workingHours(["11", "Sunday"]);
