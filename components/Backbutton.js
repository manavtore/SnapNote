import { Button,StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Backbutton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button color={"yellow"} title="< Back"/>
      </View>
    </View>
  )
}

export default Backbutton;

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  button:{
    margin:10,
  }
})