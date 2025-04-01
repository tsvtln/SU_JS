document.addEventListener('DOMContentLoaded', solve);

function solve() {
    let NewText = document.getElementById('newItemText');
    let NewValue = document.getElementById('newItemValue');
    let formField = document.querySelector('form');
    let btn = document.querySelector('input[type="submit"]');
    let menu = document.getElementById('menu');

    btn.addEventListener('click', onClick);

    formField.addEventListener('submit', function(e){e.preventDefault();});

    function onClick() {
        let valText = NewText.value;
        let valValue = NewValue.value;

        if (valText === '' || valValue === '') {
            return;
        }
        
        let sec = document.createElement('option');
        sec.value = valValue;
        sec.textContent = valText;
        menu.appendChild(sec);

        NewText.value = '';
        NewValue.value = '';
//            console.log(valText, valValue);
    }
}
