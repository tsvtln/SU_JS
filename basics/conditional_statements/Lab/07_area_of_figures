function areaOfFigures(input) {
    // let [figure, value] = input.map((val, index) => index === 0 ? val : parseFloat(val));
    let figure = input[0];
    let to_print = 0;
    if (figure === 'square') {
        let lenght = Number(input[1]);
        to_print = lenght * lenght;
    }
    else if (figure === 'rectangle') {
        let [side1, side2] = input.slice(1).map(Number);
        to_print = side1 * side2;
    }
    else if (figure === 'circle') {
        let radius = Number(input[1]);
        to_print = Math.PI * Math.pow(radius, 2);
    }
    else if (figure === 'triangle') {
        let [side1, side2] = input.slice(1).map(Number);
        to_print = 0.5 * side1 * side2;
    }
    console.log(to_print.toFixed(3));
}

// areaOfFigures(["square", "5"])
