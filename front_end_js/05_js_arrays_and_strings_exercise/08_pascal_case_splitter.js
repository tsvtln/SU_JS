function pascalSplitter(sent){
    let result = [];
    let holder = '';
    let counter = 0;
    for(w of sent){
        counter += 1;
        if(holder === ''){
            holder += w;
        }
        else{
            if(w === w.toUpperCase()){
                result.push(holder);
                holder = '';
                holder += w;
            }
            else{
                holder += w;
            }
        }
        if(counter === sent.length){
            result.push(holder);
            break;
        }
    }

    console.log(result.join(', '));
}

pascalSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalSplitter('HoldTheDoor');
pascalSplitter('ThisIsSoAnnoyingToDo');