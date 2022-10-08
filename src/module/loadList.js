const listCont = document.querySelector('.list-cont');

const loadList = (lister) => {
  listCont.innerHTML += `
    <li class="list-items">
      <input class="check" type="checkbox">
      <input class="main-inputs" value = ${lister.description} />
      <div class="icon">
        <i class="fa-solid fa-ellipsis-vertical"></i>
        <i id="${lister.index}" class="sective fa-solid fa-trash-can"></i>
      </div>
    </li>`;
};

export default (loadList);