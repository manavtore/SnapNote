import { TextInput,StyleSheet,Text,View, Button } from "react-native";
import React, { useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BSON, UserState } from "realm/dist/bundle";
import { useRealm } from "@realm/react";

const AddNotesScreen = ({}) => {
    const realm = useRealm();
    const [noteTitle,setNoteTitle] = useState('');
    const [noteContent,setNoteContent] =useState('');

    const handleAddNote = () =>{
        if(noteTitle.trim()!==''){
            realm.write(()=>{
                realm.create('Note',{
                    _id:new BSON.ObjectID(),
                    title:noteTitle,
                    content:noteContent,
                    createAt:new Date(),
                })
            })
            navigation.goBack();
        }else{
            console.warn('Note title cannot be empty')
        }
       
    }
    return(
        <View style={styles.container}>
            <View style={styles.fromContainer}>
                <Text style={styles.title}>Add NOTE</Text>
                <View>
                    <TextInput/>
                </View>
                <View>
                   <TextInput style={styles.Input} value={noteTitle}
                    onChangeText= {(Text) => setNoteTitle(noteTitle)}
                    placeholder="Enter note title"
                   />
                </View>
                <View>
                    <TextInput style={styles.Input} value={noteContent}
                    onChangeText={(Text) => setNoteContent(noteContent)}
                    placeholder="Enter the content"
                    />
                </View>
                <Button title="Add" onPress={handleAddNote}/>
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