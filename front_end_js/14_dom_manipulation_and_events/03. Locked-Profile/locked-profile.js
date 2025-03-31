document.addEventListener('DOMContentLoaded', solve);

function solve() {
    // When one of the [Show more] buttons is clicked, the hidden information inside the div should
    // be shown, only if the profile is not locked! If the current profile is locked, nothing should happen.

    // If the hidden information is displayed and we lock the profile again, the [Hide it] button should not be working! 
    // Otherwise, when the profile is unlocked and we click on the [Hide it] button, the new fields must hide again.

    // lock
    // document.getElementsByClassName('profile')[0].childNodes[3].childNodes[3].hasAttribute('checked')

    // unlock
    // document.getElementsByClassName('profile')[0].childNodes[3].childNodes[7]


    let allProfiles = Array.from(document.getElementsByClassName('profile'));
    
    allProfiles.forEach(profile => {
        let lockRadio = profile.querySelector('input[id$="Lock"]');
        let unlockRadio = profile.querySelector('input[id$="Unlock"]');
        let hiddenFields = profile.querySelector('.hidden-fields');
        let button = profile.querySelector('button');

        button.addEventListener('click', () => {
            if (!unlockRadio.checked) return;
            
            if (hiddenFields.style.display === 'block') {
                hiddenFields.style.display = 'none';
                button.textContent = 'Show more';
            } else {
                hiddenFields.style.display = 'block';
                button.textContent = 'Hide it';
            }
        })
    })
}
