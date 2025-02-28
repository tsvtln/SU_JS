function same_numbers(numbers){
    let result = 0
    const fn = Number(String(numbers)[0]);
    let all_same = true;

    for(let num of String(numbers)) {
        result += Number(num);

        if (Number(num) != fn){
            all_same = false;    
        }
    }

    console.log(all_same);
    console.log(result);

}

same_numbers(1234);