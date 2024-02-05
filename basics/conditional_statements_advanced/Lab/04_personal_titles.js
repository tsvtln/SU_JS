function personalTitles(input) {
    
    let age = Number(input[0]);
    let gender = String(input[1]);
    let to_print = '';

    if (gender === 'm') {
        if (age < 16) {
            to_print = 'Master';
        }
        else {
            to_print = 'Mr.';
        }
    }

    else if (gender === 'f') {
        if (age < 16) {
            to_print = 'Miss';
        }
        else {
            to_print = 'Ms.'
        }
    }
    console.log(to_print);
}

// personalTitles(["12", "f"]);
// personalTitles(["17", "m"]);
// personalTitles(["25", "f"]);
// personalTitles(["13.5", "m"]);