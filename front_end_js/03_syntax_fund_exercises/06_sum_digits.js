function sum_digits(num) {
    let result = 0;
    let str_of_num = String(num);

    for(let char of str_of_num) {
        result += Number(char);
    }

    console.log(result);

}

sum_digits(245678);
sum_digits(97561);
sum_digits(543);