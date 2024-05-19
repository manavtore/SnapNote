import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { TextInput,StyleSheet} from "react-native";
const AllNotesScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Notes</Text>
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