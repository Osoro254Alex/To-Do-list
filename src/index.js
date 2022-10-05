import './style.css';

const list = [
  {
    description: 'watching tutorial',
    completed: false,
    index: 0,
  },

  {
    description: 'wash the dishes',
    completed: false,
    index: 1,
  },

  {
    description: 'buy groceries',
    completed: false,
    index: 2,
  },

  {
    description: 'complete the To Do list project',
    completed: false,
    index: 3,
  },
];

const loadList = () => {
  const listCont = document.querySelector('.list-cont');
  list.forEach((obj, index) => {
    if (obj.index === index) {
      listCont.innerHTML += `
      <li>
        <input class="check" type="checkbox">
        ${obj.description}
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </li>`;
    }
  });
};

loadList();