function wordCounter(sentence, word){
    let split_sentence = sentence.split(' ');
    let counter = 0;

    for(let w of split_sentence){
        if(w === word){
            counter += 1;
        }
    }


    console.log(counter);
}

wordCounter('This is a word and it also is a sentence', 'is');
wordCounter('softuni is great place for learning new programming languages', 'softuni');