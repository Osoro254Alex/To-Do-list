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
