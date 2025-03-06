function palindromeTester(array){
    for(let i=0; i<array.length; i++){
        if(String(array[i]) === String(array[i]).split("").reverse().join("")){
            console.log('true');
        }
        else{
            console.log('false');
        }
    }
}

palindromeTester([123,323,421,121]);
palindromeTester([32,2,232,1010]);