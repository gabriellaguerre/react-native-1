import React, { useState }from 'react';
import { StyleSheet,Text,View, Button } from 'react-native';

function App() {
  const [add, setAdd] = useState(0)

  const addThis = () => {
    setAdd(add+1)
  }  

  const resetThis = () => {
    setAdd(0)
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hello Gabriel, how is it going today?</Text>
      <Text style={styles.text}>You added {add}</Text>
      <Button style={styles.but} title='Add' onPress={()=>{addThis()}}></Button>
      <Button title='Reset' onPress={()=>{resetThis()}}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
  but: {
    color: 'red',
    margin: 100,
  },
});

export default App;
