function sumNumbers(input) {
    let numbers = input[0];
    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += Number(numbers[i]);
    }

    console.log(`The sum of the digits is:${result}`);
}

// sumNumbers(["1234"]);
// sumNumbers(["564891"]);