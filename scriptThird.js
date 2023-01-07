
const blockBtn = document.querySelector('.block-button');
const textBlock = document.querySelector('.third');

blockBtn.addEventListener('click', changeBtn);
 


function changeBtn(event) {
    if (event.target.nodeName !== 'BUTTON') {
        return;
    }
       const activeBtn = document.querySelector('.active');

    if (activeBtn) {
       activeBtn.classList.remove('active') 
    }
    event.target.classList.add('active')
}