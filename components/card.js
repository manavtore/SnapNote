import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Button, Title, Paragraph } from "react-native-paper";

const NoteCard = () => {
  return (
    <Card>
      <Card.Title title="Note Card" />
      <Card.Content>
        <Paragraph>This is a note card.</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Card.Actions>
    </Card>
  );
};

export default NoteCard;