import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function InstructorSection() {
  return (
    <View>
      <Text style={styles.HeadingText}>Instructors</Text>
      <ScrollView style={styles.Container} horizontal={true}>

{/* create an array from where data comes of the instructors */}

        <View style={styles.ImageContainer}>
    <Image source={require("../assets/Mosh.jpeg")}
        style={styles.InstructorImage}/>
        <Text  style={styles.InstructorText}>
            Mosh Hemadani
        </Text>
        </View>
        <View style={styles.ImageContainer}>
    <Image source={require("../assets/Hitesh.jpg")}
        style={styles.InstructorImage}/>
        <Text style={styles.InstructorText}>
            Hitesh Choudhary
        </Text>
        </View>
        <View style={styles.ImageContainer}>
    <Image source={require("../assets/Kyle.jpeg")}
        style={styles.InstructorImage}/>
        <Text  style={styles.InstructorText}>
        Kyle Cook
        </Text>
        </View>
        <View style={styles.ImageContainer}>
    <Image source={require("../assets/Mosh.jpeg")}
        style={styles.InstructorImage}/>
        <Text  style={styles.InstructorText}>
            Mosh Hemadani
        </Text>
        </View>
        <View style={styles.ImageContainer}>
    <Image source={require("../assets/Hitesh.jpg")}
        style={styles.InstructorImage}/>
        <Text style={styles.InstructorText}>
            Hitesh Choudhary
        </Text>
        </View>
        <View style={styles.ImageContainer}>
    <Image source={require("../assets/Kyle.jpeg")}
        style={styles.InstructorImage}/>
        <Text  style={styles.InstructorText}>
        Kyle Cook
        </Text>
        </View>
   
        
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText:{
        fontSize:20,
        color:"#000",
        fontWeight:"bold",
        paddingHorizontal:8
        
    },
    Container:{
       
    //   backgroundColor:"#fbb969",
      marginTop:10,
      paddingVertical:5
      
    },
   
    ImageContainer:{
flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:4,
        paddingVertical:2,
        backgroundColor:"#FFF",
        elevation:1,
        margin:5,
        borderRadius:10,
    },
    InstructorImage:{
        height:120,
        width:120,
        borderRadius:30/2,
        margin:8

    },
    InstructorText:{
        color:"#000",
        fontSize:14, 
        fontWeight:"black"
    }
})