import { StyleSheet, Text, View, ImageBackground, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import React, {useEffect} from 'react'
import Title from './Title'

const {width, height} = Dimensions.get('screen')

const SlideItem = ({item, titleFlex, textFlex, buttonFlex, handleButtonPress}) => {
  return (
    <>
     <View style={styles.container}>
      <ImageBackground source={item.image} style={styles.image}>
        <View style={styles.overlay}>
            <View style={[styles.title, { flex: titleFlex }]}>
              <Title fontSize={70} textAlign="center"/>
            </View>
            <View style={[styles.secondaryText, { flex: textFlex }]}>
              <Text style={styles.tagtext}>
                {item.text}
              </Text>
            </View>
            <TouchableOpacity onPress={() => handleButtonPress()} style={[styles.touchableContainer, { flex: buttonFlex }]}>
              <Text style={styles.customButton}>
                <Text style={styles.buttonText}>Sign In</Text>
              </Text>
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    </>
  )
}

export default SlideItem

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width,
    height,
  },
  overlay: {
    flex: 1,
    flexDirection: 'column', 
    margin: 40
  },
  title: {
    marginBottom: 10,
    alignItems: 'center',
  },
  secondaryText: {
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
  },
  touchableContainer: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 50,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },

  tagtext: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 3,
    
    borderRadius: 4,
  },
  customButton: {
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})