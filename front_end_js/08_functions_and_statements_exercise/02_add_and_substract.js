function addSub(n1, n2, n3){
    let sum = (a, b) => a + b;
    let sub = (a, b) => a - b;
    console.log(sub(sum(n1, n2), n3));
}

addSub(23,6,10);
addSub(1,17,30);
addSub(42,58,100);