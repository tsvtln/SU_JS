function BasketballEquipment(input) {
    let year_price = Number(input[0]);
    let sneakers_price = year_price - (year_price * 0.4);
    let clothes_price = sneakers_price - (sneakers_price * 0.2);
    let ball_price = clothes_price / 4;
    let accessories_price = ball_price / 5;
    console.log(year_price + sneakers_price + clothes_price + ball_price + accessories_price);
}

BasketballEquipment(["365"])
