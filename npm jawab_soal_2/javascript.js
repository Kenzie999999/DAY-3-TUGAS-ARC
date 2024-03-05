const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!todoInput.value) return;

  const li = document.createElement('li');
  li.textContent = todoInput.value;
  todoList.appendChild(li);
  todoInput.value = '';
});