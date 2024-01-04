// AllNotesScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRealm, useQuery } from '@realm/react';
import Note from '../path-to-your-note-file'; // Update the path accordingly

const AllNotesScreen = () => {
  const realm = useRealm();
  const notes = useQuery(() => realm.objects('Note'));

  return (
    <View>
      <Text>All Notes</Text>
      <FlatList
        data={notes}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
            <Text>{item.createdAt.toString()}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default AllNotesScreen;
