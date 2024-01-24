// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text,View,StyleSheet, Pressable } from 'react-native';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Screen_A"
          component={ ScreenA }
        />
        <Tab.Screen
          name="Screen_B"
          component={ ScreenB }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
