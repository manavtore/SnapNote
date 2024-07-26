import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useEffect } from "react";
import axios from "axios";

const EditNoteScreen = ({ route }) => {
  const { id } = route.params;
  const navigation = useNavigation();
  const [input, setInput] = useState({ title: "", note: "" });

  useEffect(() => {
    getNote();
  }, []);

  const getNote = () => {
    axios
      .get(`http://localhost/notesapp/notes/${id}`)
      .then((response) => {
        const { title, note } = response.data;
        setInput({ title, note });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const saveNote = () => {
    const headers = {
      Accept: "Application/json",
      "Content-Type": "Application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
    };

    axios
      .put(`http://localhost/notesapp/notes/${id}/edit`, input, { headers })
      .then((response) => {
        // alert("Note Updated");
        alert(response.data);
        alert(input.title + input.note);
        navigation.navigate("allNoteScreen");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter the title"
        value={input.title}
        style={styles.InputTitle}
        onChangeText={(text) => setInput({ ...input, title: text })}
      />
      <TextInput
        placeholder="Enter the note"
        value={input.note}
        style={styles.Input}
        onChangeText={(text) => setInput({ ...input, note: text })}
      />
      <Button title="Save Note" onPress={saveNote} />
    </View>
  );
};

export default EditNoteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
