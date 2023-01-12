import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/colors";
import { moderateScale, scale } from "../Context/scales";

const FileCard = ({ infoCon }) => {

    const navigation = useNavigation();

    const goToChatHandler = () => {
        navigation.navigate('Chat', {
            fileUri: infoCon.filePath,
            personOne: infoCon.personOne,
            personTwo: infoCon.personTwo,
            endDate: infoCon.endDate
        })
    }

    return (
        <Pressable onPress={goToChatHandler}>
            <View style={styles.container}>
                <View style={styles.iconDetCon}>
                    <View style={styles.iconCon}>
                        <Text style={styles.iconText}>RK</Text>
                    </View>
                    <View style={styles.detaCon}>
                        <Text style={styles.fileName}>{infoCon.fileName}</Text>
                        <Text style={styles.fileText}>{infoCon.description}</Text>
                    </View>
                </View>
                <View style={styles.dateCont} >
                    <Text style={styles.dateText}>{infoCon.startDate}</Text>
                    <Text style={styles.dateText}>{infoCon.endDate}</Text>
                </View>
            </View>
        </Pressable>
    );
}

export default FileCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: scale(12),
        paddingVertical: scale(10),
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 1
    },
    iconDetCon: {
        flexDirection: 'row',
    },
    iconCon: {
        backgroundColor: Colors.secondary500,
        height: scale(50),
        width: scale(50),
        borderRadius: scale(48),
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconText: {
        fontSize: moderateScale(22),
        fontWeight: "500",
        color: Colors.secondary700
    },
    detaCon: {
        paddingHorizontal: scale(15),
        justifyContent: 'space-around'
    },
    fileName: {
        fontSize: moderateScale(17),
        fontWeight: "500",
        color: Colors.secondary900
    },
    fileText: {
        fontSize: moderateScale(15),
        color: Colors.secondary600
    },
    dateCont: {
        justifyContent: 'space-around',
    },
    dateText: {
        fontSize: moderateScale(13),
        color: Colors.secondary400,
    }
});