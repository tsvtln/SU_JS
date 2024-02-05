function cinemaTicket(input) {
    let day = String(input[0]);
    let to_print = '';
    let prices = {
        Monday: 12,
        Tuesday: 12,
        Wednesday: 14,
        Thursday: 14,
        Friday: 12,
        Saturday: 16,
        Sunday: 16
    }
    console.log(prices[day]);
}

// cinemaTicket(["Monday"]);
// cinemaTicket(["Friday"]);
// cinemaTicket(["Sunday"]);
