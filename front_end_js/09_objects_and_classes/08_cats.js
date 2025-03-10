function catCreator(arr) {
    class Cat{
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


catCreator(['Mellow 2', 'Tom 5']);
catCreator(['Candy 1', 'Poppy 3', 'Nyx 2']);