import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Item, {ItemType} from './Item';

it('should render Item component', async () => {
  const item: ItemType = {name: 'Item 01', done: false};
  const remove = jest.fn();
  const toggle = jest.fn();

  render(<Item item={item} remove={remove} toggle={toggle} />);

  fireEvent(screen.getByTestId(`toggle${item.name}`), 'valueChange', true);
  fireEvent.press(screen.getByText('x'));

  expect(remove).toBeCalledWith(item);
  expect(toggle).toBeCalledWith(item);
  expect(screen.toJSON()).toMatchSnapshot();
});
