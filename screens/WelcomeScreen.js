// screens/WelcomeScreen.js
import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import Slider from '../components/Slider';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
    const navigation = useNavigation();
    const imagesWithTitleAndText = [
        { image: require('../assets/wp9700798.jpg'), text: "Ink Your Story", title: 'Inked' },
        { image: require('../assets/OHFVJPPG4ZFSFCOL2EX4ZQOQCE.jpg'), text: "Discover Exceptional Artists", title: 'Inked' },
        { image: require('../assets/art-artist-client-creativity.jpg'), text: "Elevate Your Tattoo Experience", title: 'Inked' },
    ];

    const buttonPressed = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={{ flex: 1 }}>
        <Slider imagesWithTitleAndText={imagesWithTitleAndText} titleFlex={0.7} textFlex={0.2} buttonFlex={0.1} handleButtonPress={buttonPressed} timer={3000}/>
        </View>
    );
};

export default WelcomeScreen;
