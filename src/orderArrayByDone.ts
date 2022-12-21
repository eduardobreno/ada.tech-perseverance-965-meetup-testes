import {ItemType} from './components/Item';

export const orderArrayByDone = (array: ItemType[]) => {
  return array.sort((a, b) => Number(a.done) - Number(b.done));
};
