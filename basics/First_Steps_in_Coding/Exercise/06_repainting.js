function Repaiting(input) {
    let prices = {
        naylon: 1.50,
        paint: 14.50,
        razreditel: 5.00
    };
    let [naylon, paint, razreditel, hours] = input.map(Number);
    let naylon_sum = (naylon + 2) * prices["naylon"];
    let paint_sum = (paint + (paint * 0.1)) * prices["paint"];
    let razreditel_sum = razreditel * prices["razreditel"];
    let materials_sum = naylon_sum + paint_sum + razreditel_sum + 0.4
    let workers_sum = (materials_sum * 0.3) * hours
    console.log(materials_sum + workers_sum)
}

// Repaiting(["10", "11", "4", "8"])
