function hotelRoom(input) {
    let month = input[0];
    let stay = Number(input[1]);
    let to_print = '';
    let studio_discount = 0;
    let studio_price = 0;
    let apartment_discount = 0;
    let apartment_price = 0;
    let prices = {
        May: {
            Studio: 50,
            Apartment: 65
        },
        October: {
            Studio: 50,
            Apartment: 65
        },
        June: {
            Studio: 75.2,
            Apartment: 68.70
        },
        September: {
            Studio: 75.2,
            Apartment: 68.70
        },
        July: {
            Studio: 76,
            Apartment: 77
        },
        August: {
            Studio: 76,
            Apartment: 77
        }
    }

    // check discount
    if (month === 'May' || month === 'October') {
        if (stay > 7 && stay <= 14) {
            studio_discount = 0.05;
        }
        else if (stay > 14) {
            studio_discount = 0.3;
        }
    }
    else if (month === 'June' || month === 'September') {
        if (stay > 14) {
            studio_discount = 0.2;
        }
    }

    if (stay > 14) {
        apartment_discount = 0.1;
    }

    // studio calc
    studio_price = prices[month]['Studio'] * stay;
    if (studio_discount != 0) {
    studio_price -= studio_price * studio_discount;
    }

    // apartment calc
    apartment_price = prices[month]['Apartment'] * stay;
    if (apartment_discount != 0) {
        apartment_price -= apartment_price * apartment_discount;
    }

    to_print = `Apartment: ${apartment_price.toFixed(2)} lv.\n`;
    to_print += `Studio: ${studio_price.toFixed(2)} lv.`;

    console.log(to_print);

}

// hotelRoom(["May", "15"]);
// hotelRoom(["June", "14"]);
// hotelRoom(["August", "20"]);
