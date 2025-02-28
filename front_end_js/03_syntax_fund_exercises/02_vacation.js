function vacation_calculator(number_of_people, group_type, day){
    let price = 0
    let tp = `Total price:`
    let price_range = {
        'Students': {
            'Friday': 8.45,
            'Saturday': 9.80,
            'Sunday': 10.46,
        },
        'Business': {
            'Friday': 10.90,
            'Saturday': 15.60,
            'Sunday': 16,
        },
        'Regular': {
            'Friday': 15,
            'Saturday': 20,
            'Sunday': 22.50,
        },
    }

    price = number_of_people * price_range[group_type][day]

    switch(true){
        case(group_type === 'Students' && number_of_people >= 30):
            price *= 0.85;
            break;
        case(group_type === 'Business' && number_of_people >= 100):
            price -= price_range[group_type][day] * 10;
            break;
        case(group_type === 'Regular' && number_of_people >= 10 && number_of_people <= 20):
            price *= 0.95;
            break;
    }

    console.log(tp + ` ${price.toFixed(2)}`);
}

vacation_calculator(30,
    "Students",
    "Sunday");

vacation_calculator(40,
    "Regular",
    "Saturday")