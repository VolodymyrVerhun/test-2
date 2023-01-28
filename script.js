const form = document.querySelector('.block-input');
console.log(form);
const formInput = document.querySelector('#taskInput');
const ulList = document.querySelector('.block-list');

let localArray = [];
if (localStorage.getItem('localElement')) {
    localArray = JSON.parse(localStorage.getItem('localElement'))
};

localArray.forEach(function (elem) {
    const taskHtml = `
   <li id="${elem.id}"class="block-list-item">
    <span class="">${elem.text}</span>
    <button type="button" data-action="delete" class="block-list-item-btn">
            видалити
    </button>
    
  </li> 
   `
   
   ulList.insertAdjacentHTML('afterbegin', taskHtml);
})

form.addEventListener('submit', addTask);
ulList.addEventListener('click', deleteTask);

function addTask (event) {
    event.preventDefault();
   const taskText = formInput.value;
    const newElem = {
        id: Date.now(),
        text: taskText,
    };
     
    localArray.push(newElem);

   const taskHtml = `
   <li id="${newElem.id}"class="block-list-item">
    <span class="">${newElem.text}</span>
    <button type="button" data-action="delete" class="block-list-item-btn">
            видалити
    </button>
    
  </li> 
   `
   saveLocal();
   ulList.insertAdjacentHTML('afterbegin', taskHtml);
   formInput.value = '';
   formInput.focus();
};



function deleteTask (event) {
    if (event.target.dataset.action === "delete") {
        const liEl = event.target.closest('li');
        const id = Number(liEl.id);
        const index = localArray.findIndex( function (el) {
            return el.id === id;
        })
        localArray.splice(index, 1);
        liEl.remove();

        saveLocal();
    }
};

function saveLocal () {
    localStorage.setItem('localElement', JSON.stringify(localArray))
}