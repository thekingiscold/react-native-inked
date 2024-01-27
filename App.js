import { StatusBar, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import 'setimmediate';
import Slider from './components/Slider';

const App = () => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="black" barStyle="white-content" />
        {/* <WelcomeScreen/> */}
        <Slider/>
      </View>
    </>
  );
};


export default App;
