function lunchBreak(input) {
    let [series_name, episode_lenght, break_lenght] = input;
    let to_print = ''
    episode_lenght = Number(episode_lenght);
    break_lenght = Number(break_lenght);

    let lunch_time = break_lenght / 8;
    let rest_time = break_lenght / 4;
    let time_left = break_lenght - lunch_time - rest_time;

    if (time_left >= episode_lenght) {
        to_print = `You have enough time to watch ${series_name} and left with ${Math.ceil(time_left - episode_lenght)} minutes free time.`;
    }
    else {
        to_print = `You don't have enough time to watch ${series_name}, you need ${Math.ceil(episode_lenght - time_left)} more minutes.`;
    }

    console.log(to_print);

}

// lunchBreak(["Game of Thrones", "60", "96"]);
// lunchBreak(["Teen Wolf", "48", "60"]);
