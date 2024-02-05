// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator} from '@react-navigation/drawer'

// const Stack = createStackNavigator();
//  const Tab = createBottomTabNavigator()
// const Tab = createMaterialBottomTabNavigator()
const drawer = createDrawerNavigator()

function App() {

  return (
    <NavigationContainer>
      <drawer.Navigator>
        <drawer.Screen
          name="Screen_A"
          component={ ScreenA }
          options={{tabBarBadge: 7}}
        />
        <drawer.Screen
          name="Screen_B"
          component={ ScreenB }
        />
      </drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
