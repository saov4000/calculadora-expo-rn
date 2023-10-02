import { SafeAreaView, StyleSheet, Text, View} from 'react-native'
import { useState } from 'react'
import Display from './src/Display'
import Botoes from './src/Botoes'
import React from 'react'

let estado = ''

export default function App() {
  const [tela,setTela] = useState(estado)
  const [res,setRes] = useState(0)

  const addDigito = (d) =>{
    estado = estado + d
    setTela(estado)
  }
  const calcular = () =>{
    let num = eval(estado)
    let x = String(num)
    if(x.indexOf('.') != -1){
      setRes(num.toFixed(2))
    }
    else{
      setRes(num)
    }
  }
  const limpar = () =>{
    estado = ''
    setTela(estado)
    setRes(0)
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text>CALCULADORA</Text>
        <Display operacao={tela} resultado={res}/>
        <View style={styles.btn}>
          <Botoes label="AC" aoClicar={()=>{limpar()}}></Botoes>
          <Botoes label="(" aoClicar={()=>{addDigito("(")}}></Botoes>
          <Botoes label=")" aoClicar={()=>{addDigito(")")}}></Botoes>
          <Botoes label="/" aoClicar={()=>{addDigito("/")}}></Botoes>
          <Botoes label="7" aoClicar={()=>{addDigito("7")}}></Botoes>
          <Botoes label="8" aoClicar={()=>{addDigito("8")}}></Botoes>
          <Botoes label="9" aoClicar={()=>{addDigito("9")}}></Botoes>
          <Botoes label="x" aoClicar={()=>{addDigito("*")}}></Botoes>
          <Botoes label="4" aoClicar={()=>{addDigito("4")}}></Botoes>
          <Botoes label="5" aoClicar={()=>{addDigito("5")}}></Botoes>
          <Botoes label="6" aoClicar={()=>{addDigito("6")}}></Botoes>
          <Botoes label="-" aoClicar={()=>{addDigito("-")}}></Botoes>
          <Botoes label="1" aoClicar={()=>{addDigito("1")}}></Botoes>
          <Botoes label="2" aoClicar={()=>{addDigito("2")}}></Botoes>
          <Botoes label="3" aoClicar={()=>{addDigito("3")}}></Botoes>
          <Botoes label="+" aoClicar={()=>{addDigito("+")}}></Botoes>
          <Botoes label="0" aoClicar={()=>{addDigito("0")}}></Botoes>
          <Botoes label="." aoClicar={()=>{addDigito(".")}}></Botoes>
          <Botoes label="^" aoClicar={()=>{addDigito("**")}}></Botoes>
          <Botoes label="=" aoClicar={()=>{calcular()}}></Botoes>
        </View>        
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn:{
    flexDirection:'row',
    flexWrap:'wrap'
  }
});
