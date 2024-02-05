function onTimeForTheExam(input) {
    let [hour_exam, minute_exam, hour_arrival, minute_arrival] = input.map(Number);
    let hour = 0;
    let minute = 0;
    let to_print = ''
    let exam_to_minutes = (hour_exam * 60) + minute_exam;
    let arrival_to_minutes = (hour_arrival * 60) + minute_arrival;
    let time_diff = exam_to_minutes - arrival_to_minutes

    function calcHoursMinutes(input) {
        let minutes = Number(input[0]);
        let hour = Math.floor(minutes / 60);
        let minute = minutes % 60;
        if (minute < 10) {
            minute = `0${minute}`;
        }
        return `${hour}:${minute}`;
    }

    if (time_diff <= 30 && time_diff >= 0) {
        to_print = 'On time\n';
        if (time_diff != 0) {
            to_print += `${time_diff} minutes before the start`;
        }

    }

    else if (time_diff > 30) {
        to_print = 'Early\n';
        if (time_diff >= 60) {
            to_print += `${calcHoursMinutes([time_diff])} hours before the start`;
        }
        else {
            to_print += `${time_diff} minutes before the start`;
        }
    }

    else {
        to_print = 'Late\n';
        time_diff = Math.abs(time_diff);
        if (time_diff >= 60) {
            to_print += `${calcHoursMinutes([time_diff])} hours after the start`;
        }
        else {
            to_print += `${time_diff} minutes after the start`;
        }
    }

    console.log(to_print);



}

// onTimeForTheExam(["9", "30", "9", "50"]);
// onTimeForTheExam(["9", "00", "8", "30"]);
// onTimeForTheExam(["16", "00", "15", "00"]);
// onTimeForTheExam(["9", "00", "10", "30"]);
// onTimeForTheExam(["14", "00", "13", "55"]);
// onTimeForTheExam(["11", "30", "8", "12"]);
// onTimeForTheExam(["10", "00", "10", "00"]);
// onTimeForTheExam(["11", "30", "10", "55"]);
// onTimeForTheExam(["11", "30", "12", "29"]);
