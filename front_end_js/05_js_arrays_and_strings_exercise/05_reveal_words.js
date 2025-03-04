function revealWords(word, sentence) {
    let firstArea = []
    if (word.includes(', ')){
        firstArea = word.split(', ')
    } else {
        firstArea = [word]
    }
    let arr = sentence.split(' ');
    for (let index = 0; index < arr.length; index++){
        for (let i = 0; i < firstArea.length; i++){
            if (arr[index] === '*'.repeat(firstArea[i].length)){
                arr[index] = firstArea[i]
            }
        }
    }
    console.log(arr.join(' '))
}

// function revealWord(words, sentence) {
//     let replacableWords = words.split(', ');
//     let arrayOfWords = sentence.split(' ');

//     for(let [idx, w] of arrayOfWords.entries()){
//         if(w.includes('*')){
//             arrayOfWords[idx] = replacableWords[0];
//              replacableWords.splice(0, 1);
//         }
//     }

//     console.log(arrayOfWords.join(' '));

// }

revealWord('great', 'softuni is ***** place for learning new programming languages');
revealWord('great, learning', 'softuni is ***** place for ******** new programming languages');