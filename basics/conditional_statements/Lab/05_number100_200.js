function numberFinder(input) {
    let number = Number(input);
    let to_print = ''
    if (number < 100) {
        to_print = 'Less than 100';
    }
    else if (number >= 100 && number <= 200) {
        to_print = 'Between 100 and 200';
    }
    else {
        to_print = 'Greater than 200';
    }
    console.log(to_print)
}

// numberFinder(["120"])
