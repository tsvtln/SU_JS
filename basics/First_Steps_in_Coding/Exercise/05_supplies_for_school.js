function SuppliesForSchool(input) {
    let [pencils, markers, detergent, discount] = input.map(Number);
    let prices = {
        pencils: 5.80,
        markers: 7.20,
        detergent: 1.20
    };
    let money_needed = ((pencils * prices["pencils"]) + (markers * prices["markers"]) + (detergent * prices["detergent"]));
    money_needed -= (money_needed * (discount / 100));
    console.log(money_needed);
}

// SuppliesForSchool(["2", "3", "4", "25"])
