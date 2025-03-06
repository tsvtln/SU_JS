function createMX(int){
    console.log((Array(int).fill().map(() => (Array(int).fill(int).join(' ')))).join('\n'));
}

createMX(3);
createMX(7);
createMX(2);

const mxSpread = (Array(int).fill().map(() => (Array(int).fill(int).join(' ')))).join('\n');
