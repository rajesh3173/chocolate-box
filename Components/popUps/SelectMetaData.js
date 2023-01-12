import { useContext, useState } from "react";
import { Button, Modal, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../Constants/colors";
import { FileInfoContext } from "../../Context/fileInfoContext";
import { moderateScale, scale, verticalScale } from "../../Context/scales";
import CustomButton from "../CustomButton";
import RadioButton from "../RadioButton";

const SelectMetaData = ({ visible, popUphandler, fileInfo, setFileInfoAll }) => {

    const fileInfoCtx = useContext(FileInfoContext);

    const [radioO, setRadioO] = useState();
    const [radioT, setRadioT] = useState();
    const [chatName, setChatName] = useState("");

    const firstRadioHandler = () => {
        setRadioT(false);
        setRadioO(true);
    }

    const secondRadioHandler = () => {
        setRadioO(false);
        setRadioT(true);
    }

    const cancelHandler = () => {
        setRadioO(false);
        setRadioT(false);
        setChatName("");
        setFileInfoAll({});
        popUphandler();
    }

    const continueHandler = () => {
        let fileAll = fileInfo;
        const ref1 = fileInfo["personOne"]
        const ref2 = fileInfo["personTwo"]
        if (radioT) {
            fileAll["personOne"] = ref2;
            fileAll["personTwo"] = ref1;
        }
        fileAll["fileName"] = chatName;
        fileInfoCtx.addFileInfo(fileAll);
        cancelHandler();
    }

    return (
        <Modal visible={visible} animationType="fade" statusBarTranslucent={true} transparent={true}>
            <View style={styles.outerCon}>
                <View style={styles.container}>
                    <View style={styles.headCon}>
                        <Text style={styles.popHeading}>Heading</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <View style={styles.subContainers}>
                            <Text style={styles.fileHead}>ChatName:</Text>
                            <View>
                                <TextInput
                                    style={styles.fileNameTest}
                                    placeholder="Give Unique ChatName"
                                    color={Colors.secondary900}
                                    maxLength={12}
                                    selectionColor={Colors.secondary900}
                                    autoCorrect={false}
                                    onChangeText={(text) => { setChatName(text) }}
                                    value={chatName}
                                />
                            </View>
                        </View>
                        <View style={styles.subContainers}>
                            <Text style={styles.fileHead}>Who Are You:</Text>
                            <View >
                                <RadioButton onClick={firstRadioHandler} selected={radioO}>{fileInfo.personOne}</RadioButton>
                                <RadioButton onClick={secondRadioHandler} selected={radioT}>{fileInfo.personTwo}</RadioButton>

                            </View>
                        </View>
                        <View style={[styles.subContainers, styles.buttonCon]}>
                            <CustomButton onSelect={cancelHandler}>CANCEL</CustomButton>
                            <CustomButton onSelect={continueHandler}>CONTINUE</CustomButton>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default SelectMetaData;

const styles = StyleSheet.create({
    outerCon: {
        flex: 1,
        backgroundColor: Colors.popUpBack,
        opacity: 0.85,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        // flex: 1,
        borderRadius: scale(20),
        // alignItems: "center",
        backgroundColor: Colors.backgroundAll,
        width: "80%"

    },
    headCon: {
        paddingVertical: verticalScale(20),
        backgroundColor: Colors.primary800,
        borderTopLeftRadius: scale(20),
        borderTopRightRadius: scale(20)
    },
    innerContainer: {
        justifyContent: "center",
        paddingHorizontal: scale(40),
        paddingBottom: verticalScale(40),

    },
    popHeading: {
        fontSize: moderateScale(20),
        fontWeight: "bold",
        color: Colors.PrimaryHeading,
        paddingLeft: scale(40)
    },
    subContainers: {
        paddingVertical: verticalScale(10),
        // backgroundColor: 'red'
    },
    fileHead: {
        fontSize: moderateScale(18),
        fontWeight: "bold",
        color: Colors.secondary900,
        marginBottom: verticalScale(5)
    },
    fileNameTest: {
        fontSize: moderateScale(15),
        backgroundColor: Colors.secondary500,
        paddingHorizontal: scale(10),
        paddingVertical: verticalScale(5),
        borderRadius: scale(10),
        borderWidth: scale(1),
        borderColor: Colors.secondary700,
    },
    buttonCon: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});