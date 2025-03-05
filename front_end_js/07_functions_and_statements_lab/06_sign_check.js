function signCheck(num1, num2, num3){
    let result;
    result = (num1, num2, num3) => num1 * num2 * num3;

    if(result(num1, num2, num3) < 0){
        console.log('Negative');
    }
    else{
        console.log('Positive');
    }
    //console.log(result(num1, num2, num3));
}

signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);