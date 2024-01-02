import { Platform, StyleSheet,Text,View } from "react-native";
import React from "react";

const Header =()=>{
    return(
        <View style={Styles.headerContainer}>
            <Text style={Styles.headerTile}  >NoteKeeper</Text>
        </View>
    )

}

export default Header;

const Styles = StyleSheet.create({
    headerContainer:{
        width:"100%",
        height:"15%",
        backgroundColor:Platform.OS === "android" ? "blue" : "#fff",
        paddingTop:30,
        borderBottomWidth:7,
        borderBlockColor:"black",
        marginleft:"auto",
        marginright:"auto",
        justifyContent: "center",
        alignItems: "center",
    },
    headerTile :{
        textAlign:"center",
        color:Platform.OS === "android" ? "white" : "black",
        fontSize:45,
        fontWeight:"bold",
        paddingTop:35,
        fontWeight:"bold"
    }
})