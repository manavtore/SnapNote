import { Dimensions, Pressable, StyleSheet,Text,View } from "react-native";
import react from 'react';
import Icons from "react-native-vector-icons/Ionicons";

const Homescreen=()=>{
    return(
        <View style={styles.container}>
            <Pressable>
            <View style={styles.ItemButton}>
                <Text style={styles.Title} >ADD NEW NOTE</Text>
                <Icons style={ styles.Icons} name="arrow-forward-outline" />
                 </View>
            </Pressable>
            <Pressable>
            <View style={styles.ItemButton}>
                <Text style={styles.Title}>ALL NOTES</Text>
                <Icons style={styles.Icons}  name="arrow-forward-outline" />
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
        marginTop:40,
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
        elevation:10,
        shadowOffset:{width:4,height:10},
        shadowColor:"black",
        shadowOpacity:0.3,
        shadowRadius:4
    },
    Title:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    },
    Icons:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center"
    }
    
})