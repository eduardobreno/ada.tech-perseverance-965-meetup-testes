import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Button from './Button';

it('should press button', async () => {
  const add = jest.fn();
  render(<Button title="Adicionar" onPress={add} />);

  fireEvent.press(screen.getByText('Adicionar'));

  expect(add).toBeCalled();
  expect(screen.toJSON()).toMatchSnapshot();
});
