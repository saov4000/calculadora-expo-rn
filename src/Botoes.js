import React from "react"
import { StyleSheet, TouchableHighlight, Text, Dimensions } from "react-native"

export default props =>{    
    return(
        <TouchableHighlight onPress={props.aoClicar}>
            <Text style={styles.btn}>
                {props.label}
            </Text>
        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    btn:{
        fontSize:20,
        height:Dimensions.get('window').width/4,
        width:Dimensions.get('window').width/4,
        padding:20,
        backgroundColor:'#000',
        color:'#fff',
        borderWidth:1,
        borderColor:'#777',
        textAlign:'center',
        fontWeight:'bold'
    }
})