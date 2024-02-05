function fruitOrVegetable(input) {
    let to_print = ''
    switch (input[0]) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
            to_print = 'fruit';
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'carrot':
            to_print = 'vegetable';
            break;
        default:
            to_print = 'unknown';
    }
    console.log(to_print);
}

// fruitOrVegetable(["banana"]);
// fruitOrVegetable(["apple"]);
// fruitOrVegetable(["tomato"]);
// fruitOrVegetable(["water"]);