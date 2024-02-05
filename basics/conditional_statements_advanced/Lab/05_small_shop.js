function smallShop(input) {
    
    let product = String(input[0]);
    let city = String(input[1]);
    let quantity = Number(input[2]);
    let to_print = 0;
    let prices = {
        Sofia: {
            coffee: 0.50,
            water: 0.80,
            beer: 1.20,
            sweets: 1.45,
            peanuts: 1.60
        },
        Plovdiv: {
            coffee: 0.40,
            water: 0.70,
            beer: 1.15,
            sweets: 1.30,
            peanuts: 1.50
        },
        Varna: {
            coffee: 0.45,
            water: 0.70,
            beer: 1.10,
            sweets: 1.35,
            peanuts: 1.55
        }
    }
    if (city === 'Sofia') {
        to_print = prices['Sofia'][product] * quantity;
    }
    else if (city === 'Plovdiv') {
        to_print = prices['Plovdiv'][product] * quantity;
    }
    else if (city === 'Varna') {
        to_print = prices['Varna'][product] * quantity;
    }

    console.log(to_print);
}

// smallShop(["coffee", "Varna", "2"]);
// smallShop(["peanuts", "Plovdiv", "1"]);
// smallShop(["beer", "Sofia", "6"]);
// smallShop(["water", "Plovdiv", "3"]);
// smallShop(["sweets", "Sofia", "2.23"]);