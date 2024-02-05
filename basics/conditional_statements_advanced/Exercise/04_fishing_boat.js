function fishingBoat(input) {
    let [budget, season, fisherman] = input;
    budget = Number(budget);
    fisherman = Number(fisherman);
    
    let to_print = '';
    let discount = 0;
    let money_needed = 0;
    let prices = {
        Spring: 3000,
        Summer: 4200,
        Autumn: 4200,
        Winter: 2600
    }
    
    if (season != 'Autumn') {
        if (fisherman <= 6) {
            discount = 0.1;
        } else if (fisherman >= 7 && fisherman <= 11) {
            discount = 0.15;
        } else if (fisherman > 12) {
            discount = 0.25;
        }
    } else {
        if (fisherman <= 6) {
            discount = 0.1;
        } else if (fisherman >= 7 && fisherman <= 11) {
            discount = 0.15;
        } else if (fisherman > 12) {
            discount = 0.25;
        }
    }

    money_needed = prices[season] - (prices[season] * discount);

    if (season != 'Autumn' && fisherman % 2 === 0) {
        money_needed -= money_needed * 0.05;
    }

    if (budget >= money_needed) {
        to_print = `Yes! You have ${(budget - money_needed).toFixed(2)} leva left.`;
    } else {
        to_print = `Not enough money! You need ${(money_needed - budget).toFixed(2)} leva.`;
    }

    console.log(to_print);
}

// fishingBoat(["3000", "Summer", "11"]);
fishingBoat(["3600", "Autumn", "6"]);
// fishingBoat(["2000", "Winter", "13"]);