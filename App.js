import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Homescreen from "./screens/HomeScreen";
import AddNotesScreen from "./screens/AddNoteScreen";
import AllnotesScreen from "./screens/AllnotesScreen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Header />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="addNoteScreen" component={AddNotesScreen} />
          <Stack.Screen name="allNoteScreen" component={AllnotesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
