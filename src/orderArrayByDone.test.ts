import {describe, expect} from '@jest/globals';
import {ItemType} from './components/Item';

import {orderArrayByDone} from './orderArrayByDone';

describe('Meu Todo list', () => {
  it('should put done by last', () => {
    const list: ItemType[] = [
      {name: 'item1', done: true},
      {name: 'item2', done: false},
      {name: 'item3', done: false},
    ];
    expect(orderArrayByDone(list)).toEqual([
      {name: 'item2', done: false},
      {name: 'item3', done: false},
      {name: 'item1', done: true},
    ]);
  });
});
