// import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator} from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'

// const Stack = createStackNavigator();
//  const Tab = createBottomTabNavigator()
const Tab = createMaterialBottomTabNavigator()

function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
         
          tabBarIcon: ({focused, size, color})=>{
              let iconName;
              if(route.name==='Screen_A') {
                iconName='autoprefixer';
                size = focused ? 25:20;
                // color = focused ? 'red': 'black'
              } else if(route.name==='Screen_B') {
                iconName='bomb';
                size = focused ? 25:20;
                // color = focused ? 'red': 'black'
              }
              return (
                <FontAwesome5 
                name={iconName}
                size={size}
                color={color}
                />
              )
          },
          activeTintColor: 'blue',
          inactiveTintColor: 'yellow',
          activeBackgroundColor: 'red',
          labelStyle: {
            fontSize: 15
          }
        })
        }
        activeColor='green'
        inactiveColor='blue'
        barStyle={{backgroundColor:'lightblue'}}
        >
        
        <Tab.Screen
          name="Screen_A"
          component={ ScreenA }
          options={{tabBarBadge: 7}}
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
