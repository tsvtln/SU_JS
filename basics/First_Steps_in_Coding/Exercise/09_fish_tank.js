function acquarium(input) {
    let [lenght, wide, tall, percent] = input.map(Number)
    let volume = lenght * wide * tall
    volume = volume / 1000
    volume = volume * (1 - (percent / 100))
    console.log(volume)
}

acquarium(["85", "75", "47", "17"])
