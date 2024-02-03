function godzillaVSKong(input) {
    let [budget, statists, clothing] = input.map(Number);
    let decor_price = budget * 0.1;
    let to_print = ''

    let clothing_price = statists * clothing;
    
    if (statists > 150) {
        clothing_price -= clothing_price * 0.1;
    }

    let total_price = clothing_price + decor_price;

    if (total_price > budget) {
        let money_needed = total_price - budget;
        to_print = `Not enough money!\nWingard needs ${money_needed.toFixed(2)} leva more.`;
    }
    else {
        let money_left = budget - total_price;
        to_print = `Action!\nWingard starts filming with ${money_left.toFixed(2)} leva left.`;
    }

    console.log(to_print);
}

// godzillaVSKong(["20000", "120", "55.5"]);
