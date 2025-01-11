import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CourseSection() {
  return (
    <View>
      <Text style={styles.HeadingText}>Courses</Text>
      <ScrollView style={styles.courseContainer}>
      <View style={styles.container}>
        <Image source={require("../assets/reactnative.png")} style={styles.CourseImage}/>
        <View>
        <View style={styles.courseDetail}>
            <Text style={styles.courseDetailText}>24 Lessons</Text>
            <Text style={styles.courseDetailText}> 3 hr 30 min</Text>
        </View> 
        <Text style={styles.CourseHeading}>Learn React Native </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Image source={require("../assets/reactnative.png")} style={styles.CourseImage}/>
        <View>
        <View style={styles.courseDetail}>
            <Text style={styles.courseDetailText}>24 Lessons</Text>
            <Text style={styles.courseDetailText}> 3 hr 30 min</Text>
        </View> 
        <Text style={styles.CourseHeading}>Learn React Native </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Image source={require("../assets/reactnative.png")} style={styles.CourseImage}/>
        <View>
        <View style={styles.courseDetail}>
            <Text style={styles.courseDetailText}>24 Lessons</Text>
            <Text style={styles.courseDetailText}> 3 hr 30 min</Text>
        </View> 
        <Text style={styles.CourseHeading}>Learn React Native </Text>
        </View>
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
    courseContainer:{
        height:250
    },
    container:{
        flex:1,
        flexDirection:"row",
        margin:15,
        paddingVertical:20,
        paddingHorizontal:5,
        backgroundColor:"#f8dabf",
        borderRadius:10,
        elevation:1

    },
    CourseImage:{
        height:90,
        width:90,
        borderRadius:20,

    },
    courseDetail:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        marginLeft:20
    },
   courseDetailText:{
    fontSize:15,
    paddingHorizontal:12,
    color:"#5e5e5e"
   },
   CourseHeading:{
    paddingHorizontal:12,
    fontSize:20, 
    color:"#000000",
    fontWeight:"bold",
    textAlign:"center",
    
   }

})