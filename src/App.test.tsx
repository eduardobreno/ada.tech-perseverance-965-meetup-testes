import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import App from './App';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('should render App component', async () => {
  render(<App />);

  expect(screen.getByTestId('todoList').props.data).toHaveLength(0);
});

it('should add one Item', async () => {
  render(<App />);

  fireEvent.changeText(screen.getByTestId('textInput'), 'item 01');
  fireEvent.press(screen.getByText('Adicionar'));

  expect(screen.getByTestId('todoList').props.data).toHaveLength(1);
  expect(screen.getByTestId('todoList').props.data).toEqual([
    {
      done: false,
      name: 'item 01',
    },
  ]);
});

it('should NOT add the same Item', async () => {
  render(<App />);

  fireEvent.changeText(screen.getByTestId('textInput'), 'item 01');
  fireEvent.press(screen.getByText('Adicionar'));
  fireEvent.changeText(screen.getByTestId('textInput'), 'item 01');
  fireEvent.press(screen.getByText('Adicionar'));

  expect(screen.getByTestId('todoList').props.data).toHaveLength(1);
  expect(screen.getByTestId('todoList').props.data).toEqual([
    {
      done: false,
      name: 'item 01',
    },
  ]);
});

it('should add one Item and remove it', async () => {
  render(<App />);

  fireEvent.changeText(screen.getByTestId('textInput'), 'item 01');
  fireEvent.press(screen.getByText('Adicionar'));

  expect(screen.getByTestId('todoList').props.data).toHaveLength(1);
  fireEvent.press(screen.getByText('x'));
  expect(screen.getByTestId('todoList').props.data).toHaveLength(0);
});

it('should add two Item and done one', async () => {
  render(<App />);

  fireEvent.changeText(screen.getByTestId('textInput'), 'item 01');
  fireEvent.press(screen.getByText('Adicionar'));

  fireEvent.changeText(screen.getByTestId('textInput'), 'item 02');
  fireEvent.press(screen.getByText('Adicionar'));

  expect(screen.getByTestId('todoList').props.data).toHaveLength(2);
  expect(screen.getByTestId('todoList').props.data).toEqual([
    {
      done: false,
      name: 'item 01',
    },
    {
      done: false,
      name: 'item 02',
    },
  ]);

  fireEvent(screen.getByTestId('toggleitem 01'), 'valueChange', true);

  expect(screen.getByTestId('todoList').props.data).toHaveLength(2);
  expect(screen.getByTestId('todoList').props.data).toEqual([
    {
      done: false,
      name: 'item 02',
    },
    {
      done: true,
      name: 'item 01',
    },
  ]);
});
