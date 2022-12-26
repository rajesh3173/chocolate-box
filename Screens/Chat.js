import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { fileReader } from "../Context/localFile";

const Chat = ({route}) => {

    const fileUri = route.params.fileUri; 
    const [chatContent, setchatContent] = useState("");

    useEffect(()=>{
        async function readingHandler (fileUri){
            const chatContent = await fileReader(fileUri);
            console.log("Fetched chat content");
            setchatContent(chatContent);
        }
        readingHandler(fileUri);
    },[fileUri]);

    return(
        <View style={styles.container}>
            <Text>{chatContent}</Text>
        </View>
    );
}

export default Chat;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});