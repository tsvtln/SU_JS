function processSongs (songsData) {

    class Song {
        constructor (type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }}

    let songs = [];
    let numberOfSongs = songsData.shift();
    let typeSong = songsData.pop();

    for (let i=0; i<numberOfSongs; i++){
        let [type, name, time] = songsData[i].split('_');
        songs.push(new Song(type, name, time));
    }

    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name))
    } else {
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

processSongs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );