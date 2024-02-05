function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let money_needed = 0;
    let accomodation = ''
    let place = ''
    let to_print = '';

    switch (true) {
        case (budget <= 100):
            switch (season) {
                case 'summer':
                    money_needed = budget * 0.3;
                    accomodation = 'Camp';
                    break;
                case 'winter':
                    money_needed = budget * 0.7;
                    accomodation = 'Hotel';
                    break;
            }
            place = 'Bulgaria';
            break;

        case (budget <= 1000):
            switch (season) {
                case 'summer':
                    money_needed = budget * 0.4;
                    accomodation = 'Camp';
                    break;
                case 'winter':
                    money_needed = budget * 0.8;
                    accomodation = 'Hotel';
                    break;
            }
            place = 'Balkans'
            break;

        case (budget > 1000):
            switch (season) {
                case 'summer':
                    money_needed = budget * 0.9;
                    break;
                case 'winter':
                    money_needed = budget * 0.9;
                    break;
            }
            accomodation = 'Hotel';
            place = 'Europe'
            break;
    }

    to_print = `Somewhere in ${place}\n`;
    to_print += `${accomodation} - ${money_needed.toFixed(2)}`;

    console.log(to_print);

}

// journey(["50", "summer"]);
// journey(["75", "winter"]);
// journey(["312", "summer"]);
// journey(["678.53", "winter"]);
// journey(["1500", "summer"]);
