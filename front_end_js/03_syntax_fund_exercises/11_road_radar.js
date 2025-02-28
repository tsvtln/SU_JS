function radar_speed_handler(speed, area) {
    let speed_map = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }

    let statuses = {
        '20': 'speeding',
        '40': 'excessive speeding',
        'rest': 'reckless driving',
    }

    let tp = ''

    if (speed <= speed_map[area]) {
        tp = `Driving ${speed} km/h in a ${speed_map[area]} zone`;
    }

    else {
        let over_limit = speed - speed_map[area];
        if (over_limit <= 20){
            tp = `The speed is ${over_limit} km/h faster than the allowed speed of ${speed_map[area]} - ${statuses['20']}`;
        }
        else if (over_limit <= 40){
            tp = `The speed is ${over_limit} km/h faster than the allowed speed of ${speed_map[area]} - ${statuses['40']}`;
        }
        else {
            tp = `The speed is ${over_limit} km/h faster than the allowed speed of ${speed_map[area]} - ${statuses['rest']}`;
        }
    }

    console.log(tp);
}

radar_speed_handler(40, 'city');
radar_speed_handler(21, 'residential');
radar_speed_handler(120, 'interstate');
radar_speed_handler(200, 'motorway');