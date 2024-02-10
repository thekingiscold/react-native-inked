import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { View } from 'react-native';

const CardBox = ({imageURL, title}) => (
  <View style={{height: 200, width: 150, marginRight: 15}}>
    <Card style={{flex: 1, borderRadius: 0}} contentStyle={{borderRadius: 0 }} >
        <Card.Cover source={{ uri: imageURL }} style={{height: '85%', width: '100%', padding: 5, borderRadius: 0 }}/>
        <Text variant='labelLarge' style={{textAlign: 'center', margin: 5, letterSpacing: 3}}>{title}</Text>
    </Card>
  </View>
);

export default CardBox;