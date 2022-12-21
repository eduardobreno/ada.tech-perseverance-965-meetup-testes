import React from 'react';
import {Text, StyleSheet, View, Switch} from 'react-native';

import Button from './Button';

export interface ItemType {
  name: string;
  done: boolean;
}

interface ItemProps {
  item: ItemType;
  toggle: (item: ItemType) => void;
  remove: (item: ItemType) => void;
}

const Item = ({item, toggle, remove}: ItemProps) => (
  <View key={item.name} style={styles.item}>
    <Switch
      testID={`toggle${item.name}`}
      style={styles.toggle}
      onValueChange={() => toggle(item)}
      value={item.done}
    />

    <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
      {item.name}
    </Text>
    <Button
      testID={`remove${item.name}`}
      title="x"
      onPress={() => remove(item)}
    />
  </View>
);

const styles = StyleSheet.create({
  item: {
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggle: {
    marginRight: 10,
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
  },
});

export default Item;
