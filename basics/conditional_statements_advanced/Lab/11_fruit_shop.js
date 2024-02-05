function fruitShop(input) {
    
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let to_print = 0;
    let prices = {
        Workday: {
            banana: 2.50,
            apple: 1.20,
            orange: 0.85,
            grapefruit: 1.45,
            kiwi: 2.70,
            pineapple: 5.50,
            grapes: 3.85
        },
        Weekend: {
            banana: 2.70,
            apple: 1.25,
            orange: 0.90,
            grapefruit: 1.60,
            kiwi: 3.00,
            pineapple: 5.60,
            grapes: 4.20
        }
    }
    if (fruit in prices['Workday']) {
        switch (day) {
            case 'Monday':
            case 'Tuesday':
            case 'Wednesday':
            case 'Thursday':
            case 'Friday':
                to_print = prices['Workday'][fruit] * quantity;
                break;
            case 'Saturday':
            case 'Sunday':
                to_print = prices['Weekend'][fruit] * quantity;
        }
    }
    else {
        to_print = 'error';
    }

    if (typeof to_print === 'number'){
    console.log(to_print.toFixed(2));
    }
    else {
        console.log(to_print);
    }
}

// fruitShop(["apple", "Tuesday", "2"]);
// fruitShop(["orange", "Sunday", "3"]);
// fruitShop(["kiwi", "Monday", "2.5"]);
// fruitShop(["grapes", "Saturday", "0.5"]);
// fruitShop(["tomato", "Monday", "0.5"]);