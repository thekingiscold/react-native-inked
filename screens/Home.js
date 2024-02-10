import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBox from '../components/Searchbox';
import Title from '../components/Title';
import CardBox from '../components/CardBox';
import { ScrollView, Image, FlatList } from 'react-native';
import { ImageBackground } from 'react-native-web';
import TopArtistCard from '../components/TopArtistCard';

export default function Home() {
    const Tab = createBottomTabNavigator();
    
    return (
        <Tab.Navigator
        screenOptions={{
          headerShown: false
        }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            theme={{colors: {secondaryContainer: 'white'}}}
            style={{backgroundColor: 'black', justifyContent: 'center', height: 60}}
            activeColor='white'
            inactiveColor='white'
            activeIndicatorStyle ={{height: 35, width: 35, borderRadius: 17}}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
  
              if (event.defaultPrevented) {
                preventDefault();
              } else {
               navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }
  
              return null;
            }}
            getLabelText={({ route }) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.title;
  
              return label;
            }}
          />
        )}
      >
        <Tab.Screen
          name="HomePage"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="home" size={size} color={"red"} />;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => {
              return <Icon name="cog" size={size} color={"red"} />;
            },
          }}
        />
      </Tab.Navigator>
    )
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      
      <Text variant="headlineMedium">Settings!</Text>
    </View>
  );
}

function HomeScreen() {

    const artist1 = require('../assets/artist1.jpg')
    const artist2 = require('../assets/artist2.jpg')
    const artist3 = require('../assets/artist3.jpg')
    // const artist4 = require('../assets/')
    // const artist5 = require('../assets/')

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
            <View style={styles.title}>
                <Title fontSize={35}/>
            </View>
            <View style={styles.searchBoxContainer}>
                <SearchBox/>
            </View>
        </View>
        <Text style={{color: 'white', fontSize: 25, fontWeight: '500',margin: 15}}>What are you looking for ?</Text>
        <View style={styles.cardMainContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                <CardBox imageURL="https://i.etsystatic.com/41164611/r/il/cfe3e3/4709647259/il_fullxfull.4709647259_9zwr.jpg" title="Geometric"/>
                <CardBox imageURL="https://www.boredpanda.com/blog/wp-content/uploads/2023/07/Cujw4pCIhN2-png__700.jpg" title="Tribal"/>
                <CardBox imageURL="https://d1kq2dqeox7x40.cloudfront.net/web/guides/covers/realism.jpg" title="Realism"/>
                <CardBox imageURL="https://static.vecteezy.com/system/resources/previews/019/858/106/non_2x/minimalist-tattoo-geometric-line-free-vector.jpg" title="Minimalist"/>
                <CardBox imageURL="https://lh3.googleusercontent.com/proxy/JaqcH27wpl7ctaTy3W5q8wmfMNIJl2lN270Mb_LhgJ_iIileMnEVA28jX_10b3yJGSReS4tIiZhQHW3d5OLfb9WedeepcRSzuapKwAzALx6Ouo0iku_vZQXQKUYypDMA=w1200-h630-p-k-no-nu" title="Lettering"/>  
            </ScrollView>
        </View>
        <Text style={{ color: 'red', fontSize: 25, fontWeight: '500', margin: 10 }}>
            Top<Text style={{ color: 'white', fontSize: 25, fontWeight: '500', margin: 15 }}> artists from your area</Text>
        </Text>
        <TopArtistCard imageFlex={0.6} textFlex={0.4} name="Lizard's Skin" category="#geometric #realism" distance="4.7 Km" imageSource={artist1}/>
        <TopArtistCard imageFlex={0.6} textFlex={0.4} name="Kraayonz" category="#minimalist #geometric" distance="2.3 Km" imageSource={artist2}/>
        <TopArtistCard imageFlex={0.6} textFlex={0.4} name="Eternal Expression " category="#tribal #lettering" distance="5.1 Km" imageSource={artist3}/>
        <Text style={{margin: 15, fontSize: 50, color: 'grey'}}>Sorry, writing static data code is boring!!</Text>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
    },
    header: {
      flex: 1,
      flexDirection: 'row',
      margin: 15,
    },
    title: {
        flex: 0.3,
        justifyContent: 'center'
    },
    searchBoxContainer: {
        flex: 0.7,
        justifyContent: 'center'
    },
    cardMainContainer: {
        margin: 15,
    },
    topArtistsContainer: {
        borderWidth: 2,
        borderColor: 'red',
        margin: 5
    },
  });