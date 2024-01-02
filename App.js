import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Homescreen from './screens/HomeScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Homescreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
