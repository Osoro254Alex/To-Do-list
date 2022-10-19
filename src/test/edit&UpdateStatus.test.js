import mockElem from '../__mock__/store.js';
import Item from './addandremove.js';

const statusClear = new Item('item1', 1, false);
const edit1 = new Item('item11', 0, false);
const edit2 = new Item('item22', 1, false);
const statusUpdateFirst = new Item('item3', 0, false);
const statusUpdateSec = new Item('item4', 2, false);

describe('Test for Task Edit, Update, and Clear Complete Status', () => {
  test('Test for Clear All Completed Tasks', () => {
    expect(statusClear.clearingTask(mockElem).length).toBe(1);
  });
   test('Test for Edit Task', () => {
    expect(edit1.edit()).toEqual(mockElem[0]);
    expect(edit2.edit()).toEqual(mockElem[1]);
  });

  test('Test for Update Complete Task status', () => {
    expect(statusUpdateFirst.statusUpdate()).toEqual(mockElem[0].completed);
    expect(statusUpdateSec.statusUpdate()).toEqual(mockElem[2].completed);
  });
});
