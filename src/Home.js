import { View, Text, ImageBackground, Image, TextInput } from 'react-native'
import React from 'react'
import { deviceHeight, deviceWidth } from './Dimensions'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Home() {
    return (
        <View>
            <ImageBackground source={require('../assets/images/image2.jpg')} style={{ height: deviceHeight, width: deviceWidth }} imageStyle={{ backgroundColor: 'black', opacity: 0.6 }} />
            <View style={{ position: 'absolute', paddingHorizontal: 20, paddingVertical: 50, }}>
                <View style={{  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: deviceWidth - 20 }}>
                    <Icon name='menu' size={46} color={'white'} />
                    <Image source={require('../assets/images/user.jpg')} style={{ height: 46, width: 46, borderRadius: 50 }} />
                </View>
                <View style={{paddingHorizontal:20, marginTop:100}}>
                <Text style={{fontSize:40, color:'white'}}>Hello MS</Text>
                <Text style={{fontSize:40, color:'white'}}>Search the city</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', borderRadius:50, borderWidth:1, borderColor:'white', marginTop:16, paddingHorizontal:10}}>
                    <TextInput placeholder='Enter city name' placeholderTextColor={'white'} style={{paddingHorizontal:10, color:'white'}}/>
                    <Icon name='search'size={22} color={'white'}/>
                </View>
                </View>
            </View>
        </View>
    )
}