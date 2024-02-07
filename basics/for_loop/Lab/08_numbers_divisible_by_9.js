function divisbleBy9(input) {
    let [start, end] = input.map(Number);
    let list_numbers = []
    let to_print = ''

    for (i = start; i < end; i++) {
        if (i % 9 === 0) {
            list_numbers.push(i);
        }
    }

    let sum = list_numbers.reduce((total, current_number) => total + current_number, 0);
    to_print = `The sum: ${sum}\n`;

    for (let i = 0; i < list_numbers.length; i++) {
        to_print += `${list_numbers[i]}\n`
    }

    console.log(to_print);

}

// divisbleBy9(["100", "200"]);