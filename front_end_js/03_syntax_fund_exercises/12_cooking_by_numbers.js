function cooking_by_numbers(n, op1, op2, op3, op4, op5){
    let num = Number(n);
    
    for(i = 1; i<=5; i++){
        if(arguments[i] === 'chop'){
            num /= 2;
        }
        else if(arguments[i] === 'dice'){
            num = Math.sqrt(num);
        }
        else if(arguments[i] === 'spice'){
            num += 1;
        }
        else if(arguments[i] === 'bake'){
            num *= 3;
        }
        else if(arguments[i] === 'fillet'){
            num *= 0.8;
        }

        console.log(num);

    } 
}

cooking_by_numbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cooking_by_numbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');