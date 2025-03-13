// function oddOccurances (sentence) {
//     const isOdd = num => num % 2 !== 0;
//     let wordCounter = {};
//     let wordList = sentence.toLowerCase().split(' ')
//     let oddWords = [];
//     for (let word of wordList){
//         if (wordCounter.hasOwnProperty(word)){
//             wordCounter[word] += 1;
//         } else {
//             wordCounter[word] = 1;
//         }
//     }

//     for (let [k, v] of Object.entries(wordCounter)) {
//         isOdd(v) && oddWords.push(k);
//     }
//     console.log(oddWords.join(' '))
// }

function oddOccurances(sentence) {
    const isOdd = num => num % 2 !== 0;
    let wordCounter = {};
    let wordList = sentence.toLowerCase().split(' ');
    let oddWords = [];

    for (let word of wordList) {
        if (wordCounter.hasOwnProperty(word)) {
            wordCounter[word] += 1;
        } else {
            wordCounter[word] = 1;
        }
    }

    for (let word of wordList) {isOdd(wordCounter[word]) && !oddWords.includes(word) && oddWords.push(word);}
    console.log(oddWords.join(' '));
}

oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
//oddOccurances('Cake IS SWEET is Soft CAKE sweet Food');