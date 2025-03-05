function asciiFinder(startChar, endChar){
    let decStart = startChar.charCodeAt(0);
    let decEnd = endChar.charCodeAt(0);
    let asArr = [decStart, decEnd];
    let sortedArr = asArr.sort(function(a, b){return a-b});
    let asciiArr = [];
    let asciiToChar = [];

    for(let i=sortedArr[0]+1; i<sortedArr[1]; i++){
        asciiArr.push(i);
    }

    for(char of asciiArr){
        asciiToChar.push(String.fromCharCode(char));
    }

    console.log(asciiToChar.join(' '));

}

asciiFinder('a','d');
asciiFinder('#',':');
asciiFinder('C','#');