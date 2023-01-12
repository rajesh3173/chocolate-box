import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/colors";
import { moderateScale, scale, verticalScale } from "../Context/scales";

const RadioButton = ({ children, onClick, selected }) => {

    return (
        <View style={styles.container}>
            <Pressable onPress={onClick}>
                <View style={styles.pressedCom}>
                    <View style={selected ? [styles.circle, styles.circleFill] : styles.circle} />
                    <View style={styles.textCon}>
                        <Text style={selected ? [styles.selected, styles.textField] : styles.textField}>{children}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default RadioButton;

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(1),
        justifyContent: "center",
    },
    pressedCom: {
        paddingVertical: scale(5),
        flexDirection: "row",
        alignItems: "center",
    },
    circle: {
        height: scale(17),
        width: scale(17),
        borderRadius: scale(17),
        borderWidth: scale(2),
        borderColor: Colors.secondary900
    },
    circleFill: {
        backgroundColor: Colors.secondary700
    },
    textCon: {
        paddingLeft: scale(10)
    },
    textField: {
        fontSize: moderateScale(16),
        color: Colors.secondary900
    },
    selected: {
        fontWeight: "500"
    }
});