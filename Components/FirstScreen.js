import { Modal, StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/colors";
import { moderateScale, scale, verticalScale } from "../Context/scales";
import CustomButton from "./CustomButton";
import ConversationImage from "./ConversationImage";

const FirstScreen = ({ visible, addNewHandler }) => {

    return (
        <Modal visible={visible} animationType="fade" statusBarTranslucent={true}>
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.headCon}>
                        <Text style={styles.headText}>ChocolateBox</Text>
                        <Text style={styles.headDes}>Collection Of Love...!</Text>
                    </View>
                    <View style={styles.imageCon}>
                        <ConversationImage />
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <View style={styles.bottomInnerContainer}>
                        <View style={styles.bottomInnerTextContainer}>
                            <Text style={styles.bottomHeadText}>Collect Your First Chocolate</Text>
                            <Text style={styles.bottomBodyText}>Forever in your heart</Text>
                        </View>
                        <CustomButton onSelect={addNewHandler} backColor={Colors.primary800} textColor={Colors.primaryText} >Collect Now</CustomButton>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default FirstScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backgroundAll,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topContainer: {
        backgroundColor: Colors.primary800,
        height: '65%',
        width: '100%',
        borderBottomLeftRadius: scale(70),
        borderBottomRightRadius: scale(70),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: verticalScale(50),
        paddingHorizontal: scale(40)
    },
    headCon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    headText: {
        fontSize: moderateScale(30),
        color: Colors.primaryText,
        fontWeight: '500',
        marginBottom: verticalScale(8),
    },
    headDes: {
        fontSize: moderateScale(15),
        color: Colors.Primary400
    },
    imageCon: {
        width: scale(220),
        height: scale(240),
    },
    image: {
        width: '100%',
        height: '100%'
    },
    bottomContainer: {
        height: '35%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomInnerContainer: {
        width: '80%',
        padding: scale(20)
    },
    bottomInnerTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomHeadText: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: Colors.secondary900,
        marginBottom: scale(5)
    },
    bottomBodyText: {
        fontSize: moderateScale(15),
        color: Colors.secondary600,
        marginBottom: scale(30)
    }
});