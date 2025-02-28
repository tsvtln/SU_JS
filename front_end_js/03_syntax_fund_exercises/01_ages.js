function ages(person_age) {
    let tp = ''
    switch(true){
        case(0<=person_age && person_age <= 2):
            tp = 'baby';
            break;
        case(3<=person_age && person_age <=13):
            tp = 'child';
            break;
        case(14<= person_age && person_age <=19):
            tp = 'teenager';
            break;
        case(20<=person_age && person_age <=65):
            tp = 'adult';
            break;
        case(person_age >= 66):
            tp = 'elder';
            break;
        default:
            tp = 'out of bounds';
            break;
    }

    console.log(tp);
}

//ages(65);