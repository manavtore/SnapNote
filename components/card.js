import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import {  Card,Button, Title, Paragraph } from "react-native-paper";

const NoteCard = () => {

    const[note,setNotes] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    function getUser(){
        axios.get('http://localhost/notesapp/index.php').then(function(response){
            // alert(response.data);
             setNotes(response.data);
        })
        .catch((error) =>{
            alert(error);
        });
        
    }
  return (
    <>
    <FlatList
        data={note}
        renderItem={({ item}) => (
            <Card style={style.Card}>
            <Card.Title title={note.title} />
            <Card.Content>
              <Paragraph>${note.note}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button>Edit</Button>
              <Button>Delete</Button>
            </Card.Actions>
          </Card>

        )}
        keyExtractor={(item) => item.id.toString()}
    />
    </>
    
  );
};

export default NoteCard;

const style = StyleSheet.create({
  Card: {
    marginBottom: 15,
  },
});