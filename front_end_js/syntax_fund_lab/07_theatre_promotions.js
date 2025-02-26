function theatre_promo(day, age) {
    let tp = '';
    let age_group = 0;
    let prices = {
        'Weekday': {
            'p1': '12$',
            'p2': '18$',
            'p3': '12$',
        },
        'Weekend': {
            'p1': '15$',
            'p2': '20$',
            'p3': '15$'
        },
        'Holiday': {
            'p1': '5$',
            'p2': '12$',
            'p3': '10$',
        },
    };

    switch(true) {
        case (age < 0 || age > 122):
            tp = 'Error!';
            break;
        
        case (0 <= age && age <= 18):
            age_group = 1;
            break;
        
        case (18 < age && age <= 64):
            age_group = 2;
            break;
        
        case (64 < age && age <= 122):
            age_group = 3;
            break;
    }

    switch(age_group) {
        case 1:
            tp = prices[day]['p1'];
            break;
        case 2:
            tp = prices[day]['p2'];
            break;
        case 3:
            tp = prices[day]['p3'];
            break;
    }

    console.log(`${tp}`)
}

theatre_promo('Weekday', 42)
theatre_promo('Holiday', -12)
theatre_promo('Holiday', 15)