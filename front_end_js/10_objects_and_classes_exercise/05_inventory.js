function inventory(arr) {

    let sortedArray = arr.sort((a, b) => {
        let numA = Number(a.split(" / ")[1]); 
        let numB = Number(b.split(" / ")[1]);
        return numA - numB;
    });
    
    for (let heroInfo of sortedArray) {
        let data = heroInfo.split(' / ');
        console.log(`Hero: ${data[0]}\nlevel => ${data[1]}\nitems => ${data[2]}`)
    }      
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )