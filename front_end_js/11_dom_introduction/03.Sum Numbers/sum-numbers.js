function calc() {
    num1 = document.getElementById('num1')
    num2 = document.getElementById('num2')

    let a = Number(num1.value);
    let b = Number(num2.value);
    let sum = a + b;

    let output = document.getElementById('sum');
    output.value = sum;
}