function skiTrip(input) {
    let days_to_stay = Number(input[0]) - 1;
    let [, room_type, grade] = input;
    let to_pay = 0;
    let discount = 0;
    let prices = {
        'room for one person': 18,
        'apartment': 25,
        'president apartment': 35
    }

    switch (room_type) {
        case 'room for one person':
            discount = 0;
            break;
        case 'apartment':
            if (days_to_stay < 10) {
                discount += 0.3;
            }
            else if (days_to_stay >= 10 && days_to_stay <= 15) {
                discount += 0.35;
            }
            else if (days_to_stay > 15) {
                discount += 0.5;
            }
            break;
        case 'president apartment':
            if (days_to_stay < 10) {
                discount += 0.1;
            }
            else if (days_to_stay >= 10 && days_to_stay <= 15) {
                discount += 0.15;
            }
            else if (days_to_stay > 15) {
                discount += 0.2;
            }
            break;
    }

    to_pay = days_to_stay * prices[room_type];
    to_pay -= to_pay * discount;

    if (grade === 'positive') {
        to_pay += to_pay * 0.25;
    }
    else if (grade === 'negative') {
        to_pay -= to_pay * 0.1;
    }

    console.log(to_pay.toFixed(2));

}

// skiTrip(["14", "apartment", "positive"]);
// skiTrip(["30", "president apartment", "negative"]);
// skiTrip(["12", "room for one person", "positive"]);
// skiTrip(["2", "apartment", "positive"]);
