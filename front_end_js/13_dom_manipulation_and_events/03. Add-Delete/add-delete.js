function addItem() {
    let input = document.getElementById('newItemText');
    let text = input.value;

    if (!text) {
        return;
    }

    let newLi = document.createElement('li');
    newLi.textContent = text;

    let deleteBtn = document.createElement('a');
    deleteBtn.href = '#';
    deleteBtn.textContent = '[Delete]';
    newLi.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onDelete);


    let list = document.getElementById('items');
    list.appendChild(newLi);

    input.value = '';

    function onDelete(e) {
        let item = e.target.parentElement;
        item.remove();
    }
}
