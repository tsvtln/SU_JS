// ++++++++++++++++ MAIN ++++++++++++++++ //

document.querySelector('form').addEventListener('submit', onCreate)
onload();

async function onload(params) {
    let students = await loadStudets();
    let list = document.querySelector('tbody');
    list.replaceChildren();

    for (let student of students) {
        let row = document.createElement('tr');
        row.innerHTML = [
            `<td>${student.firstName}</td>`,
            `<td>${student.lastName}</td>`,
            `<td>${student.facultyNumber}</td>`,
            `<td>${student.grade.toFixed(2)}</td>`
        ].join('');

        list.appendChild(row);
    }

}

// ++++++++++++++++ DOM Section ++++++++++++++++ //

async function onCreate(e) {
    e.preventDefault();
    let inputs = {
        firstName: document.querySelector('[name="firstName"]'),
        lastName: document.querySelector('[name="lastName"]'),
        facultyNumber: document.querySelector('[name="facultyNumber"]'),
        grade: document.querySelector('[name="grade"]')
    }

    let student = {
        firstName: inputs.firstName.value,
        lastName: inputs.lastName.value,
        facultyNumber: inputs.facultyNumber.value,
        grade: inputs.grade.value
    }

    if (!student.firstName || !student.lastName || !student.facultyNumber || !student.grade) {
        return;
    }

    await createStudent(student);

    onload();
    
}


// ++++++++++++++++ Networking Section ++++++++++++++++ //
async function loadStudets() {
    let res = await fetch('http://localhost:3030/jsonstore/collections/students');
    let data = await res.json();
    return Object.values(data);
}

async function createStudent(student) {
    // let student = {
    //     firstName,
    //     lastName,
    //     facultyNumber,
    //     grade
    // };

    let options = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    };

    await fetch('http://localhost:3030/jsonstore/collections/students', options);
}

