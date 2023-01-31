import { Modal, StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/colors";
import { moderateScale, scale, verticalScale } from "../../Context/scales";
import CustomButton from "../CustomButton";

const ErrorPopUp = ({ visible, message, errorHandler, errorMsgHandler }) => {

    const handleClose = () => {
        errorMsgHandler("");
        errorHandler(false);
    }

    return (
        <Modal visible={visible} animationType="fade" statusBarTranslucent={true} transparent={true}>
            <View style={styles.outerCon}>
                <View style={styles.container}>
                    <View style={styles.headCon}>
                        <Text style={styles.popHeading}>Error</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <View style={styles.subContainers}>
                            <Text>{message}</Text>
                        </View>

                        <View style={[styles.subContainers, styles.buttonCon]}>
                            <CustomButton onSelect={handleClose} backColor={Colors.secondary900} textColor={Colors.secondary500}>OK</CustomButton>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ErrorPopUp;

const styles = StyleSheet.create({
    outerCon: {
        flex: 1,
        backgroundColor: Colors.popUpBack,
        opacity: 0.85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        borderRadius: scale(20),
        backgroundColor: Colors.backgroundAll,
        width: "75%"

    },
    headCon: {
        paddingVertical: verticalScale(15),
        backgroundColor: Colors.primary800,
        borderTopLeftRadius: scale(20),
        borderTopRightRadius: scale(20)
    },
    popHeading: {
        fontSize: moderateScale(20),
        fontWeight: "bold",
        color: Colors.PrimaryHeading,
        paddingLeft: scale(30)
    },
    innerContainer: {
        justifyContent: "center",
        paddingHorizontal: scale(30),
        paddingBottom: verticalScale(20),

    },
    subContainers: {
        paddingVertical: verticalScale(10),
    },
    buttonCon: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});