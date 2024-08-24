import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'

export default function Home() {
  return (
    <View>
      <ImageBackground source={require('../assets/images/image2.jpg')} style={{height:deviceHeight, width:deviceWidth}}/>
    </View>
  ) 
}