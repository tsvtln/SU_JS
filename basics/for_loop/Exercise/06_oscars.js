function oscars(input) {
    let actor_name = input[0];
    let number_of_grades = Number(input[2]);
    let total_score = Number(input[1]);
    let to_print = ''

    for (i = 3; i < input.length; i += 2) {
        let greader_name_l = input[i].length;
        total_score += ((greader_name_l * input[i+1]) / 2);
        if (total_score >= 1250.5) {
            break;
        }
    }

    if (total_score >= 1250.5) {
        to_print = `Congratulations, ${actor_name} got a nominee for leading role with ${total_score.toFixed(1)}!`
    }

    else {
        to_print = `Sorry, ${actor_name} you need ${(1250.5 - total_score).toFixed(1)} more!`
    }

    console.log(to_print);
}

// oscars(["Zahari Baharov","205","4","Johnny Depp","45","Will Smith","29","Jet Lee","10","Matthew Mcconaughey","39"]);
// oscars(["Sandra Bullock","340","5","Robert De Niro","50","Julia Roberts","40.5","Daniel Day-Lewis","39.4","Nicolas Cage","29.9","Stoyanka Mutafova","33"]);