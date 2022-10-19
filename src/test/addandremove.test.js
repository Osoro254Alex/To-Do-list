import mockElem from '../__mock__/store.js';
import Item from './addandremove.js';

describe('Test for Task Addition', () => {
  const testItems = new Item('task123', 6, false);
  const testItems2 = new Item('task23', 2, false);
  test('add items to list', () => {
    expect(Item.addTask(testItems.getItem()).length).toBe(mockElem.length);
    expect(Item.addTask(testItems2.getItem()).length).toBe(mockElem.length);
  });
});

describe('Test for Task Deletion', () => {
  test('delete items to list', () => {
    expect(Item.deleteTask(0).length).toBe(mockElem.length);
    expect(Item.deleteTask(1).length).toBe(mockElem.length);
  });
});
