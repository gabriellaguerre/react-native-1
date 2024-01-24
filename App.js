// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text,View,StyleSheet, Pressable } from 'react-native';

const Stack = createStackNavigator();

function ScreenA({navigation}) {

  const onPressHandler = () => {
    navigation.navigate("Screen_B" )
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen A</Text>
      <Pressable
      onPress={onPressHandler}
      style={({pressed})=>({backgroundColor: pressed? 'green':'red'})}>
      <Text style={styles.text}>Go To Screen B</Text>
      </Pressable>
    </View>
  )
}

function ScreenB({navigation}) {

  const onPressHandlerBack = () => {
    // navigation.navigate("Screen_A" )
    navigation.goBack()
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Screen B</Text>
      <Pressable
      onPress={onPressHandlerBack}
      style={({pressed})=>({backgroundColor: pressed? 'green':'red'})}>
      <Text style={styles.text}>Go To Screen A</Text>
      </Pressable>
    </View>
  )
}

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen_A"
          component={ ScreenA }
        />
        <Stack.Screen
          name="Screen_B"
          component={ ScreenB }
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Hello</Text>
    // </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  }
})


export default App;
