import React from "react"
import { StyleSheet, View, Text} from "react-native"

export default props =>{
    return(
        <View style={styles.container}>
            <Text style={styles.operacao} numberOfLines={1}>
                {props.operacao}
            </Text>
            <Text style={styles.resultado} numberOfLines={1}>
                {props.resultado}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20,
        justifyContent:'center',
        alignItems:'flex-end',
        backgroundColor:'#444',
        width:'100%'
    },
    operacao:{
        color:'#fff',
        fontSize:30
    },
    resultado:{
        color:'#fff',
        fontSize:50
    }
})
