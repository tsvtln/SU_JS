function fruits_calculator(fruit, grams, price){
    console.log(`I need $${((grams / 1000).toFixed(2) * price).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`);
}

//fruits_calculator('orange', 2500, 1.80);
//fruits_calculator('apple', 1563, 2.35);

//function fruits_calculator(fruit, grams, price) {
//    let weightKg = grams / 1000;
//    let totalPrice = weightKg * price;
//
//    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
//}