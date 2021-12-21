const listElem = document.querySelector('.list');
const createBtnElem = document.querySelector('.create-task-btn');
const inputElem = document.querySelector('.task-input');

const tasks = [
  { id: 1, text: 'Buy milk', done: false },
  { id: 2, text: 'Pick up Tom from airport', done: false },
  { id: 3, text: 'Visit party', done: false },
  { id: 4, text: 'Visit doctor', done: true },
  { id: 5, text: 'Buy meat', done: true },
];

function sortTasks() {
  tasks.sort((a, b) => a.done - b.done);
  return tasks;
}

const createTask = (id, text, done) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkbox = document.createElement('input');

  checkbox.setAttribute('type', 'checkbox');
  checkbox.setAttribute('data-id', id);
  checkbox.checked = done;

  checkbox.classList.add('list__item-checkbox');
  if (done) {
    listItemElem.classList.add('list__item_done');
  }

  listItemElem.append(checkbox, text);

  return listItemElem;
};

const renderTasks = () => {
  listElem.innerHTML = '';

  const tasksElems = sortTasks().map(({ id, text, done }) => createTask(id, text, done));

  listElem.append(...tasksElems);
};

renderTasks(tasks);
// superBad
/* let newStatus:
  if (task.done) {
    newStatus = false;
  } else {
    newStatus = true;
  } */

// bad
// const newStatus = task.done ? ...
function updateTaskHandler(event) {
  if (!event.target.classList.contains('list__item-checkbox')) {
    return;
  }

  const { id } = event.target.dataset;
  const task = tasks.find(el => el.id === +id);

  task.done = !task.done;
  renderTasks(tasks);
}

// algo
/*
  1.get task text
  2.create task
  3.update task
  4.re-render
 */

function createTaskHandler(event) {
  if (!event.target.classList.contains('create-task-btn')) return;
  if (inputElem.value === '') return;
  const task = {
    id: tasks.length + 1,
    text: inputElem.value,
    done: false,
  };

  tasks.push(task);
  renderTasks(tasks);
}

listElem.addEventListener('click', updateTaskHandler);
createBtnElem.addEventListener('click', createTaskHandler);
