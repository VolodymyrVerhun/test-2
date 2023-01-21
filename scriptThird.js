
const blockBtn = document.querySelector('.block-button');
const btns = document.querySelectorAll('.button');
const fotoAll = document.querySelectorAll('.foto');



btns.forEach( function (tab, index) {
    tab.addEventListener('click', (event) => {
        btns.forEach(tab => {
            tab.classList.remove('active')
        })
        event.target.classList.add('active');

        fotoAll.forEach(foto => {foto.classList.remove('active-foto')});
         fotoAll[index].classList.add('active-foto')
    });
   
})


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
// const handle = (evt) => {
//     btns.forEach(tab => {
//         tab.classList.remove('active')
//     });
//     evt.target.classList.add('active');

//     fotoAll.forEach(foto => {foto.classList.remove('active-foto')});
//     fotoAll[index].classList.add('active-foto')
// ;
// }
