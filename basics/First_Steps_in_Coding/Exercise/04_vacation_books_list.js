function VacationBooksList(input) {
    let [total_pages, pages_ph, days] = input.map(Number);
    console.log((total_pages / pages_ph) / days)
}

VacationBooksList(["212", "20", "2"])
