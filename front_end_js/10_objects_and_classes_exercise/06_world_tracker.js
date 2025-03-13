function wordCounter(arr){
    let wordsToFind = (arr.shift()).split(' ');
    let foundCounter = {};

    for (let w of wordsToFind){
        foundCounter[w] = 0;
    }

    for (let w of arr){
        if (w in foundCounter){
            foundCounter[w] += 1;
        }
    }

    function sortObject(obj) {
        let items = Object.entries(obj); 
        items.sort((a, b) => b[1] - a[1]); 
        
        let sorted_obj = {};
        items.forEach(([key, value]) => {
            sorted_obj[key] = value;
        });

        return sorted_obj;
    } 

    let sortedDict = sortObject(foundCounter)

    for (let [k, v] of Object.entries(sortedDict)){
        console.log(`${k} - ${v}`)
    }  
}

wordCounter(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task', 'sentence', 'sentence', 'sentence']);
//wordCounter(['is the', 'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);