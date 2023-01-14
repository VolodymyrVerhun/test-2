
const btn = document.querySelectorAll('.button')
const divBlock = document.querySelectorAll('.text')


// btn.forEach((bat, index) => {
//     bat.addEventListener('click', (evt) => {
//         btn.forEach(bat => {
//             bat.classList.replace('red', 'button')
//         });
//         bat.classList.replace('button', 'red');

//         divBlock.forEach(textTitle => {
//             textTitle.classList.remove('active-text')
//         });
//         divBlock[index].classList.add('active-text');

//     })
// })

for (let i = 0; i < btn.length; i += 1) {
btn[i].addEventListener('click', () => {
    for (let i = 0; i < btn.length; i += 1) {
        btn[i].classList.replace('red', 'button')
    };
    btn[i].classList.replace('button', 'red');

    for( let t = 0; t < divBlock.length; t += 1) {
        divBlock[t].classList.remove('active-text')
    };
    divBlock[i].classList.add('active-text')


} )
}


