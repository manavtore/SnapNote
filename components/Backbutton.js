import { Button,StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Navigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Backbutton = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button 
          color={"yellow"} 
          title="< Back" 
          onPress={() => navigation.navigate('Homescreen')} 
        />
      </View>
    </View>
  );
  
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