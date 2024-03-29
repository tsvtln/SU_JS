function toyShop(input) {
    let [trip_price, num_puzzles, num_dolls, 
        num_bears, num_mionions, num_trucks] = input.map(Number);
    let prices = {
        puzzle: 2.60,
        doll: 3,
        bear: 4.10,
        minion: 8.20,
        truck: 2
    };
    let discount = 0;
    let total_price_toys = 0;
    let to_print = ''
    let total_toys = input.slice(1).reduce((acc, curr) => acc + Number(curr), 0);

    if (total_toys >= 50) {
        discount = 0.25;
    }

    total_price_toys += num_puzzles * prices['puzzle'];
    total_price_toys += num_dolls * prices['doll'];
    total_price_toys += num_bears * prices['bear'];
    total_price_toys += num_mionions * prices['minion'];
    total_price_toys += num_trucks * prices['truck'];

    if (discount === 0.25) {
        total_price_toys -= total_price_toys * discount;
    }

    total_price_toys -= total_price_toys * 0.1; // rent
    let money_left = total_price_toys - trip_price;

    if (total_price_toys >= trip_price) {
        to_print = `Yes! ${(Math.abs(money_left) < 10 ? '0' : '')}${Math.abs(money_left).toFixed(2)} lv left.`;    
    }

    else {
        to_print = `Not enough money! ${(Math.abs(money_left) < 10 ? '0' : '')}${Math.abs(money_left).toFixed(2)} lv needed.`;    
    }

    console.log(to_print);
}

// toyShop(["1299.8", "20", "25", "30", "50", "10"])
// toyShop(["320", "8", "2", "5", "5", "5"])
