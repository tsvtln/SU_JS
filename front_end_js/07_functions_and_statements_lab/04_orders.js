function priceCalculator(product, quantity){
    const priceMap = {
        'coffee': 1.50,
        'water': 1.00,
        'coke': 1.40,
        'snacks': 2.00,
    }

    console.log((priceMap[product] * quantity).toFixed(2));
}

priceCalculator("water", 5);
priceCalculator("coffee", 2);