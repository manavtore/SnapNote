import { TextInput,StyleSheet,Text,View, Button } from "react-native";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AddNotesScreen = ({}) => {
    return(
        <View style={styles.container}>
            <View style={styles.fromContainer}>
                <Text style={styles.title}>Add NOTE</Text>
                <View>
                   <TextInput style={styles.Input} />
                </View>
                <Button title="Add"/>
            </View>
        </View>
    )
}

export default AddNotesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    title:{
        fontSize:20,
        fontWeight:"bold"
    },
    fromContainer:{
        backgroundColor:"#f5f5f5",
        padding:10,
        marginVertical:10,
        marginHorizontal:10,
    },
    Input:{
        marginVertical:20,
        width:'100%',
        borderBottomWidth:4,
        borderBottomColor:"#333333",
        borderColor:"#333333",
        fontSize:16,
        padding:10


    }

})