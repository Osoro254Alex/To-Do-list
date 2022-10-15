class Item {
  constructor(description, status, index) {
    this.description = description;
    this.completed = status;
    this.index = index;
  }
}

module.exports = Item;