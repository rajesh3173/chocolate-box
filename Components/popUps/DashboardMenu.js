import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../Constants/colors";
import { moderateScale, scale, verticalScale } from "../../Context/scales";
import { MaterialIcons } from '@expo/vector-icons';

const DashboardMenu = ({ visible, menuHandler, deletePopHandler }) => {

    const deletePop = () => {
        menuHandler();
        deletePopHandler(true);
    }

    return (
        <Modal visible={visible} animationType="fade" transparent={true}>
            <View style={styles.outerCon}>
                <View style={styles.container}>
                    <View style={styles.textCon}>
                        <View>
                            <Pressable onPress={deletePop}>
                                <Text style={styles.menuText}>Delete All</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View>
                        <Pressable onPress={menuHandler}>
                            <View style={styles.closeInCon}>
                                <MaterialIcons name="close" size={24} color={Colors.secondary900} />
                            </View>
                        </Pressable>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

export default DashboardMenu;

const styles = StyleSheet.create({
    outerCon: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        marginRight: scale(5)
    },
    container: {
        borderRadius: scale(7),
        backgroundColor: Colors.secondary500,
        paddingLeft: scale(10),
        paddingVertical: verticalScale(10),
        paddingRight: scale(5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 20,
    },
    closeInCon: {
        paddingHorizontal: scale(10),
        paddingBottom: scale(10),
        paddingTop: scale(5),
    },
    textCon: {
        marginTop: verticalScale(10),
    },
    menuText: {
        fontSize: moderateScale(17),
        paddingVertical: verticalScale(10),
        paddingRight: scale(20),
        paddingLeft: scale(10),
        color: Colors.secondary900
    }
});