function toggle() {
    let buttonMore = document.getElementsByClassName('button')[0];
    let extra = document.getElementById('extra');

    if (buttonMore.textContent === 'More'){
        buttonMore.textContent = 'Less';
        extra.style.display = 'block'
    } else {
        extra.style.display = 'none'
        buttonMore.textContent = 'More';
    }
}