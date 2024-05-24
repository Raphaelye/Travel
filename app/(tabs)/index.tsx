import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const Page = () => {
  return (
    <Stack.Screen options={{
      headerTransparent:true,
      headerTitle:'',
      headerLeft: () => (
        <TouchableOpacity style={{marginLeft:20}} onPress={() => {}}>
          <Image 
            source={{
              uri:"https://xsgames.co/randomusers/assets/avatars/male/61.jpg" 
            }}
            
            style={{
              width:40,
              height:40,
              borderRadius:10
            }}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => {}} style={headerStyle.header}>
          <Ionicons name='notifications' size={24}/>
          
        </TouchableOpacity>
      )
    }}>
    </Stack.Screen>
  )
}

export default Page

const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
})

const headerStyle = StyleSheet.create({
  header:{
    marginRight:20,
    backgroundColor:Colors.white,
    paddingHorizontal:14,
    paddingVertical:12,
    borderRadius:10,
    marginTop:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4,
    elevation: 8,
  }
})