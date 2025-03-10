function scheduler(meets){
    calendar = {};

    for (let appointment of meets){
        let [day, name] = appointment.split(' ');

        if (day in calendar){
            console.log(`Conflict on ${day}!`);
        } else {
            calendar[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (let [day, name] of Object.entries(calendar)){
        console.log(`${day} -> ${name}`);
    }
}

scheduler(['Monday Peter','Wednesday Bill','Monday Tim','Friday Tim']);
scheduler(['Friday Bob','Saturday Ted','Monday Bill','Monday John','Wednesday George']);