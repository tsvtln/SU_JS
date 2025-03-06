// function loadingBar(pct){
//     const loaded = pct / 10;
//     tp = '';
//     let bar = Array(loaded).fill('%');
//     let isLoaded = false;
//     if(bar.length===10){
//         isLoaded = true;
//     }
//     bar.push((Array(10 - loaded).fill('.')).join(''));
//     if(isLoaded){
//         tp = `100% Complete!\n[${bar.join('')}]`
//     }
//     else{
//         tp = `${loaded}0% [${bar.join('')}]\nStill loading...`
//     }
//     console.log(tp);

// }

function loadingBar(pct) {
    const loaded = Math.floor(pct / 10);
    const bar = '%'.repeat(loaded) + '.'.repeat(10 - loaded);

    if (loaded === 10) {
        console.log(`100% Complete!\n[${bar}]`);
    } else {
        console.log(`${pct}% [${bar}]\nStill loading...`);
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
