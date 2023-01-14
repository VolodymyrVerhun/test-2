
const blockBtn = document.querySelector('.block-button');
const btn = document.querySelectorAll('.button');
const fotoAll = document.querySelectorAll('.foto');

// // blockBtn.addEventListener('click', changeBtn);
 


// function changeBtn(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         return;
//     }
//     //    const activeBtn = document.querySelector('.active');

//     // if (activeBtn) {
//     //    activeBtn.classList.remove('active') 
//     // }
//     // event.target.classList.add('active')
// };

btn.forEach(function (tab, index) {
    tab.addEventListener('click', (evt) => {
        btn.forEach(tab => {
            tab.classList.remove('active')
        });
        tab.classList.add('active');

        fotoAll.forEach(foto => {foto.classList.remove('active-foto')});
        fotoAll[index].classList.add('active-foto')
;
    })
})