import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screens/HomeScreen';
import AddNotesScreen from './screens/AddNoteScreen.js';
import AllnotesScreen from './screens/AllnotesScreen.js';
import Backbutton from './components/Backbutton.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
     {/* <Backbutton/>  */}
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen  name="Home" component={Homescreen}/>
        <Stack.Screen name='addNoteScreen' component={AddNotesScreen}/>
         <Stack.Screen name='allNoteScreen' component={AllnotesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
