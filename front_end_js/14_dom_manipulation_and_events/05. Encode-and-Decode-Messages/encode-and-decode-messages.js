document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let encodeForm = document.getElementById('encode');
    let decodeForm = document.getElementById('decode');

    encodeForm.addEventListener('submit', function(e){
        e.preventDefault();
        let textInput = Array.from(encodeForm.children[0].value);
        let newNumsenc = [];

        for (let letter of textInput) {
            let numE = letter.charCodeAt(0);
            newNumsenc.push(String.fromCharCode(numE + 1));
        }
        encodeForm.children[0].value = '';
        decodeForm.children[0].value = newNumsenc.join('');
    });

    decodeForm.addEventListener('submit', function(e){
        e.preventDefault();
        let textInput = Array.from(decodeForm.children[0].value);
        let newNumsdec = [];

        for (let letter of textInput) {
            let numD = letter.charCodeAt(0);
            newNumsdec.push(String.fromCharCode(numD - 1));
        }
        decodeForm.children[0].value = newNumsdec.join('');
    });
}
