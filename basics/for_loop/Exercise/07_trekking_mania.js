function trekkingMania(input) {
    let number_of_groups = Number(input[0]);
    let mountains = {
        musala: 0,
        monblan: 0,
        kilimanjaro: 0,
        k2: 0,
        everest: 0
    }
    let to_print = ''
    let total_climbers = 0;
    let buffer = 0;

    for (let i = 1; i <= number_of_groups; i++) {
        let group_size = Number(input[i]);
        total_climbers += group_size;
        switch (true) {
            case (group_size <= 5):
                mountains['musala'] += group_size;
                break;
            case (group_size >= 6 && group_size <= 12):
                mountains['monblan'] += group_size;
                break;
            case (group_size >= 13 && group_size <= 25):
                mountains['kilimanjaro'] += group_size;
                break;
            case (group_size >= 26 && group_size <= 40):
                mountains['k2'] += group_size;
                break;
            case (group_size >= 41):
                mountains['everest'] += group_size;
                break;
        }
    }

    for (let mountain in mountains) {
        buffer = (mountains[mountain] / total_climbers) * 100;
        to_print += `${buffer.toFixed(2)}%\n`;
    }

    console.log(to_print);

    
}

// trekkingMania(["10","10","5","1","100","12","26","17","37","40","78"]);
// trekkingMania(["5","25","41","31","250","6"]);
