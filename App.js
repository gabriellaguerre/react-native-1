// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Text,View,StyleSheet } from 'react-native';

const Stack = createStackNavigator();

function ScreenA() {
  return (
    <View>
      <Text>Screen A</Text>
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
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>Hello</Text>
    // </View>
  );
}


export default App;
