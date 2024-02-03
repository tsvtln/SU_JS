function timeAdder(input) {
    let [hour, minute] = input.map(Number);
    minute += 15;
    if (minute >= 60) {
        hour += 1;
        minute -= 60;
        if (hour >= 24) {
            hour = 0;
        }
        if (minute < 10) {
            minute = `0${minute}`
        }
    }
    console.log(`${hour}:${minute}`)
}

// timeAdder(["0", "45"])
