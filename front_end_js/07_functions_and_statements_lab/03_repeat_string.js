function repeatString(str, num){
    let tp = '';
    for(let i=0; i<num; i++){
        tp+=str;
    }
    return(tp);
}

console.log(repeatString("abc", 3));
console.log(repeatString("String", 2));