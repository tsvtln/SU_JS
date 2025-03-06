function fac(n1, n2){
    function factorial(n) {
        return n <= 1 ? 1 : n * factorial(n - 1);
    }

    let fact1 = factorial(n1);
    let fact2 = factorial(n2);
    let divisionResult = fact1 / fact2;

    console.log(divisionResult.toFixed(2));

}

fac(5, 2);
fac(6, 2);