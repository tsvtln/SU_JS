// ++++++++++++++++ MAIN ++++++++++++++++ //

window.addEventListener('load', reservation);

function reservation() {
    document.getElementById('add-reservation').addEventListener('click', onAdd);
    document.getElementById('edit-reservation').addEventListener('click', onEdit);
    document.getElementById('load-history').addEventListener('click', onLoad);
}

let currentEditId = null;


// ++++++++++++++++ DOM SECTION ++++++++++++++++ //

async function onLoad() {
    let reservations = await getReservations();
    let list = document.getElementById('list');
    list.innerHTML = '';

    reservations.forEach(r => {
        list.appendChild(createReservationElement(r));
    });
}

async function onAdd(event) {
    event.preventDefault();

    let reservation = getFormData();
    if (!isValid(reservation)) {
        return;
    }

    await createReservation(reservation);
    clearForm();
    await onLoad();
}

async function onEdit(event) {
    event.preventDefault();

    if (!currentEditId) return;

    let updated = getFormData();
    updated._id = currentEditId;

    if (!isValid(updated)) {
        return;
    }

    await updateReservation(updated);
    clearForm();
    await onLoad();

    document.getElementById('edit-reservation').disabled = true;
    document.getElementById('add-reservation').disabled = false;
    currentEditId = null;
}

function createReservationElement(reservation) {
    let div = document.createElement('div');
    div.className = 'container';

    let h2 = document.createElement('h2');
    h2.textContent = reservation.names;

    let h3Date = document.createElement('h3');
    h3Date.textContent = reservation.date;

    let h3Day = document.createElement('h3');
    h3Day.id = 'reservation_days';
    h3Day.textContent = reservation.days;

    let btns = document.createElement('div');
    btns.className = 'buttons-container';

    let changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';
    changeBtn.addEventListener('click', () => {
        setFormData(reservation);
        currentEditId = reservation._id;
        document.getElementById('edit-reservation').disabled = false;
        document.getElementById('add-reservation').disabled = true;
    });

    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', async () => {
        await deleteReservation(reservation._id);
        await onLoad();
    });

    btns.append(changeBtn, deleteBtn);
    div.append(h2, h3Date, h3Day, btns);

    return div;
}


// ++++++++++++++++ FORM CONTROLLER ++++++++++++++++ //

function getFormData() {
    return {
        names: document.getElementById("names").value.trim(),
        days: document.getElementById("days").value.trim(),
        date: document.getElementById("date").value.trim()
    };
}

function setFormData({ names, days, date }) {
    document.getElementById("names").value = names;
    document.getElementById("days").value = days;
    document.getElementById("date").value = date;
}

function clearForm() {
    document.getElementById("names").value = "";
    document.getElementById("days").value = "";
    document.getElementById("date").value = "";
}

function isValid(data) {
    return data.names && data.days && data.date;
}


// ++++++++++++++++ NETWORKING SECTION ++++++++++++++++ //

async function getReservations() {
    const res = await fetch('http://localhost:3030/jsonstore/reservations/');
    const data = await res.json();
    return Object.values(data);
}

async function createReservation(data) {
    await fetch('http://localhost:3030/jsonstore/reservations/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

async function updateReservation(data) {
    await fetch('http://localhost:3030/jsonstore/reservations/' + data._id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

async function deleteReservation(id) {
    await fetch('http://localhost:3030/jsonstore/reservations/' + id, {
        method: "DELETE"
    });
}
