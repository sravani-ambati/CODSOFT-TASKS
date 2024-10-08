// Select necessary DOM elements
const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Load tasks from local storage
document.addEventListener('DOMContentLoaded', loadTasks);

// Add task
addTaskBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    
    // Create list item
    const li = document.createElement('li');
    li.textContent = taskInput.value;
    
    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', deleteTask);
    
    // Append delete button to list item
    li.appendChild(deleteBtn);
    
    // Append list item to the task list
    taskList.appendChild(li);

    // Save task to local storage
    saveTaskToLocalStorage(taskInput.value);
    
    // Clear input
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(e) {
    const taskItem = e.target.parentElement;
    removeTaskFromLocalStorage(taskItem.textContent.replace('Delete', '').trim());
    taskItem.remove();
}

// Save tasks to local storage
function saveTaskToLocalStorage(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage on page load
function loadTasks() {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', deleteTask);
        
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// Remove task from local storage
function removeTaskFromLocalStorage(task) {
    let tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
