import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardTeal]}>
            <Text style={{color:"#66CDAA"}}>Teal</Text>
            
        </View>
        <View style={[styles.card,styles.cardBlue]}>
            <Text style={{color:"#00308F"}}>Alice Blue</Text>
        </View>
        <View style={[styles.card,styles.cardPurple]}>
            <Text style={{color:"#800080"}}>Purple</Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
        flexDirection:"row",
        paddingHorizontal:3,
        
    },
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        height:150,
        width:150,
        margin:5,
        borderRadius:10
        
        
    },
    cardTeal:{
        backgroundColor:"#008080"
    },
    cardPurple:{
        backgroundColor:"#DDA0DD"
    },
    cardBlue:{
        backgroundColor:"#F0F8FF",
      
        
    },
})