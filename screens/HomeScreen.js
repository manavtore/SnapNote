import { Pressable, StyleSheet, Text, View } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";
const Homescreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.ItemButton}
        onPress={() =>
          navigation.navigate("addNoteScreen", { name: "AddNotesScreen" })
        }
      >
        <View>
          <Text style={styles.Title}>ADD NEW NOTE</Text>
          <Icons style={styles.Icons} name="arrow-forward-outline" />
        </View>
      </Pressable>
      <View style={styles.spacer}></View>
      <Pressable
        style={styles.ItemButton}
        onPress={() =>
          navigation.navigate("allNoteScreen", { name: "AllnotesScreen" })
        }
      >
        <View>
          <Text style={styles.Title}>ALL NOTES</Text>
          <Icons style={styles.Icons} name="arrow-forward-outline" />
        </View>
      </Pressable>
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
    padding: 20,
  },
  spacer: {
    height: "3%",
  },
  ItemButton: {
    width: "90%",
    height: "35%",
    borderColor: "black",
    borderRadius: 20,
    borderWidth: 6,
    verticalAlign: "center",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6",
    elevation: 10,
    shadowOffset: { width: 4, height: 10 },
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 15,
  },
  Title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  Icons: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
