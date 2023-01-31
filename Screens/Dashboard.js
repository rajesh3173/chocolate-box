import { useContext, useLayoutEffect, useState } from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import FileCard from "../Components/FileCard";
import ErrorPopUp from "../Components/popUps/ErrorPopUp";
import SelectMetaData from "../Components/popUps/SelectMetaData";
import Colors from "../Constants/colors";
import { addItemInStore, clearStoreHandler, getStoreKeysHandler } from "../Context/asyncStrore";
import { FileInfoContext } from "../Context/fileInfoContext";
import { documentPicker, fileReader } from "../Context/localFile";
import { scale, verticalScale, moderateScale } from "../Context/scales";
import { AntDesign } from '@expo/vector-icons';
import DashboardMenu from "../Components/popUps/DashboardMenu";
import DeleteConform from "../Components/popUps/DeleteConform";
import FirstScreen from "../Components/FirstScreen";
import LoadingSpinner from "../Components/LoadingSpinner";

const Dashboard = ({ navigation }) => {

    const fileInfoCtx = useContext(FileInfoContext);

    const [metaPopUp, setMetaPopUp] = useState(false);
    const [fileInfoAll, setFileInfoAll] = useState({});
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDeletePopOpen, setIsDeletePopOpen] = useState(false);

    const [errorOccur, setErrorOccur] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const menuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable onPress={menuHandler}>
                        <View style={styles.menuCon}>
                            <AntDesign name="menu-unfold" size={moderateScale(24)} color="white" />
                        </View>
                    </Pressable>
                );
            }
        })
    }, [navigation, menuHandler]);

    const getMetaData = async (info) => {
        let pickedFileInfo = {};
        const chatFile = await fileReader(info.uri);
        if (chatFile == null) {
            return null;
        }
        const initialArray = chatFile.split("\n");
        const pattern = /^\d{1,2}\/\d{1,2}\/\d{2}, \d{1,2}:\d{1,2} \w{2} - (?:\w|\W)+: /;
        let ind = 0;
        let lastInd = initialArray.length;

        let chageDate = false;

        pickedFileInfo["filePath"] = info.uri;
        pickedFileInfo["fileName"] = ""

        while (true) {
            if (pattern.test(initialArray[lastInd])) {
                // before jan 2022 pattern
                // let [da, mo, yr] = dtInfo[0].split('/');
                // after aug 2022 pattern
                let [mo, da, yr] = initialArray[lastInd].split(": ")[0].split(" - ")[0].split(", ")[0].split("/");
                if (+yr < 22) {
                    let i = mo;
                    mo = da;
                    da = i;
                    chageDate = true;
                }
                yr = 20 + yr;
                const date = new Date(+yr, mo - 1, +da);
                pickedFileInfo["endDate"] = date.toDateString();
                break;
            }
            lastInd = lastInd - 1;
        }

        while (true) {
            if (pattern.test(initialArray[ind])) {
                const firstChatDet = initialArray[ind].split(": ");
                const firstChatDes = firstChatDet[1];
                pickedFileInfo["description"] = firstChatDes.length > 20 ? firstChatDes.slice(0, 16).trim() + "...." : firstChatDes;
                const chatDet = firstChatDet[0].split(" - ");
                pickedFileInfo["personOne"] = chatDet[1];
                const chatdate = chatDet[0].split(", ");
                // before jan 2022 pattern
                // let [da, mo, yr] = dtInfo[0].split('/');
                // after aug 2022 pattern
                let [mo, da, yr] = chatdate[0].split('/');
                if (chageDate) {
                    let i = mo;
                    mo = da;
                    da = i;
                }
                yr = 20 + yr;
                const date = new Date(+yr, mo - 1, +da);
                pickedFileInfo["startDate"] = date.toDateString();
                ind = ind + 1;
                break;
            }
            ind = ind + 1;
        }

        while (true) {
            if (pattern.test(initialArray[ind])) {
                const chatDet = initialArray[ind].split(": ")[0];
                pickedFileInfo["personTwo"] = chatDet.split(" - ")[1];
                break;
            }
            ind = ind + 1;
        }

        setFileInfoAll(pickedFileInfo);
        return 1;
    }

    const addNewHandler = async () => {
        const info = await documentPicker();
        if (info == null) {
            setErrorMsg("Error Occured While Picking Chocolate");
            setErrorOccur(true);
        } else if (info.type == "success") {
            let metD = await getMetaData(info);
            if (metD == null) {
                setErrorMsg("Error Occured While Reading Chocolate");
                setErrorOccur(true);
            } else {
                metaDataPopUpHandler();
            }
        }

    }

    const metaDataPopUpHandler = () => {
        setMetaPopUp(!metaPopUp);
    }

    const clearAllFilesHandler = async () => {
        let stat = await clearStoreHandler();
        if (stat == "ok") {
            fileInfoCtx.removeAll();
        } else {
            setErrorOccur(true);
            setErrorMsg("Error Occured While Cleaning The Box")
        }
    }


    const getStore = async () => {

        console.log(await getStoreKeysHandler());
        console.log(fileInfoCtx.fileKeys.length);
        console.log(fileInfoCtx.fileKeys);
    }

    if (fileInfoCtx.isLoading) {
        return(
            <LoadingSpinner />
        );
    } 

    return (
        fileInfoCtx.fileInfoList && (
            <View style={styles.container}>
                <SelectMetaData visible={metaPopUp}
                    popUphandler={metaDataPopUpHandler}
                    fileInfo={fileInfoAll}
                    setFileInfoAll={setFileInfoAll}
                    errorHandler={setErrorOccur}
                    errorMsgHandler={setErrorMsg}
                />
                <ErrorPopUp visible={errorOccur}
                    message={errorMsg}
                    errorHandler={setErrorOccur}
                    errorMsgHandler={setErrorMsg}
                />
                <DashboardMenu visible={isMenuOpen}
                    menuHandler={menuHandler}
                    deletePopHandler={setIsDeletePopOpen}
                />
                <DeleteConform visible={isDeletePopOpen}
                    head="Empty the Box?"
                    message="Click continue to empty the box"
                    closeHandler={setIsDeletePopOpen}
                    deleteHandler={clearAllFilesHandler}
                />

                {
                    fileInfoCtx.fileInfoList == 0 && (
                        <FirstScreen visible={true} addNewHandler={addNewHandler}/>
                    )
                }
                {
                    fileInfoCtx.fileInfoList.length > 0 && (
                        <View style={styles.container}>
                            <View style={styles.headerSection}>
                                <Text style={styles.headerText}>All Chocolates</Text>
                                <Pressable onPress={addNewHandler} style={styles.addNewButton}>
                                    <Text style={styles.addNewButtonText}>+ Add Chocolate</Text>
                                </Pressable>
                            </View>



                            {/* <Button title="getStore" onPress={getStore} /> */}



                            <View style={styles.chatFilesCon}>
                                <FlatList data={fileInfoCtx.fileInfoList} renderItem={(infoCon) => {
                                    return (
                                        <FileCard infoCon={infoCon.item} />
                                    );
                                }} />
                            </View>
                        </View>
                    )
                }
            </View>
        )

    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuCon: {
        paddingLeft: scale(15),
        paddingVertical: scale(10),
    },
    headerSection: {
        paddingHorizontal: scale(12),
        paddingVertical: verticalScale(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontSize: moderateScale(18),
        fontWeight: 'bold',
        color: Colors.secondary900
    },
    addNewButton: {
        padding: scale(5)
    },
    addNewButtonText: {
        color: Colors.secondary900,
        fontSize: moderateScale(15),
        fontWeight: "500"
    },
    chatFilesCon: {
        flex: 1,
    }
});