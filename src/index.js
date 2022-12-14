import './style.css';
import loadList from './module/loadList.js';
import storeArray from './module/storeArray.js';
import getLocalStore from './module/fromlocalstore.js';
import Item from './test/addandremove.js';

const listCont = document.querySelector('.list-cont');
const mainInput = document.querySelector('.main-input');
const btnLast = document.querySelector('.btn-last');
const bigCont = document.querySelector('.container');
const adder = document.querySelector('.pluzz');

const list = [];

bigCont.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (mainInput.value !== '') {
      const newItem = new Item(mainInput.value, list.length + 1, false);
      loadList(newItem); // loading element call
      list.push(newItem); // adding to array
      list.sort((a, b) => a.index - b.index); // sorting array
      storeArray(list); // store to localstorage
      mainInput.value = '';
      getLocalStore(); // retrieve from localstorge
      e.preventDefault();
    }
    // editing
    if (e.target.className === 'main-inputs') {
      const spot = e.target.parentElement.children[2].children[1].id;
      list.forEach((item) => {
        if (item.index === Number(spot)) {
          item.description = e.target.value;
        }
      });
      localStorage.setItem('arraylist', JSON.stringify(list));
    }
  }
});

// button Add
const loadWeb = () => {
  if (mainInput.value !== '') {
    const newItem = new Item(mainInput.value, list.length + 1, false);
    loadList(newItem);
    list.push(newItem); // adding to array
    storeArray(list); // store to localstorage
    mainInput.value = '';
  }
};

adder.addEventListener('click', (e) => {
  if (mainInput.value !== '') {
    loadWeb();
    list.sort((a, b) => a.index - b.index); // sorting arr
    getLocalStore(); // retrieve from localstorge
    e.preventDefault();
  }
});

// Restores Items From localstorage
const gotted = getLocalStore();

localStorage.setItem('arraylist', JSON.stringify(gotted));
// loads Item back  on Reloading website
const onLoader = () => {
  if (getLocalStore() !== undefined) {
    getLocalStore().forEach((elem) => {
      loadList(elem);
    });
  }
};

onLoader();

bigCont.addEventListener('click', (e) => {
// toggle on the LineThrough
  if (e.target.className === 'check') {
    const para = e.target.parentElement.children[1];
    const cheyk = e.target.parentElement.children[0];

    const spotCheck = e.target.parentElement.children[2].children[1].id;

    if (cheyk.checked) {
      para.classList.add('active');
      cheyk.checked = true;
      // Flags Completed Property as true
      if (list.length > 0) {
        list.forEach((item) => {
          if (item.index === Number(spotCheck)) {
            item.completed = true;
          }
        });
        localStorage.setItem('arraylist', JSON.stringify(list));
      } else {
        gotted.forEach((item) => {
          if (item.index === Number(spotCheck)) {
            item.completed = true;
          }
        });
        localStorage.setItem('arraylist', JSON.stringify(gotted));
      }
    } else {
      para.classList.remove('active');
      cheyk.checked = false;
      // Flags Completed Property as false
      if (list.length > 0) {
        list.forEach((item) => {
          if (item.index === Number(spotCheck)) {
            item.completed = false;
          }
        });
        localStorage.setItem('arraylist', JSON.stringify(list));
      } else {
        gotted.forEach((item) => {
          if (item.index === Number(spotCheck)) {
            item.completed = false;
          }
        });
        localStorage.setItem('arraylist', JSON.stringify(gotted));
      }
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
});

bigCont.addEventListener('click', (e) => {
  //  remove from website and localstorage
  if (e.target.className === 'fa-solid fa-trash-can') {
    const removePare = e.target.parentElement.parentElement;
    const spot = e.target.id;
    if (list.length > 0) {
      list.forEach((item, index) => {
        if (item.index === Number(spot)) {
          removePare.remove();
          list.splice(index, 1);
        }
      });

      localStorage.setItem('arraylist', JSON.stringify(list));
    } else {
      gotted.forEach((item, index) => {
        if (item.index === Number(spot)) {
          removePare.remove();
          gotted.splice(index, 1);
        }
      });

      localStorage.setItem('arraylist', JSON.stringify(gotted));
    }
  }
});

// Clears All Checked element By Using flag Completed true

const deleAll = () => {
  btnLast.addEventListener('click', (e) => {
    e.preventDefault();

    for (let k = 0; k < (listCont.children).length; k += 1) {
      if ((listCont.children)[k].children[0].checked) {
        (listCont.children)[k].children[0].parentElement.remove();
      }

      const update = (arrr) => {
        const indee = arrr.indexOf(arrr[k]);
        arrr.splice(indee, 1);
        localStorage.setItem('arraylist', JSON.stringify(arrr));
      };

      if (list.length > 0) {
        if (list[k].completed === true) {
          update(list);
        }
      } else if (gotted[k].completed === true) {
        update(gotted);
      }
    }
  });
};

// function ClearAll
deleAll();
