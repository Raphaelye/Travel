import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

export default function RootLayout() {
  return (
    <Tabs screenOptions={{tabBarStyle:{
        backgroundColor: Colors.bgColor,
        borderTopWidth: 0,
        padding: 0,
      }, 
      tabBarShowLabel:false,
      tabBarActiveTintColor:"black",
      
    }}>
    
    {/* Setting up the various tabs  */}
      <Tabs.Screen name = 'index' options={{ tabBarIcon: (color) => (
        <Ionicons name='compass' size={25} color={Colors.grey} />
      )}} />

      <Tabs.Screen name = 'category' options={{ tabBarIcon: (color) => (
        <Ionicons name='grid' size={25} color={Colors.grey} /> 
      )}} />

      <Tabs.Screen name = 'search' options={{ tabBarIcon: (color) => (
        <View style={{ 
            backgroundColor:Colors.primanryColor, 
            paddingHorizontal:16, 
            paddingVertical:12, 
            borderRadius:10, 
            height:70,
          }}>
          <Ionicons name='search-outline' size={25}  color={Colors.white}/> 
        </View>
      )}} />

      <Tabs.Screen name = 'bookmarks'  options={{ tabBarIcon: (color) => (
        <Ionicons name='bookmark' size={25} color={Colors.grey} /> 
      )}} />
      
      <Tabs.Screen name = 'profile' options={{ tabBarIcon: (color) => (
        <Ionicons name='person' size={25} color={Colors.grey} /> 
      )}} /> 
   </Tabs>
  )
}