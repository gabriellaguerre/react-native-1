/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet,Text,View } from 'react-native';

function App() {

  return (
    <View style={styles.body}>
      <Text>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'blue',
  }
});

export default App;
