function cinema(input) {
    let projection_type = input[0];
    let [, row, column] = input.map(Number);
    prices = {
        Premiere: 12,
        Normal: 7.5,
        Discount: 5
    };
    to_print = (row * column) * prices[projection_type];

    console.log(`${to_print.toFixed(2)} leva`);
}

// cinema(["Premiere", "10", "12"]);
// cinema(["Normal", "21", "13"]);
// cinema(["Discount", "12", "30"]);
