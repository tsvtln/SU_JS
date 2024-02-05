function animalType(input) {
    let animal = String(input[0]);
    let to_print = '';
    switch (animal) {
        case 'dog':
            to_print = 'mammal';
            break;
        case 'crocodile':
        case 'tortoise':
        case 'snake':
            to_print = 'reptile';
            break;
        default:
            to_print = 'unknown';
    }
    console.log(to_print);
}

// animalType(["dog"]);
// animalType(["snake"]);
// animalType(["cat"]);
