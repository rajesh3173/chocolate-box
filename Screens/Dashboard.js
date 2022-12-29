import { useState } from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/colors";
import { documentPicker } from "../Context/localFile";
import { scale, verticalScale, moderateScale } from "../Context/scales";

const Dashboard = ({ navigation }) => {

    const [fileInfo, setFileInfo] = useState('');

    const chatScreen = () => {
        navigation.navigate('Chat', {
            fileUri: fileInfo.uri,
            personOne: "Me",
            personTwo: "Amma 😍😍"
        });
    }

    const addNewHandler = async () => {
        const info = await documentPicker();
        setFileInfo(info);
    }

    return (
        <View>
            <View style={styles.headerSection}>
                <Text style={styles.headerText}>All Chats</Text>
                <Pressable onPress={addNewHandler} style={styles.addNewButton}>
                    <Text style={styles.addNewButtonText}>+ Add New Chat</Text>
                </Pressable>
            </View>
            <Button title="chat" onPress={chatScreen} />
        </View>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    headerSection: {
        paddingHorizontal: scale(15),
        paddingVertical: scale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: moderateScale(18),
        fontWeight: 'bold'
    },
    addNewButton: {
        padding: scale(5)
    },
    addNewButtonText: {
        color: Colors.primary800
    },
    test: {
        backgroundColor: 'pink'
    }
});