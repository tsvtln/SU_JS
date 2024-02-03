function shopping(input) {
    let [budget, video_cards, processors, rams] = input.map(Number);
    let prices = {
        video_card: 250,
        processor: 0,
        ram: 0
    }
    let total_price = 0;
    let to_print = ''

    total_price = video_cards * prices['video_card'];
    prices['processor'] = total_price * 0.35;
    prices['ram'] = total_price * 0.1;

    total_price += processors * prices['processor'];
    total_price += rams * prices['ram'];

    if (video_cards > processors) {
        total_price -= total_price * 0.15;
    }

    if (total_price <= budget) {
        to_print = `You have ${(budget - total_price).toFixed(2)} leva left!`;
    }
    else {
        to_print = `Not enough money! You need ${(total_price - budget).toFixed(2)} leva more!`;
    }

    console.log(to_print);
}

// shopping(["900", "2", "1", "3"]);
// shopping(["920.45", "3", "1", "1"]);
