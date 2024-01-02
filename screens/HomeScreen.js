import { Dimensions, Pressable, StyleSheet,Text,View } from "react-native";
import react from 'react';
import { Icon } from "react-native-vector-icons/Ionicons";

const Homescreen=()=>{
    return(
        <View style={styles.container}>
            <Pressable>
            <View style={styles.ItemButton}>
                <Text >ADD NEW NOTE</Text>
                {/* <Ionicons name="arrow-forward-outline" /> */}
                 </View>
            </Pressable>
            <Pressable>
            <View style={styles.ItemButton}>
                <Text>ALL NOTES</Text>
            </View>
            </Pressable>
        </View>
            
    )
}

export default Homescreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        marginTop:50,
    },
    spacer: {
        height:"3%",
    },
    ItemButton:{
        width:Dimensions.get("window").width-50,
        height:"50%",
        borderColor:"black",
        borderRadius:20,
        borderWidth:6,
        verticalAlign:"center",
        textAlign:"center",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#ff6",
    }
})