import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('screen')

const SlideItem = ({item}) => {


  // let [fontsLoaded] = useFonts({
  //   Montserrat_600SemiBold,
  // });

  return (
    <>
     <View style={styles.container}>
      <ImageBackground source={item} style={styles.image}>
        <View style={styles.overlay}>
            <View style={[styles.nestedBox, { flex: 0.7 }]}>
              {/* keep this */}
            </View>
            <View style={[styles.nestedBox, { flex: 0.3 }]}>
              <Text style={styles.text}>
                <Text style={styles.regularText}>Inke</Text>
                <Text style={styles.redText}>d</Text>
              </Text>
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
  nestedBox: {
    // borderWidth: 1,
    // borderColor: 'white',
    // marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.4
  },
  text: {
    
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 2
  },
  regularText: {
    color: 'white',
    
    // fontFamily: 'Montserrat_600SemiBold',
  },
  redText: {
    color: 'red',
    // fontFamily: 'Montserrat_600SemiBold',
  },
})