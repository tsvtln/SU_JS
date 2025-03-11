// 80/100

function movies(arr){

    class MoviesData {
        name;
        properties;
        
        constructor(name){
            this.name = name;
            this.properties = new Map();
        }
        
        addProperty(key, value){
            if (!this.properties.has(key)){
                this.properties.set(key, value);
            }
        }
    }



    let movies = [];


    for (let movie of arr){
        let movieData = movie.split(' ');

        if (movieData[0] === 'addMovie') {
            movies.push(new MoviesData((movieData.slice(1)).join(' ')))
        } else if (movieData.includes('onDate')){
            let data = movieData.filter(item => item !== 'onDate');
            let date = data.pop();
            let movieName = data.join(' ');

            if (movies.find(m => m.name === movieName)){
                let grepMovieObject = movies.find(m => m.name === movieName);
                grepMovieObject.addProperty('date', date);
            }
        } else if (movieData.includes('directedBy')) {
            let directorName = ((movieData.slice(movieData.indexOf('directedBy'))).filter(item => item != 'directedBy')).join(' ');
            let movieName = (movieData.slice(0, movieData.indexOf('directedBy'))).join(' ');

            if (movies.find(m => m.name === movieName)) {
                let grepMovieObject = movies.find(m => m.name === movieName);
                grepMovieObject.addProperty('director', directorName);
            }}}
    
            for (let printer of movies) {
                if (printer.name && printer.properties.has('date') && printer.properties.has('director')) {
                    let orderedMovie = { name: printer.name };
                    for (let [key, value] of printer.properties) {
                        orderedMovie[key] = value;
                    }
                    console.log(JSON.stringify(orderedMovie));
                }
            }
        }


movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );
movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
]);


// 100/100
function movies(arr) {
    let movies = [];

    for (let movie of arr) {
        if (movie.startsWith("addMovie ")) {
            let movieName = movie.replace("addMovie ", "").trim();
            movies.push({ name: movieName });
        } else if (movie.includes(" directedBy ")) {
            let [movieName, director] = movie.split(" directedBy ");
            let existingMovie = movies.find(m => m.name === movieName.trim());
            if (existingMovie) {
                existingMovie.director = director.trim();
            }
        } else if (movie.includes(" onDate ")) {
            let [movieName, date] = movie.split(" onDate ");
            let existingMovie = movies.find(m => m.name === movieName.trim());
            if (existingMovie) {
                existingMovie.date = date.trim();
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
