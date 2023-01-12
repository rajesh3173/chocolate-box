import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/colors";
import { scale } from "../Context/scales";

const CustomButton = ({ children, onSelect }) => {

    return (
        <View style={[styles.container, children == "CONTINUE" ? { backgroundColor: Colors.secondary900 } : { backgroundColor: Colors.secondary500 }]}>
            <Pressable onPress={onSelect}>
                <View style={styles.pressContainer}>
                    <Text style={[styles.childrenText, children == "CONTINUE" ? { color: Colors.secondary500 } : { color: Colors.secondary900 }]}>{children}</Text>
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
