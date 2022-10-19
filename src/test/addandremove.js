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

  clearingTask() {
    let task = {
      description: this.description,
      completed: this.completed,
      index: this.index,
    };
    const clearTask = (items) => items.filter((task) => !task.completed);
    task = clearTask;
    return task;
  }

  edit() {
    mockElem[this.index].description = this.completed;
    return mockElem[this.index];
  }

  statusUpdate() {
    if (mockElem[0].completed === this.completed) {
      mockElem[0].completed = true;
    } else if (mockElem[0].completed) {
      mockElem[0].completed = this.completed;
    }
    return mockElem[0].completed;
  }
}

export default Item;