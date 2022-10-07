import './style.css';
import loadList from './module/loadList.js';
import storeArray from './module/storeArray.js';

const list = [];
const mainInput = document.querySelector('.main-input');
const bigCont = document.querySelector('.container');
const objCreater = () => {
  const listObj = {};
  listObj.description = mainInput.value;
  listObj.completed = false;
  listObj.index = list.length;
  mainInput.value = '';
  return listObj;
};

bigCont.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (mainInput.value !== '') {
      const objects = objCreater();
      loadList(objects);
      list.push(objects);
      list.sort((a, b) => a.index - b.index);
      storeArray(list);
      e.preventDefault();
    }
  }
});

bigCont.addEventListener('click', (e) => {
// toggle on the LineThrough
  if (e.target.className === 'check') {
    const para = e.target.parentElement.children[1];
    const cheyk = e.target.parentElement.children[0];

    if (cheyk.checked) {
      para.classList.toggle('active');
    } else {
      para.classList.toggle('active');
    }
  }

  // switch between three dots and trush can adding background colors
  if (e.target.className === 'fa-solid fa-ellipsis-vertical') {
    const inn = e.target.parentElement.parentElement.children[1];
    const dots = e.target.parentElement.parentElement.children[2].children[0];
    dots.classList.toggle('firtive');
    const delet = e.target.parentElement.parentElement.children[2].children[1];
    delet.classList.toggle('sective');
    const deletPare = e.target.parentElement.parentElement;
    deletPare.style.backgroundColor = '#dfdf7c';
    inn.style.backgroundColor = '#dfdf7c';
  }

  //  remove from website and localstorage
  if (e.target.className === 'fa-solid fa-trash-can') {
    const removePare = e.target.parentElement.parentElement;
    const spot = e.target.id;
    removePare.remove();
    list.splice(spot, 1);
    localStorage.setItem('arraylist', JSON.stringify(list));
  }
});
