function evenPowersOf2(n) {
    for (let i = 0; i <= n; i++) {
        let power = 2 ** i;
        if (i % 2 === 0) {
            console.log(power);
        }
    }
}

// evenPowersOf2(["3"]);
// evenPowersOf2(["4"]);
// evenPowersOf2(["5"]);
// evenPowersOf2(["6"]);
// evenPowersOf2(["7"]);