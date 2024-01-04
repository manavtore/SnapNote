import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useRealm, useQuery } from '@realm/react';

const AllNotesScreen = () => {
    const realm = useRealm();
    const notes = useQuery(() => realm.objects('Note'));
  
    const renderNoteItem = ({ item }) => (
      <View style={styles.noteContainer}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteContent}>{item.content}</Text>
        <Text style={styles.noteDate}>{item.createdAt.toString()}</Text>
      </View>
    );
  
    return (
      <View style={styles.container}>
        <Text style={styles.header}>All Notes</Text>
        <FlatList
          data={notes}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderNoteItem}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
    },
    noteContainer: {
      marginBottom: 16,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
    },
    noteTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    noteContent: {
      fontSize: 16,
      marginBottom: 8,
    },
    noteDate: {
      fontSize: 12,
      color: '#888',
    },
  });
  
  export default AllNotesScreen;