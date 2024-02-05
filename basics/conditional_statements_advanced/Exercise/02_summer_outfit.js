function summerOutfit(input) {
    let temperature = Number(input[0]);
    let time = input[1];
    let to_print = '';
    let outfits = {
        Morning: {
            '10_18': 'Sweatshirt and Sneakers',
            '18_24': 'Shirt and Moccasins',
            '25': 'T-Shirt and Sandals'
        },
        Afternoon: {
            '10_18': 'Shirt and Moccasins',
            '18_24': 'T-Shirt and Sandals',
            '25': 'Swim Suit and Barefoot'
        },
        Evening: {
            '10_18': 'Shirt and Moccasins',
            '18_24': 'Shirt and Moccasins',
            '25': 'Shirt and Moccasins'
        }
    }

    switch (true) {
        case (temperature >= 10 && temperature <= 18):
            to_print = `It's ${temperature} degrees, get your ${outfits[time]['10_18']}.`
            break;
        case (temperature > 18 && temperature <= 24):
            to_print = `It's ${temperature} degrees, get your ${outfits[time]['18_24']}.`
            break;
        case (temperature >= 25):
            to_print = `It's ${temperature} degrees, get your ${outfits[time]['25']}.`
            break;
    }

    console.log(to_print);

}

// summerOutfit(["16", "Morning"]);
// summerOutfit(["22", "Afternoon"]);
// summerOutfit(["28", "Evening"]);
