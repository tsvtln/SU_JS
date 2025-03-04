function sortNumbers(array){
    let output = [];
    let sortedArray = array.sort(function(a, b){return a-b});

    while(sortedArray.length > 0){
        output.push(sortedArray[0]);
        sortedArray.splice(0, 1);
        if(sortedArray){
            let val = 0;
            val = sortedArray.pop();
            output.push(val);
        }
    }

    return(output);
    //console.log(output);
};

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));