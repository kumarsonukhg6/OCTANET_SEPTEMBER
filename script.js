// Select elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Add task
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        const li = document.createElement('li');

        // Task text
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', toggleTaskCompletion);
        li.appendChild(taskSpan);

        // Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', editTask);
        li.appendChild(editButton);

        // Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);
        li.appendChild(deleteButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Toggle task completion
function toggleTaskCompletion() {
    this.parentElement.classList.toggle('completed');
}

// Edit task
function editTask() {
    const newTaskText = prompt('Edit your task:', this.parentElement.firstChild.textContent);
    if (newTaskText !== null) {
        this.parentElement.firstChild.textContent = newTaskText;
    }
}

// Delete task
function deleteTask() {
    this.parentElement.remove();
}
