function nameSorter(array) {
    let sortedArray = array.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

    if(sortedArray.length >= 1){
    for(let [idx, name] of sortedArray.entries()){
        console.log(`${idx + 1}.${name}`);
    }}
}

nameSorter(["John", "Bob", "Christina", "Ema"]);
nameSorter([]);