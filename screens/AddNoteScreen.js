import { TextInput, StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Backbutton from "../components/Backbutton";
import axios from 'axios';
import API_URL from "../components/constanst/constant";
const AddNotesScreen = ({ }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("Edward newgato");

 const handleSubmit = () => {
  const inputs = { title, note };
  console.log('Title:', title);
  console.log('Note:', note);
  
  axios.post("http://localhost:80/notesapp/index.php",inputs)

  alert(inputs);

};

  return (
    <View>
      <TextInput
        placeholder="Enter the title"
        onChangeText={newTitle => setTitle(newTitle)}
        style={styles.InputTitle}
      />
      <TextInput
        placeholder="Enter the note"       
        onChangeText={newNote => setNote(newNote)}
        style={styles.Input}
      />
      <Button
        title="Save Note"
        color="#841584"
        onPress={handleSubmit}
      />
    </View>
  );
};

export default AddNotesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  fromContainer: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  InputTitle: {
    marginVertical: 20,
    width: 380,
    borderWidth: 2,
    borderColor: "#333333",
    fontSize: 16,
    alignContent: "center",
    height: 40,
    alignSelf: "center",
  },
  Input: {
    marginVertical: 20,
    width: 380,
    borderWidth: 2,
    borderColor: "#333333",
    fontSize: 16,
    padding: 10,
    height: 400,
    alignSelf: "center",
    alignContent: "center",
  },
});
