import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Button from './components/Button';
import Item, {ItemType} from './components/Item';
import {orderArrayByDone} from './orderArrayByDone';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  flatList: {
    height: '80%',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const App = () => {
  const [list, setList] = useState<ItemType[]>([]);
  const [todo, setTodo] = useState<string>();

  const listArr = orderArrayByDone(list);

  const add = () => {
    const alreadyInList = list.find(item => item.name === todo);
    if (todo && !alreadyInList) {
      setList([...list, {name: todo, done: false}]);
      setTodo('');
    }
  };

  const remove = (itemToRemove: ItemType) => {
    const newList = list.filter(item => item.name !== itemToRemove.name);
    setList(newList);
  };

  const toggle = (toggledItem: ItemType) => {
    const newList = list.map(item => {
      if (item.name === toggledItem.name) {
        return {...item, done: !item.done};
      }
      return item;
    });

    setList(newList);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Meu To do list</Text>
        <TextInput
          testID="textInput"
          value={todo}
          style={styles.input}
          onChangeText={value => {
            setTodo(value);
          }}
        />
        <Button title="Adicionar" onPress={add} />
      </View>
      <FlatList
        testID="todoList"
        style={styles.flatList}
        data={listArr}
        renderItem={({item}) => (
          <Item
            item={item}
            toggle={() => toggle(item)}
            remove={() => remove(item)}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default App;
