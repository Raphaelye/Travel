import { Image, StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import {useHeaderHeight} from "@react-navigation/elements"


const Page = () => {

  const headerHeight = useHeaderHeight();
  return (
    <>
      <Stack.Screen options={{
        headerTransparent:true,
        headerTitle:'',
        headerLeft: () => (
          <TouchableOpacity style={{marginLeft:20, marginTop:12}} onPress={() => {}}>
            <Image 
              source={{
                uri:"https://xsgames.co/randomusers/assets/avatars/male/61.jpg" 
              }}
              
              style={{
                width:36,
                height:36,
                borderRadius:10
              }}
            />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={() => {}} style={styles.header}>
            <Ionicons name='notifications' size={17}/>
          </TouchableOpacity>
        )
      }}/>
      <View style={[styles.container, {paddingTop:headerHeight}]}> 
        {/* <Text style={styles.headingTxt}>Explore the Beautiful World!!</Text> */}
        <View style={styles.searchBarContainer}> 
          <View style={styles.searchBar}>
            <Ionicons name='search' size={20} style={{marginRight:10}} color={Colors.black}></Ionicons>
            <TextInput placeholder="Search..."/>
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterButton}>
            <Ionicons name='options' size={28} color={Colors.white}/>
          </TouchableOpacity>
        </View>
      </View>        
    </>
  )
}

export default Page

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal:20,
    marginTop: 10,
  },
  
  header:{
    marginRight:20,
    backgroundColor:Colors.white,
    paddingHorizontal:9,
    paddingVertical:9,
    borderRadius:10,
    marginTop:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.30,
    shadowRadius: 2,
    elevation: 8,
  },

  headingTxt:{
    fontSize:28,
    fontWeight:900,
  },

  searchBarContainer:{
    flexDirection:"row",
    marginVertical:16,
  },

  searchBar:{
    flex:1,
    flexDirection:"row",
    backgroundColor:Colors.white,
    padding:16,
    borderRadius:10,
    
  },

  filterButton:{
    backgroundColor:Colors.primanryColor,
    padding:10,
    borderRadius:10,
    marginLeft: 20,

  }

  

})

