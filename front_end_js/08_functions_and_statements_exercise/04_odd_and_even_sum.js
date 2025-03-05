function oddEvenSum(num){
    let numsSpread = [];
    let oddNums = [];
    let evenNums = [];
    const isOdd = number => number % 2 !== 0;

    for(n of String(num)){
        numsSpread.push(n);
    }

    function add(accumulator, a) {
        return accumulator + a;
      }

    for(n of numsSpread){
        if(isOdd(Number(n))){
            oddNums.push(Number(n));
        }
        else{
            evenNums.push(Number(n));
        }
    }

    console.log(`Odd sum = ${oddNums.reduce(add, 0)}, Even sum = ${evenNums.reduce(add, 0)}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);