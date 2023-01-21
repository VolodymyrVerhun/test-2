
const form = document.querySelector('#form');
const taskInput = document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');

let tasks = [];

if (localStorage.getItem('task')) {
    tasks = JSON.parse(localStorage.getItem('task'))
};

tasks.forEach(function (task) {
    const cssClass = task ? 'task-title ' : 'task-title span-done';
  
    const taskHtml = `
    <li id="${task.id}"class="list-group-item ">
    <span class="${cssClass}">${task.text}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action btn">
            виконано
        </button>
        <button type="button" data-action="delete" class="btn-action btn">
            видалити
        </button>
    </div>
  </li> 
    `
  tasksList.insertAdjacentHTML('beforeend', taskHtml);
});

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', doneTask)


function addTask (event) {
    event.preventDefault();
    

    const taskText = taskInput.value;

    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false,
    };
    
    tasks.push(newTask);
    

    const cssClass = newTask ? 'task-title ' : 'task-title span-done';
  
    const taskHtml = `
    <li id="${newTask.id}"class="list-group-item ">
    <span class="${cssClass}">${newTask.text}</span>
    <div class="task-item__buttons">
        <button type="button" data-action="done" class="btn-action btn">
            виконано
        </button>
        <button type="button" data-action="delete" class="btn-action btn">
            видалити
        </button>
    </div>
  </li> 
    `
    saveLocalStorage();
  tasksList.insertAdjacentHTML('beforeend', taskHtml);
  taskInput.value = "";
  taskInput.focus();
};

function deleteTask(event) {
if (event.target.dataset.action === 'delete') {
    const parenNode = event.target.closest('li');
    const id = Number(parenNode.id);
   
   const index = tasks.findIndex((task) => task.id === id);
    tasks.splice(index, 1);

    saveLocalStorage();

    parenNode.remove();
}
};

function doneTask (event) {
    if (event.target.dataset.action === 'done') {
        const parenNode = event.target.closest('li');

        const id = Number(parenNode.id);

        const task = tasks.find(function (task) {
            if (task.id === id) {
                return true
            }
        });

        task.done = !task.done;

        saveLocalStorage();

        const textSpam = parenNode.querySelector('.task-title');
        textSpam.classList.toggle('span-done')

    }
};

function saveLocalStorage () {
    localStorage.setItem('task', JSON.stringify(tasks))
}