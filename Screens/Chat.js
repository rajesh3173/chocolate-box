import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Conversation from "../Components/Conversation";
import Colors from "../Constants/colors";
import { fileReader } from "../Context/localFile";
import { scale } from "../Context/scales";

const Chat = ({route}) => {

    const fileUri = route.params.fileUri; 
    const [chatContent, setchatContent] = useState("");

    // useEffect(()=>{
    //     async function readingHandler (fileUri){
    //         const chatContent = await fileReader(fileUri);
    //         console.log("Fetched chat content");
    //         setchatContent(chatContent);
    //     }
    //     readingHandler(fileUri);
    // },[fileUri]);

    return(
        <View style={styles.container}>
            <Conversation who={"personOne"}/>
            <Conversation who={"personTwo"}/>
        </View>
    ); 
}

export default Chat;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: scale(18),
        paddingVertical: scale(5),
        // backgroundColor: Colors.backgroundFull
    }
});