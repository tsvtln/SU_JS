function parkingTracker(carData) {
    let carStatus = {};

    for (let carInfo of carData) {
        let [carIO, carReg] = carInfo.split(', ')
        if (carIO === 'IN') {
            carStatus[carReg] = 1;
        } else {
            delete carStatus[carReg];
        }
    }

    function sortObjectByKeys(obj) {
        return Object.fromEntries(Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)));
    }

    if (Object.keys(carStatus).length === 0) {
        console.log('Parking Lot is Empty')
    } else {
        let sortReg = sortObjectByKeys(carStatus);
        Object.keys(sortReg).forEach(key => {console.log(key);});
    }
}

parkingTracker(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
 parkingTracker(['IN, CA2844AA',
     'IN, CA1234TA',
     'OUT, CA2844AA',
     'OUT, CA1234TA']);