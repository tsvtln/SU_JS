function wFinder(w, sentence){
    let wdsArray = sentence.split(' ');
    let tp = '';

    for(wd of wdsArray){
        if(wd.toLowerCase() === w){
            tp = w;
        }
    }

    if(tp === ''){
        tp = `${w} not found!`
    }

    console.log(tp)
}

wFinder('javascript', 'JavaScript is the best programming language');
wFinder('python', 'JavaScript is the best programming language');
