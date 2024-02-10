import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';


const Searchbox = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <Searchbar
        placeholder="Search for artist or design"
        onChangeText={setSearchQuery}
        value={searchQuery}
        iconColor = "red"
        style={{ backgroundColor: 'white', height: 40, width: '100%'}}
        inputStyle={{
            paddingBottom: 15,
            fontSize: 12,
        }}
        />
    )
}

export default Searchbox