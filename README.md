### Iteraterate over objects
    for (let [n, v] of Object.entries(phoneCatalogue)){
        console.log(`${n} -> ${v}`);
    }

### Sort objects

    function sortObjectByKeys(obj) {
        return Object.fromEntries(Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)));
    }


    // or

    function sortEntries(a, b) {
        return a[0].localeCompare(b[0]);
    }

    let phoneBook = {
        'John Smith': '+1-555-7988',
        'Anne Frank': '+1-555-4719',
        'Peter Parker': '+1-555-3245',
    }

    let entries = Object.entries(phoneBook);
    entries.sort(sortEntries);

    const sortedEntries = Object.fromEntries(entries);


### Create matrix
const mxSpread = (Array(int).fill().map(() => (Array(int).fill(int).join(' ')))).join('\n');

### Reverse string
String(array[i]) === String(array[i]).split("").reverse().join("")

### Arrow func examples
    let sum = (a, b) => a + b;
    result = (num1, num2, num3) => num1 * num2 * num3;

### Find min/max number
Math.min.apply(Math, [v1, v2, v3])

### Switch example
    switch (operator) {
        case 'multiply':
            result = (num1, num2) => num1 * num2;
            break;
        case 'divide':
            result = (num1, num2) => num1 / num2;
            break;
        case 'add':
            result = (num1, num2) => num1 + num2;
            break;
        case 'subtract':
            result = (num1, num2) => num1 - num2;
            break;
        default:
            return "Invalid operator";
    }

### Repeater example
function censoreship(sentence, cesnorWord) {
    console.log(sentence.replaceAll(cesnorWord, '*'.repeat(cesnorWord.length)));
}


### Class example
function catCreator(arr) {
    class Cat{
        name_;
        age;

        constructor(name_, age) {
            this.name = name_;
            this.age = age;
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }}

    let catsInfo = {}

    for (let catData of arr){
        let [catName, catAge] = catData.split(' ');
        catsInfo[catName] = catAge;
    }

    for (let [cat, age] of Object.entries(catsInfo)){
        let cato = new Cat(cat, age);
        cato.meow();
    }
}

// as map

let myMap = new Map();  // create map(class)
myMap.set('Peter Parker', '29');  // sets values
myMap.get('Peter Parker')  // greps obj
myMap.has('Peter Parker')  // check for obj
