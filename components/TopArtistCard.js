import { View, Text, Image } from 'react-native'
import React from 'react'

export default function TopArtistCard({imageFlex, textFlex, name, category, distance, imageSource}) {
  return (
    <>
    <View style={{height: 180, width: "80", borderWidth: 0.5, borderColor: 'red', margin: 15, flex: 1, flexDirection: 'row'}}>
    <View style={{flex: imageFlex}}>
        <Image source={imageSource} style={{height: '100%', width: '100%'}}/>
    </View>
    <View style={{flex: textFlex, marginHorizontal: 10, justifyContent: 'center'}}>
        <Text style={{color: 'white', fontSize: 20, fontWeight:'600', margin: 3}} >{name}</Text>
        <Text style={{color: 'grey', fontSize: 12, fontWeight:'400', margin: 3}} >{category}</Text>
        <Text style={{color: 'grey', fontSize: 12, fontWeight:'400', margin: 3}} >{distance}</Text>
    </View>
    </View>
    </>
  )
}