function solve() {
    const number = Number(document.getElementById('input').value);
    const convertTo = document.getElementById('selectMenuTo').value;

    let result = '';

    if (convertTo === 'binary') {
        result = number.toString(2);
    } else if (convertTo === 'hexadecimal') {
        result = number.toString(16).toUpperCase();
    }

    document.getElementById('result').value = result;
}