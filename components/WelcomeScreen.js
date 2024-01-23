import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native"


export default function TitleArea() {

    const styles = StyleSheet.create({
        titleTextContainer: {
          flex: 0.3, // 30% of the screen
          backgroundColor: 'white',
        },
        titleContainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        titleText: {
          fontSize: 50,
          fontWeight: '900',
          color: 'red', 
        },
        inkedText: {
          color: 'black',
        },
        tag: {
            fontSize: 25,
            color: 'black',
            alignItems: 'center',
            fontWeight: '500'
        },
        titleAreaLogo: {
            flex: 0.4,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: 10
        },
        roundedImage: {
            width: 280, 
            height: 280,
            borderRadius: 140, 
            borderWidth: 2,
            borderColor: 'black', 
          },
        buttonContainer: {
            flex: 0.3,
            backgroundColor: "white",
            alignItems: 'center'
        },
        customButton: {
            backgroundColor: 'black',
            padding: 10,
            width: 270,
            borderRadius: 50,
            marginTop: 10,
          },
          buttonText: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          },
      });
    return (
        <>
    <View style={styles.titleTextContainer}>
        <View style={styles.titleContainer}>
            <Text style={[styles.titleText, {paddingBottom: 10}]}>
            <Text style={styles.inkedText}>Inke</Text>d
            </Text>
            <Text style={[styles.tag, {paddingBottom: 10}]}>Artistry Beyond Boundaries</Text>
            <Text style={styles.tag}>Tattoos Beyond Dreams</Text>
        </View>
    </View>
    <View style={styles.titleAreaLogo}>
        <Image
            source={require('../assets/tattooicon.png')} // Change the path and name as per your actual image file
            style={styles.roundedImage}
            resizeMode="cover"
            />
    </View>
    <View style={styles.buttonContainer}>
        <Text style={[styles.tag, {margin: 20}]}>Discover Artists Near You</Text>
        <TouchableOpacity
          style={styles.customButton}
          onPress={() => console.log('Button pressed')}
        >
          <Text style={styles.buttonText}>Get Inked</Text>
        </TouchableOpacity>
    </View>
    </>
  )
}
