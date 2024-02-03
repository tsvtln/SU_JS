function YardGreening(input) {
    let data = input;
    let price = data * 7.61;
    let discount = price - (price * 0.82);
    let final_price = price - discount;
    console.log(`The final price is: ${final_price.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}
YardGreening(["550"])
