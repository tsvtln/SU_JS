function reverseArray(num, array) {
    console.log(array.slice(0, num).reverse().join(' '));
}

reverseArray(3, [10, 20, 30, 40, 50])
reverseArray(4, [-1, 20, 99, 5])
reverseArray(2, [66, 43, 75, 89, 47])