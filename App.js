import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Text,View,StyleSheet } from 'react-native';

function App() {
 
  const Stack = createStackNavigator();

  function ScreenA() {
    return (
      <View>
        <Text>Screen A</Text>
      </View>
    )
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Screen_A"
          component={ ScreenA }
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
