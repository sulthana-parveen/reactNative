import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

import { CommonActions } from '@react-navigation/native'
const Home = ({navigation,route}) => {
    const handleNavigate=() =>{
        navigation.dispatch(
            CommonActions.navigate('Notification')
        )
    }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>{route.name}</Text>
      <TouchableOpacity style={{
        backgroundColor:'#0096FF',
        padding:15,
        margin:10,
        borderRadius:10
      }} onPress={handleNavigate}>
        <Text style={{fontSize:16,color:'#fff'}}>navigate to next screen</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home