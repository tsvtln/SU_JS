function hashGpep(sentence){
    let arrayOfWords = sentence.split(' ');
    let foundWords = [];

    for(let w of arrayOfWords){
        if(w.includes('#') && w.length > 1 && /^[A-Za-z]+$/.test(w.slice(1))){
            foundWords.push(w.slice(1));
        }
    }
    console.log(foundWords.join('\n'));
}

hashGpep('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashGpep('The symbol # is known #variously in English-speaking #regions as the #number sign');