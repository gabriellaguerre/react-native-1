import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Login from './Login';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const Stack = createStackNavigator();

// console.log(Store, 'STOREEEEEEEEEEE')


function App() {

  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: 'white'
        },
        headerTintColor: 'gray',
        headerTitleStyle: {
          fontSize: 25,
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
          
        />
        <Stack.Screen
          name="Home"
          component={ Home }
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

export default App;
