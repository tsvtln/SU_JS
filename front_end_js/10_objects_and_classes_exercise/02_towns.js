function towns(data) {
    class Towns {
        town;
        latitude;
        longitude;
        
        constructor(town, latitude, longitude) {
            this.town = town;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    let townObjects = [];
        
    for (let townInfo of data) {
        let [townName, lati, longi] = townInfo.split(' | ');
        townObjects.push(new Towns(townName, Number(lati).toFixed(2), Number(longi).toFixed(2)));
    }

    for (let tp of townObjects) {
        console.log({ town: tp.town, latitude: tp.latitude, longitude: tp.longitude });
    }
    
    /*
    for (let tp of townObjects) {
        console.log(JSON.stringify(tp));
    }
    */    
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']
    );
towns(['Plovdiv | 136.45 | 812.575']);