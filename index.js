const API_URL = 'https://6762b9fe46efb3732375b6fb.mockapi.io/todo/todo';
const loadingDiv = document.getElementById('loading');
const taskCount = document.getElementById('task-count');
const completedBody = document.querySelector('#completed-table tbody');
const todoBody = document.querySelector('#todo-table tbody');
const noTasksMsg = document.getElementById('no-tasks-msg');

//  Anonymous loading message
(() => (loadingDiv.innerText = 'Loading tasks...'))();

//  Get label from task object
const getLabel = (task) =>
  task.activity || task.title || task.text || 'No description';

// Helper to render a table row
function renderRow(task, status) {
  return `
    <tr>
      <td>${task.id}</td>
      <td>${status}</td>
      <td>${getLabel(task)}</td>
    </tr>
  `;
}

async function fetchTasks() {
  try {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    loadingDiv.innerText = '';

    // Filter tasks
    const completed = tasks.filter((t) => t.completed);
    const pending = tasks.filter((t) => !t.completed);

    taskCount.innerText = `Completed Tasks: ${completed.length} / ${tasks.length}`;

    completedBody.innerHTML = completed.map((task) => renderRow(task, 'Completed')).join('');
    todoBody.innerHTML = pending.map((task) => renderRow(task, 'To Do')).join('');

    noTasksMsg.innerText = pending.length === 0 ? 'All tasks completed!' : '';
  } catch (err) {
    loadingDiv.innerText = 'Failed to load tasks!';
    console.error('Error fetching tasks:', err);
  }
}

fetchTasks();