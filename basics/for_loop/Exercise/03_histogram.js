function histogram(input) {
    let total_numbers = Number(input[0]);
    let [p1, p2, p3, p4, p5] = [0, 0, 0, 0, 0];
    let [tp_p1, tp_p2, tp_p3, tp_p4, tp_p5] = ['', '', '', '', ''];

    for (i = 1; i <= total_numbers + 1; i++) {
        let current_number = Number(input[i]);
        switch (true) {
            case (current_number < 200):
                p1 += 1;
                break;
            case (current_number >= 200 && current_number < 400):
                p2 += 1;
                break;
            case (current_number >= 400 && current_number < 600):
                p3 += 1;
                break;
            case (current_number >= 600 && current_number < 800):
                p4 += 1;
                break;
            case (current_number >= 800):
                p5 += 1;
                break;
        }
    }

    tp_p1 = `${((p1 / total_numbers) * 100).toFixed(2)}%`;
    tp_p2 = `${((p2 / total_numbers) * 100).toFixed(2)}%`;
    tp_p3 = `${((p3 / total_numbers) * 100).toFixed(2)}%`;
    tp_p4 = `${((p4 / total_numbers) * 100).toFixed(2)}%`;
    tp_p5 = `${((p5 / total_numbers) * 100).toFixed(2)}%`;

    for (let i = 1; i <= 5; i++) {
        console.log(eval(`tp_p${i}`));
    }

    


}


// histogram(["3", "1", "2", "999"]);
// histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
// histogram(["9","367","99","200","799","999","333","555","111","9"]);
// histogram(["14","53","7","56","180","450","920","12","7","150","250","680","2","600","200"]);