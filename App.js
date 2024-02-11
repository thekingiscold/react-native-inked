// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import { PaperProvider } from 'react-native-paper';



const Stack = createNativeStackNavigator();

const App = () => {
  const statusBarHeight = Platform.OS === 'ios' ? StatusBar.currentHeight || 0 : 0;

  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black', marginTop: statusBarHeight }}>
        <StatusBar backgroundColor="black" barStyle="white-content" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
};


export default App;
