function stepPrinter(array, step) {
    let new_array = [];

    for(i=0; i<= array.length; i+=step){
        new_array.push(array[i]);
    }

    return(new_array);
    // return(new_array.join('\n'));
}

console.log(stepPrinter(
    ['5', 
    '20', 
    '31', 
    '4', 
    '20'], 
    2));

stepPrinter(
    ['dsa',
    'asd', 
    'test', 
    'tset'], 
    2
    );

stepPrinter(
    ['1', 
    '2',
    '3', 
    '4', 
    '5'], 
    6)