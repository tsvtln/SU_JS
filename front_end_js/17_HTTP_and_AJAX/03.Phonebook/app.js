function attachEvents() {
    document.getElementById('btnLoad').addEventListener('click', onLoad);
    document.getElementById('btnCreate').addEventListener('click', onCreate);
}

attachEvents();

async function onLoad() {
    let phones = await loadPhones();

    let phonebook = document.getElementById('phonebook');

    phonebook.replaceChildren();
    for (let phone of phones){
        let row = document.createElement('li');
        row.textContent = `${phone.person}: ${phone.phone}`;

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => onDelete(row, phone._id));

        row.appendChild(deleteBtn);
        phonebook.appendChild(row);
    }
}

async function onDelete(row, phoneId) {
    await deletePhoneById(phoneId);
    row.remove();
}

async function onCreate() {
    let personInput = document.getElementById('person');
    let phoneInput = document.getElementById('phone');
    
    let person = personInput.value;
    let phone = phoneInput.value;

    if (!person || !phone) {
        return;
    }

    await createPhones(person, phone);

    onLoad();
}

async function loadPhones() {
    let res = await fetch('http://localhost:3030/jsonstore/phonebook');
    let data = await res.json();

    return Object.values(data);
}


async function createPhones(person, phone) {
    let record = {
        person,
        phone
    }

    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record)
    }

    await fetch('http://localhost:3030/jsonstore/phonebook', options);
}

async function deletePhoneById(phoneId) {
    await fetch('http://localhost:3030/jsonstore/phonebook/' + phoneId, {method: 'delete'});
}