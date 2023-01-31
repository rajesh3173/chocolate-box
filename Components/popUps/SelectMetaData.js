import { useContext, useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../../Constants/colors";
import { addItemInStore } from "../../Context/asyncStrore";
import { FileInfoContext } from "../../Context/fileInfoContext";
import { moderateScale, scale, verticalScale } from "../../Context/scales";
import CustomButton from "../CustomButton";
import RadioButton from "../RadioButton";

const SelectMetaData = ({ visible, popUphandler, fileInfo, setFileInfoAll, errorHandler, errorMsgHandler }) => {

    const fileInfoCtx = useContext(FileInfoContext);

    const [radioO, setRadioO] = useState(false);
    const [radioT, setRadioT] = useState(false);
    const [chatName, setChatName] = useState("");
    const [isKeyPresent, setIsKeyPresent] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false)

    const firstRadioHandler = () => {
        setIsEmpty(false);
        setRadioT(false);
        setRadioO(true);
    }

    const secondRadioHandler = () => {
        setIsEmpty(false);
        setRadioO(false);
        setRadioT(true);
    }

    const cancelHandler = () => {
        setRadioO(false);
        setRadioT(false);
        setChatName("");
        setFileInfoAll({});
        popUphandler();
        setIsEmpty(false);
        setIsKeyPresent(false);
    }

    const continueHandler = async () => {
        let fileAll = fileInfo;
        const ref1 = fileInfo["personOne"]
        const ref2 = fileInfo["personTwo"]
        if (radioT) {
            fileAll["personOne"] = ref2;
            fileAll["personTwo"] = ref1;
        }
        fileAll["fileName"] = chatName.trim();
        let stat = await addItemInStore(fileAll);
        if (stat == "fail") {
            errorMsgHandler("Error Occured While Storing Chocolate")
            errorHandler(true);
        } else if( stat == "ok"){
            fileInfoCtx.addFileInfo(fileAll);
            fileInfoCtx.addFileKey(fileAll["fileName"]);
        }
        cancelHandler();
    }

    const checkHandler = () => {
        if (chatName.trim().length > 0 && (radioO || radioT)) {
            if (fileInfoCtx.fileKeys.includes(chatName.trim())) {
                setIsKeyPresent(true);
            } else {
                continueHandler();
            }
        } else {
            setIsEmpty(true);
        }
    }

    const inputTextHandler = (text) =>{
        setChatName(text)
        setIsEmpty(false)
        if (fileInfoCtx.fileKeys.includes(text.trim())) {
            setIsKeyPresent(true)
        } else {
        setIsKeyPresent(false)
        }
    }

    return (
        <Modal visible={visible} animationType="fade" statusBarTranslucent={true} transparent={true}>
            <View style={styles.outerCon}>
                <View style={styles.container}>
                    <View style={styles.headCon}>
                        <Text style={styles.popHeading}>Chocolate Details</Text>
                    </View>
                    <View style={styles.innerContainer}>
                        <View style={styles.subContainers}>
                            <Text style={styles.fileHead}>Chocolate Name:</Text>
                            <View>
                                <TextInput
                                    style={styles.fileNameTest}
                                    placeholder="Give Unique Chocolate Name"
                                    color={Colors.secondary900}
                                    maxLength={10}
                                    selectionColor={Colors.secondary900}
                                    autoCorrect={false}
                                    onChangeText={(text) => { inputTextHandler(text) }}
                                    value={chatName}
                                />
                                { isKeyPresent && <Text style={styles.keyPresentError}>Chocolate Name Exists</Text>}
                            </View>
                        </View>
                        <View style={styles.subContainers}>
                            <Text style={styles.fileHead}>Who Are You:</Text>
                            <View >
                                <RadioButton onClick={firstRadioHandler} selected={radioO}>{fileInfo.personOne}</RadioButton>
                                <RadioButton onClick={secondRadioHandler} selected={radioT}>{fileInfo.personTwo}</RadioButton>
                            </View>
                        </View>
                        <View>
                            {isEmpty && <Text style={styles.keyPresentError}>Fill Chocolate Details</Text>}
                        </View>
                        <View style={[styles.subContainers, styles.buttonCon]}>
                            <CustomButton onSelect={cancelHandler} backColor={Colors.secondary500} textColor={Colors.secondary900}>CANCEL</CustomButton>
                            <CustomButton onSelect={checkHandler} backColor={Colors.secondary900} textColor={Colors.secondary500}>CONTINUE</CustomButton>
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
    keyPresentError: {
        color: Colors.errorText,
        fontSize: moderateScale(13),
        paddingTop: scale(3),
        // backgroundColor: 'pink',
        textAlign: 'center'
    },
    buttonCon: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});