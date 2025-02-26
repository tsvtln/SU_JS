function circle_area(input){
    let tp;
    let inputType = typeof(input);

    if (inputType === 'number') {
        tp = Math.pow(input, 2) * Math.PI;
        console.log(tp.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
    
}

// circle_area(5);
// circle_area('name');