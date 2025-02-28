function leap_year_checker(year){
    tp = '';
    if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0){
        tp = 'yes';
    }
    else {
        tp = 'no';
    }

    console.log(tp);
}

leap_year_checker(1984);
leap_year_checker(2003);
leap_year_checker(4);