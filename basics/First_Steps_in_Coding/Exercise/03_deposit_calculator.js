function DepositCalculator(input) {
    let [deposit_sum, period, year_perc] = input.map(parseFloat);
    let result = deposit_sum + period * ((deposit_sum * (year_perc / 100)) / 12)
    console.log(result)
}
DepositCalculator(["200", "3", "5.7"])
