window.addEventListener("load", solve)

function solve() {
    const form = document.getElementById('contact_form');
    const inputFN = document.getElementById('first_name');
    const inputLN = document.getElementById('last_name');
    const inputPhn = document.getElementById('phone');
    const pendingContacts = document.getElementById('pending_contact_list');
    const allContacts = document.getElementById('contact_list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = inputFN.value.trim();
        const lastName = inputLN.value.trim();
        const phn = inputPhn.value.trim();

        if (!firstName || !lastName || !phn) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'contact';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'names';
        nameSpan.textContent = `${firstName} ${lastName}`;

        const phoneSpan = document.createElement('span');
        phoneSpan.className = 'phone_number';
        phoneSpan.textContent = phn;

        const editBtn = document.createElement('button');
        editBtn.className = 'edit_btn';
        editBtn.textContent = 'Edit';

        const verifyBtn = document.createElement('button');
        verifyBtn.className = 'verify_btn';
        verifyBtn.textContent = 'Verify';

        li.appendChild(nameSpan);
        li.appendChild(phoneSpan);
        li.appendChild(editBtn);
        li.appendChild(verifyBtn);
        pendingContacts.appendChild(li);

        inputFN.value = '';
        inputLN.value = '';
        inputPhn.value = '';

        editBtn.addEventListener('click', () => {
            const [first, last] = nameSpan.textContent.split(' ');
            inputFN.value = first;
            inputLN.value = last;
            inputPhn.value = phoneSpan.textContent;
            pendingContacts.removeChild(li);
        });

        verifyBtn.addEventListener('click', () => {
            li.removeChild(editBtn);
            li.removeChild(verifyBtn);
            li.className = 'verified_contact';

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete_btn';
            deleteBtn.textContent = 'Delete';

            li.appendChild(deleteBtn);
            pendingContacts.removeChild(li);
            allContacts.appendChild(li);
            deleteBtn.addEventListener('click', () => {
                allContacts.removeChild(li);
            });
        });
    });
}
