import { StyleSheet,Text,View } from "react-native";
import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AddNotesScreen = ({}) => {
    return(
        <View>
            <Text>AllnotesScreen </Text>
        </View>
    )
}

export default AddNotesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
    }
})