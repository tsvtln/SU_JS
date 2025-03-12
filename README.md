### Iteraterate over objects
```
    for (let [n, v] of Object.entries(phoneCatalogue)){
        console.log(`${n} -> ${v}`);
    }
```

### Sort objects (dict) by key
```
    function sortObjectByKeys(obj) {
        return Object.fromEntries(Object.entries(obj).sort(([keyA], [keyB]) => keyA.localeCompare(keyB)));
    }
```

    // or
```
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
```


### Sort dict by value
```
var dict = {
  "x": 1,
  "y": 6,
  "z": 9,
  "a": 5,
  "b": 7,
  "c": 11,
  "d": 17,
  "t": 3
};

// Create items array
var items = Object.keys(dict).map(function(key) {
  return [key, dict[key]];
});

// Sort the array based on the second element
items.sort(function(first, second) {
  return second[1] - first[1];
});
```

### Create matrix
```
const mxSpread = (Array(int).fill().map(() => (Array(int).fill(int).join(' ')))).join('\n');
```

### Reverse string
```
String(array[i]) === String(array[i]).split("").reverse().join("")
```

### Arrow func examples
```
    let sum = (a, b) => a + b;
    result = (num1, num2, num3) => num1 * num2 * num3;
```

### Find min/max number
```
Math.min.apply(Math, [v1, v2, v3])
```

### Switch example
```
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
```

### Repeater example
```
function censoreship(sentence, cesnorWord) {
    console.log(sentence.replaceAll(cesnorWord, '*'.repeat(cesnorWord.length)));
}
```

### Class example
```
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
```

##### as map
```
let myMap = new Map();  // create map(class)
myMap.set('Peter Parker', '29');  // sets values
myMap.get('Peter Parker')  // greps obj
myMap.has('Peter Parker')  // check for obj

for (let [name, age] of myMap){
    console.log(name, age);
}  // traverse the map
```
