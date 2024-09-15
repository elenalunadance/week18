const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const clearButton = document.getElementById('clearButton');

clearButton.disabled = true;

function createTask() {
    const taskText = taskInput.value;
    
    
    const newTask = document.createElement('li');
    newTask.className = 'list-items';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';

    
    const taskLabel = document.createElement('span');
    taskLabel.textContent = taskText;
    taskLabel.className = 'new-list';
    
    newTask.appendChild(taskLabel);
    newTask.appendChild(checkbox);

    taskList.append(newTask);

    clearButton.disabled = false;
    
    taskInput.value = '';

    addLocalStorage();
}


function checkTask(event) {
    if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const taskItem = event.target.parentElement;
    }

}

function clearTask() {
    taskList.textContent = '';
    clearButton.disabled = true;
}

function addLocalStorage() {
    const tasks = [];
    const items = taskList.querySelectorAll('li');

    items.forEach(item => {
        const text = item.querySelector('.new-list').textContent;
        tasks.push({ text }); // Сохраняем только текст задачи
    });

    localStorage.setItem('newTaskList', JSON.stringify(tasks)); // Сохраняем массив задач
}



addButton.addEventListener('click', createTask);
taskList.addEventListener('click', checkTask);
clearButton.addEventListener('click', clearTask);
