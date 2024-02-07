function tennisRanklist(input) {
    let [participations, starting_points, ] = input.map(Number);
    let [to_print, wins, total_points, avg_pts, pct_wins] = ['', 0, 0, 0, 0, 0];
    let win_points = {
        'W': 2000,
        'F': 1200,
        'SF': 720
    }
    for (i = 2; i < input.length; i++) {
        let state = input[i];
        total_points += win_points[state];
        if (state === 'W') {
            wins += 1;
        }
    }

    avg_pts = total_points / participations;
    pct_wins = ((wins / participations) * 100).toFixed(2);
    total_points += starting_points;

    to_print = `Final points: ${total_points}\n`;
    to_print += `Average points: ${Math.floor(avg_pts)}\n`;
    to_print += `${pct_wins}%`

    console.log(to_print);
}

// tennisRanklist(["5","1400","F","SF","W","W","SF"]);
// tennisRanklist(["4","750","SF","W","SF","W"]);
// tennisRanklist(["7","1200","SF","F","W","F","W","SF","W"]);