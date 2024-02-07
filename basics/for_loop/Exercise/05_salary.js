function salary(input) {
    let [number_tabs, salary, ] = input.map(Number);
    let to_print = '';
    let tabs_prices = {
        'Facebook': 150,
        'Instagram': 100,
        'Reddit': 50
    }
    let fine = 0;

    for (i = 2; i < input.length; i++) {
        let tab_name = input[i];
        if (tab_name in tabs_prices) {
            fine += tabs_prices[tab_name];
            if (fine >= salary) {
                to_print = 'You have lost your salary.'
                break;
            }
        }
    }

    if (to_print === '') {
        to_print = salary - fine
    }

    console.log(to_print);


}

// salary(["10","750","Facebook","Dev.bg","Instagram","Facebook","Reddit","Facebook","Facebook"]);
// salary(["3","500","Github.com","Stackoverflow.com","softuni.bg"]);
// salary(["3","500","Facebook","Stackoverflow.com","softuni.bg"]);