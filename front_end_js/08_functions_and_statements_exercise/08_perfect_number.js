function isPerfectNumber(n) {
    if (n <= 1) {
        console.log("It's not so perfect.");
        return;
    }

    let sum = 0;

    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    if (sum === n) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

isPerfectNumber(6);      
isPerfectNumber(28);    
isPerfectNumber(1236498); 
isPerfectNumber(12);   
