import React, { useRef, useEffect, useState } from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions, Text } from 'react-native';
import SlideItem from './SlideItem';

const Slider = () => {
  const dummyImages = [
    require('../assets/wp9700798.jpg'),
    // require('../assets/pexels-photo-1304469.jpeg'),
    require('../assets/art-artist-client-creativity.jpg'),
    require('../assets/About-02.jpg'),
  ];
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex + 1) % dummyImages.length; // Calculate next index, looping back to 0
      setCurrentIndex(nextIndex);
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
    }, 3000); // Adjust interval as needed

    return () => clearInterval(intervalId);
  }, [currentIndex]);


  return (
    <>
    <View style={styles.container}>
        <FlatList data={dummyImages}
        renderItem= {({item}) => <SlideItem item={item}/> } 
        horizontal
        ref={flatListRef}
        pagingEnabled
        snapToAlignment='center'
        keyExtractor={(item, index) => index.toString()}
        decelerationRate={0.5}
        />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default Slider;


