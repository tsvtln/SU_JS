function newHouse(input) {
    function priceCalc(input) {
        let [price, discount, value] = input.map(Number);
        if (value === 0) {
        price -= price * discount;
        }
        else {
            price += price * discount
        }
        return price
    }    
    let flower = input[0];
    let [, quantity, budget] = input.map(Number);
    let to_print = '';
    let discount = 0;
    let price = 0
    let prices = {
        Roses: 5,
        Dahlias: 3.8,
        Tulips: 2.8,
        Narcissus: 3,
        Gladiolus: 2.5
    }

    switch (flower) {
        case 'Roses':
            if (quantity > 80) {
                discount = 0.1
            }
            price = quantity * prices[flower]
            if (discount != 0) {
                price = priceCalc([price, discount, 0])
            }
            break;
        case 'Dahlias':
            if (quantity > 90) {
                discount = 0.15
            }
            price = quantity * prices[flower]
            if (discount != 0) {
                price = priceCalc([price, discount, 0])
            }
            break;
        case 'Tulips':
            if (quantity > 80) {
                discount = 0.15
            }
            price = quantity * prices[flower]
            if (discount != 0) {
                price = priceCalc([price, discount, 0])
            }
            break;
        case 'Narcissus':
            if (quantity < 120) {
                discount = 0.15
            }
            price = quantity * prices[flower]
            if (discount != 0) {
                price = priceCalc([price, discount, 1])
            }
            break;
        case 'Gladiolus':
            if (quantity < 80) {
                discount = 0.20
            }
            price = quantity * prices[flower]
            if (discount != 0) {
                price = priceCalc([price, discount, 1])
            }
            break;
    }
    if (price <= budget) {
        to_print = `Hey, you have a great garden with ${quantity} ${flower} and ${(budget - price).toFixed(2)} leva left.`
    }
    else {
        to_print = `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
    }

    console.log(to_print);

}

// newHouse(["Roses", "55", "250"]);
// newHouse(["Tulips", "88", "260"]);
// newHouse(["Narcissus", "119", "360"]);
