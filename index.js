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

async function fetchTasks() {
  try {
    const res = await fetch(API_URL);
    const tasks = await res.json();
    loadingDiv.innerText = '';

    // Filter tasks
    const completed = tasks.filter((t) => t.completed);
    const pending = tasks.filter((t) => !t.completed);

    //  Reduce for count
    const count = completed.reduce((acc) => acc + 1, 0);
    taskCount.innerText = `Completed Tasks: ${count} / ${tasks.length}`;

    //  Map completed to table
    completedBody.innerHTML = completed
      .map(
        (task) => `
      <tr>
        <td>${task.id}</td>
        <td> Completed</td>
        <td>${getLabel(task)}</td>
      </tr>
    `
      )
      .join('');

    //  Map pending to table
    todoBody.innerHTML = pending
      .map(
        (task) => `
      <tr>
        <td>${task.id}</td>
        <td>To Do</td>
        <td>${getLabel(task)}</td>
      </tr>
    `
      )
      .join('');

    // Ternary for empty pending
    noTasksMsg.innerText = pending.length === 0 ? ' All tasks completed!' : '';
  } catch {
    loadingDiv.innerText = 'Failed to load tasks!';
  }
}

fetchTasks();
