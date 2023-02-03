import { Pressable, StyleSheet, Text, View } from "react-native";
import { scale } from "../Context/scales";

const CustomButton = ({ children, onSelect, backColor, textColor }) => {

    return (
        <View style={[styles.container, { backgroundColor: backColor }]}>
            <Pressable onPress={onSelect}>
                <View style={styles.pressContainer}>
                    <Text style={[styles.childrenText, { color: textColor }]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CustomButton;

const styles = StyleSheet.create({
    container: {
        borderRadius: scale(8)
    },
    pressContainer: {
        paddingVertical: scale(6),
        paddingHorizontal: scale(8),
        justifyContent: 'center',
        alignItems: 'center',
    },
    childrenText: {
        fontSize: scale(16),
        fontWeight: "500",
    }
});