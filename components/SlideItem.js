import { StyleSheet, Text, View, ImageBackground, Dimensions, Pressable } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('screen')

const SlideItem = ({item, titleFlex, textFlex, buttonFlex, handleButtonPress}) => {


  // let [fontsLoaded] = useFonts({
  //   Montserrat_600SemiBold,
  // });

  return (
    <>
     <View style={styles.container}>
      <ImageBackground source={item.image} style={styles.image}>
        <View style={styles.overlay}>
            <View style={[styles.title, { flex: titleFlex }]}>
              <Text style={styles.titleText}>
                <Text style={styles.regularText}>Inke</Text>
                <Text style={styles.redText}>d</Text>
              </Text>
            </View>
            <View style={[styles.secondaryText, { flex: textFlex }]}>
              <Text style={styles.tagtext}>
                {item.text}
              </Text>
            </View>
            <View style={[styles.touchableContainer, { flex: buttonFlex }]}>
              <Pressable
              style={styles.customButton}
              onPress={() => handleButtonPress()}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </Pressable>
            </View>
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
  titleText: {
    color: 'white',
    fontSize: 50,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 3
  },

  tagtext: {
    color: 'white',
    fontSize: 25,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 3,
    
    borderRadius: 4,
  },
  regularText: {
    color: 'white',
  },
  redText: {
    color: 'red',
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