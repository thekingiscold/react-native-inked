import { StatusBar, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';

const App = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <WelcomeScreen/>
      </View>
    </>
  );
};


export default App;
