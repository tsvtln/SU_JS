function PetShop(input) {
    let priceDogFood = 2.50;
    let priceCatFood = 4;
    let [numberDogFood, numberCatFood] = input
    console.log(`${(priceDogFood * numberDogFood) + (priceCatFood * numberCatFood)} lv.`)
}
PetShop(["5", "4"])
