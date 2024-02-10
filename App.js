// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import { StatusBar } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import { PaperProvider } from 'react-native-paper';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="black" barStyle="white-content" />
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};


export default App;
