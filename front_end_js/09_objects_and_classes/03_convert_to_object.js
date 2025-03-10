function convertToObject(json){
    let person = JSON.parse(json);

    for (let [k, v] of Object.entries(person)) {
        console.log(`${k}: ${v}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}');