import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  testID: string;
  title: string;
  onPress: () => void;
}

const Button = ({title, onPress, testID = ''}: ButtonProps) => (
  <TouchableOpacity testID={testID} style={styles.button} onPress={onPress}>
    <Text>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderColor: '#000000',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
});

export default Button;
