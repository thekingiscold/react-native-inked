import { View, Text} from 'react-native'
import React from 'react'

export default function Title({fontSize, textAlign}) {
    return (
        <Text style={{
            color: 'white',
            fontSize: fontSize,
            fontWeight: '900',
            textAlign: textAlign
        }}>
            <Text style={{ color: 'white',}}>Inke</Text>
            <Text style={{ color: 'red',}}>d</Text>
        </Text>
    )
}
