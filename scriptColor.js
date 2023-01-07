
const btn = document.querySelectorAll('.button')
const divBlock = document.querySelectorAll('.describe')

btn[0].addEventListener('click', makeRed);

function makeRed() {
    if (btn[0].classList.contains('button')) {
        btn[0].classList.replace('button', 'red')} else {
            btn[0].classList.replace('red', 'button')
        };
    if (!btn[0].classList.contains('button')) {
    divBlock[0].textContent = 'STOP';} else {divBlock[0].textContent = ''}
};


btn[1].addEventListener('click', makeYellow);

function makeYellow() {
    if (btn[1].classList.contains('button')) {
        btn[1].classList.replace('button', 'yellow')} else {
            btn[1].classList.replace('yellow', 'button')
        };
        if (!btn[1].classList.contains('button')) {
            divBlock[1].textContent = 'WAIT';} else {divBlock[1].textContent = ''}
    };

btn[2].addEventListener('click', makeGreen);

function makeGreen() {
    if (btn[2].classList.contains('button')) {
        btn[2].classList.replace('button', 'green')} else {
            btn[2].classList.replace('green', 'button')
        };
        if (!btn[2].classList.contains('button')) {
            divBlock[2].textContent = 'GO';} else {divBlock[2].textContent = ''}
    }