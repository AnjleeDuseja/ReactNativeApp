import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HeaderSection() {
  return (
    <View>
      <Text style={styles.HeadingText}>Learning App</Text>
      <View style={styles.Container}>
        <Text style={styles.GreetingText}> Hi, Anjlee! 💁‍♀️</Text>
        <View style={styles.BannerContainer}>
            <View>
<Text style={styles.BannerText} >Your Journey to</Text>

<Text style={styles.BannerText} >Creativity Starts Here!</Text>
</View>
<Image 
source={require("../assets/rocket.png")}
    style={styles.BannerImage}/>
      </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#fff",
        paddingHorizontal:8,
        paddingVertical:8,
        backgroundColor:"#f0932b"
    },
    Container:{
        // backgroundColor:"#ffbe76",
        height:200,
        padding:10,
        margin:8
    },
    GreetingText:{
        color:"#000",
        fontSize:18,
        fontWeight:"bold",
    },
   
    BannerContainer:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor:"#f5d7b5",
        marginTop:10,
        height:100,
        borderRadius:20,
        elevation:1
    },
    BannerText:{
        color:"#f79223",
        fontSize:22,
        fontWeight:"bold",
        fontStyle:"italic",
        marginBottom:3
    },
    BannerImage:{
        height:100,
        width:100
    }



})