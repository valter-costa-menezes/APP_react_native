import { Button, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: "auto", 
        alignItems: "center",
        // justifyContent: "center",
        // marginTop: 200,
        backgroundColor:  "#d5dbd8",

    },
    input:{
        backgroundColor:"white",
        borderRadius: 5,
        padding: 10,
        width: 300,
        marginBottom: 20, 
        borderColor: "gray",
        borderWidth: 1,
        
    },
    resultado:{
        marginTop: 50,
        fontSize: 20,
        fontWeight: '800',
    },
    containerResultado:{
        marginTop: 20,
        alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        borderRadius: 30,
    },
      titulo:{
        marginTop: 50,
        fontSize: 22,
        fontWeight: '400',
        marginBottom: 10,
    },
    btn:{
        backgroundColor: "#37474F",
        padding: 10,
        margin: 7,
        borderRadius: 5,
        elevation: 3   
        
    },
    btnText:{
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
        color: "white",
        width: 150,
    }


})

export default styles;