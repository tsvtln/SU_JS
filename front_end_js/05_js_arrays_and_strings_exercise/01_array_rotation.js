function rotator(array, cycles) {
    let storage = '';
    for(i=0; i < cycles; i++) {
        storage = array.shift();
        array.push(storage);
    }
    console.log(array.join(' '))
}

rotator([51, 47, 32, 61, 21], 2);
rotator([32, 21, 61, 1], 4);
rotator([2, 4, 15, 31], 5);