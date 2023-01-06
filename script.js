const input = document.querySelector('.block-input input');
const button = document.querySelector('.block-input button');
const list = document.querySelector('.block-list');



button.addEventListener('click', makeList);

function makeList() {
    const liEl = document.createElement('li');
    const deleteBtn = document.createElement('button');

    liEl.className = 'block-list-item';
    deleteBtn.className = 'block-list-item-btn';
    deleteBtn.innerText = 'видалити';
    liEl.innerText = input.value;
    list.appendChild(liEl);
    liEl.appendChild(deleteBtn);
    input.value = '';

    deleteBtn.addEventListener('click', () => {
        list.removeChild(liEl);
    }) 
}
    
