function swimming(input) {
    let [record, distance, time] = input.map(Number);
    let to_print = ''
    let time_required = distance * time;
    let slowdown = Math.floor((distance / 15)) * 12.5;

    time_required += slowdown;
    if (time_required < record) {
        to_print = `Yes, he succeeded! The new world record is ${time_required.toFixed(2)} seconds.`
    }
    else {
        to_print = `No, he failed! He was ${(time_required - record).toFixed(2)} seconds slower.`;
    }
    console.log(to_print);
}

// swimming(["55555.67", "3017", "5.03"])
