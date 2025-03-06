function loadingBar(pct){
    const loaded = pct / 10;
    tp = '';
    let bar = Array(loaded).fill('%');
    let isLoaded = false;
    if(bar.length===10){
        isLoaded = true;
    }
    bar.push((Array(10 - loaded).fill('.')).join(''));
    if(isLoaded){
        tp = `100% Complete!\n[${bar.join('')}]`
    }
    else{
        tp = `${loaded}0% [${bar.join('')}]\nStill loading...`
    }
    console.log(tp);

}

loadingBar(30);
loadingBar(50);
loadingBar(100);