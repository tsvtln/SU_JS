function findSmallest(v1, v2, v3){
    console.log(Math.min.apply(Math, [v1, v2, v3]));
}

findSmallest(2,5,3);
findSmallest(600,342,123);
findSmallest(25,21,4);
findSmallest(2,2,2);