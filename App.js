import { StatusBar, View } from 'react-native';
import 'setimmediate';
import Slider from './components/Slider';

const App = () => {


  const imagesWithTitleAndText = [
    { image: require('./assets/wp9700798.jpg'), text: "Ink Your Story", title: 'Inked' },
    { image: require('./assets/OHFVJPPG4ZFSFCOL2EX4ZQOQCE.jpg'), text: "Discover Exceptional Artists", title: 'Inked' },
    { image: require('./assets/art-artist-client-creativity.jpg'), text: "Elevate Your Tattoo Experience", title: 'Inked' },
  ];

  const buttonPressed = () => {
    console.log('Button pressed')
  }

  return (
    <>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="black" barStyle="white-content" />
        <Slider imagesWithTitleAndText={imagesWithTitleAndText} titleFlex={0.7} textFlex={0.2} buttonFlex={0.1} handleButtonPress={buttonPressed} timer={4000}/>
      </View>
    </>
  );
};


export default App;
