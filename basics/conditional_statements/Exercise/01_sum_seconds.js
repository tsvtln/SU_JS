function sumSeconds(input) {
    let [time1, time2, time3] = input.map(Number);
    let sum_times = time1+time2+time3;
    let minutes = Math.floor(sum_times / 60);
    let seconds = sum_times % 60;
    let to_print = '';
    if (seconds < 10) {
        to_print = `${minutes}:0${seconds}`;
    }
    else {
        to_print = `${minutes}:${seconds}`;
    }
    console.log(to_print);

}

// sumSeconds(["14", "12", "10"]);
