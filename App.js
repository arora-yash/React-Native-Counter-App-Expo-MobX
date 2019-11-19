import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './src/counter.js';

export default class App extends React.Component {
  render() {
    return (
        <Counter />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
