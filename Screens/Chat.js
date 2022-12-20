import { StyleSheet, Text, View } from "react-native";

const Chat = () => {

    return(
        <View style={styles.container}>
            <Text>Chat screen</Text>
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