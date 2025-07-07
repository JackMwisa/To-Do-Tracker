const API_URL = 'https://6762b9fe46efb3732375b6fb.mockapi.io/todo/todo';
const completedList = document.getElementById('completed-list');
const todoList = document.getElementById('todo-list');
const taskCount = document.getElementById('task-count');
const loadingDiv = document.getElementById('loading');
const noTasksMsg = document.getElementById('no-tasks-msg');

(() => {
  loadingDiv.innerText = 'Loading tasks...';
})();

async function fetchTasks() {
  try {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    loadingDiv.innerText = '';

    const completedTasks = tasks.filter((task) => task.completed);
    const todoTasks = tasks.filter((task) => !task.completed);

    const taskHTML = (task) => `<li>${task.name}</li>`;

    completedList.innerHTML = completedTasks.map(taskHTML).join('');
    todoList.innerHTML = todoTasks.map(taskHTML).join('');

    // Reduce to count completed
    const completedCount = completedTasks.reduce((count) => count + 1, 0);
    taskCount.innerText = `Completed Tasks: ${completedCount} / ${tasks.length}`;

    // Ternary operator to show a message
    todoTasks.length === 0
      ? (noTasksMsg.innerText = 'All tasks completed!')
      : (noTasksMsg.innerText = '');
  } catch (error) {
    loadingDiv.innerText = 'Failed to load tasks!';
    console.error('Error:', error);
  }
}

fetchTasks();
