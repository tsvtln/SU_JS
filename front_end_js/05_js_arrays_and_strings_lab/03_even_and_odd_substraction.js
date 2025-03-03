function eoCalculator(numbers) {
    let even = 0;
    let odd = 0;

    for (let num of numbers){
        if(num % 2 === 0){
            even += num;
        }
        else {
            odd += num;
        }
    }

    console.log(even - odd);
}

eoCalculator([1,2,3,4,5,6]);
eoCalculator([3,5,7,9]);
eoCalculator([2,4,6,8,10]);