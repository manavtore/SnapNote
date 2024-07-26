import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Card, Button, Title, Paragraph } from "react-native-paper";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const NoteCard = () => {
  const [notes, setNotes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    axios
      .get("http://localhost/notesapp/index.php/${id}/notes")
      .then((response) => {
        setNotes(response.data);
      })
      .catch((error) => {
        alert(response.data.message);
      });
  };

  const deleteNote = (id) => {
    axios
      .delete(`http://localhost/notesapp/index.php/${id}/delete`)
      .then((response) => {
        alert("Note Deleted");
        getNotes();
      })
      .catch((error) => {
        alert(error);
        console.error(error);
      });
  };

  // const editNote = (id) => {
  //   navigation.navigate("editNotesScreen", { id });
  // };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <Card style={styles.card} key={item.id}>
            <Card.Title title={item.title} subtitle={`ID: ${item.id}`} />
            <Card.Content>
              <Paragraph>{item.note}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => editNote(item.id)}>Edit</Button>
              <Button onPress={() => deleteNote(item.id)}>Delete</Button>
            </Card.Actions>
          </Card>
        )}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={getNotes}
        onEndReachedThreshold={0}
      />
    </GestureHandlerRootView>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
  },
});
