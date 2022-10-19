import mockElem from '../__mock__/store.js';

class Item {
  constructor(description, index, completed) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  getItem() {
    const task = {
      description: this.description,
      completed: this.completed,
      index: this.index,
    };
    return task;
  }

  static addTask(items) {
    mockElem.push(items);
    return mockElem;
  }

  static deleteTask(index) {
    mockElem.splice(index, 1);
    return mockElem;
  }
}

export default Item;