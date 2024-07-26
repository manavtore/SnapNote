import { TextInput, StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const AddNotesScreen = ({ }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("Edward newgato");
  const [id, setId] = useState("");

   const navigation = useNavigation();

  const API_URL = "http://localhost/notesapp/index.php"

 const handleSubmit = async () => {
  const inputs = {id,title, note };

  const headers = {
    "Accept":"Application/json",
    "content-type":"Application/json",
    "Access-Control-Allow-Origin":"*"
  }
    try {
      const response = await axios.post( API_URL, inputs,  { headers });
      if (response.status === 200) {
        alert("New note added successfully!");
         navigation.navigate('Home');
      } else {
        alert("Failed to add note");
      }
    } catch (error) {
      alert(error.response.data);
    }
  
};

  return (
    <View>
      <TextInput
        placeholder="Enter the note number"
        onChangeText={newID => setId(newID)}
        style={styles.InputTitle}
      />
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
