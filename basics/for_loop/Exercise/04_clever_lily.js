function cleverLily(input) {
    let [age, ,price_per_toy] = input.map(Number)
    let washing_mashine_price = parseFloat(input[1]);
    let number_of_toys = 0;
    let money_saved = 0;
    let money_multiplier = 10;
    let to_print = ''

    for (let i = 1; i <= age; i++) {
        if (i % 2 != 0) {
            number_of_toys += 1;
        }
        else {
            money_saved += money_multiplier;
            money_multiplier += 10;
            money_saved -= 1; // brother stealing
        }
    }

    money_saved += price_per_toy * number_of_toys;

    if (money_saved >= washing_mashine_price) {
        to_print = `Yes! ${(money_saved - washing_mashine_price).toFixed(2)}`;
    }

    else {
        to_print = `No! ${(washing_mashine_price - money_saved).toFixed(2)}`;
    }

    console.log(to_print);

}

// cleverLily(["10","170.00","6"]);
// cleverLily(["21","1570.98","3"]);
