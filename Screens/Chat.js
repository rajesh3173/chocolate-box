import { useEffect, useLayoutEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Conversation from "../Components/Conversation";
import Colors from "../Constants/colors";
import { fileReader } from "../Context/localFile";
import { moderateScale, scale, verticalScale } from "../Context/scales";

const Chat = ({ route, navigation }) => {

    const fileUri = route.params.fileUri;
    const personOne = route.params.personOne;
    const personTwo = route.params.personTwo;

    const [chatArray, setChatArray] = useState();
    const [errorOccur, setErrorOccur] = useState(false);

    const arrangeArray = (chatFile) => {
        let resultArray = [];

        const initialArray = chatFile.split("\n");
        const arrayLength = initialArray.slice(-1) == "" ? initialArray.length - 1 : initialArray.length;
        const pattern = /^\d{1,2}\/\d{1,2}\/\d{2}, \d{1,2}:\d{1,2} \w{2} - /;
        const initialIndex = initialArray[0].search("Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them. Tap to learn more") != -1 ? 1 : 0;

        resultArray.push(initialArray[initialIndex]);

        for (let i = initialIndex + 1; i < arrayLength; i++) {
            if (pattern.test(initialArray[i])) {
                resultArray.push(initialArray[i]);
            } else {
                resultArray[resultArray.length - 1] = resultArray[resultArray.length - 1] + "\n" + initialArray[i];
            }
        }

        return resultArray;
    }

    useEffect(() => {
        const readingHandler = async (fileUri) => {
            try {
                const chatFile = await fileReader(fileUri);
                // console.log(chatFile);
                const chatCon = arrangeArray(chatFile);
                setChatArray(chatCon);
            } catch (error) {
                console.log(error);
                setErrorOccur(true);
            }
        }
        readingHandler(fileUri);
    }, [fileUri]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: personTwo
        });
    }, [fileUri, personTwo]);

    if (errorOccur) {

        return (
            <View style={styles.errorContainer} >
                <Text style={styles.errorText} >Ooops....! Error while fetching chat....</Text>
            </View>
        );
    }

    return (
        chatArray && (<View style={styles.container}>
            <FlatList style={styles.flatListContaner} data={chatArray} renderItem={(chat) => {
                let itemArray = chat.item.split(": ");
                if (itemArray.length > 2) {
                    itemText = itemArray[1];
                    for (let i = 2; i < itemArray.length; i++) {
                        itemText = itemText + ": " + itemArray[i];
                    }
                    itemArray = [itemArray[0],itemText];
                }
                const person = itemArray[0].includes(personOne) ? "personOne" : "personTwo";
                let chatText = itemArray[1];
                const dtInfo = itemArray[0].split(", ");
                const timeInfo = dtInfo[1].split(" - ")[0];
                let [mo, da, yr] = dtInfo[0].split('/');
                yr = 20 + yr;
                const date = new Date(+yr, mo - 1, +da);
                chatText = chatText == "<Media omitted>" ? "Ooops! Media" : chatText;
                return (
                    <Conversation who={person} text={chatText} dateIn={date.toDateString()} timeIn={timeInfo} />
                );
            }} />
        </View>)
    );
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: scale(3)
    },
    flatListContaner: {
        paddingHorizontal: scale(12),
        paddingTop: verticalScale(5)
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorText: {
        fontSize: moderateScale(16),
        color: Colors.danger
    }
});