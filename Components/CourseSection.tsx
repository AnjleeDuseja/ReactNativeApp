import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CourseSection() {
  const courseData=[
    {
      cid:1,
      name:"Learn React Native",
      duration:"3 hr 30 mins",
      instructor:"Hitesh Choudhary",
      image: require("../assets/reactnative.png"),
      lessons:"24 Lessons"
    },
    {
      cid:2,
      name:"Learn Web Development",
      duration:"4 hr 20 mins",
      instructor:"Kyle Cook",
      image: require("../assets/web.jpg"),
       lessons:"30 Lessons"
    },
    {
      cid:3,
      name:"Learn Javascript",
      duration:"2 hr 30 mins",
      instructor:"Mosh Hemadani",
      image: require("../assets/JS.png"),
       lessons:"20 Lessons"
    }
  ];
  
  return (
    <View>
      <Text style={styles.HeadingText}>Courses</Text>
      <ScrollView style={styles.courseContainer}>
  
      { courseData.map(({cid,name,instructor,duration,image,lessons})=>( <View key={cid} style={styles.container}>
        <Image source={image} style={styles.CourseImage}/>
        <View>
        <View style={styles.courseDetail}>
            <Text style={styles.courseDetailText}>{lessons}</Text>
            <Text style={styles.courseDetailText}> {duration}</Text>
        </View> 
        <Text style={styles.CourseHeading}>{name} </Text>
        </View>
      </View>))
}
      </ScrollView>
    </View>
  )}


const styles = StyleSheet.create({
    HeadingText:{
        fontSize:20,
        color:"#000",
        fontWeight:"bold",
        paddingHorizontal:8
    },
    courseContainer:{
       
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