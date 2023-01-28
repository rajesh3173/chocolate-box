import AsyncStorage from '@react-native-async-storage/async-storage';

const addItemInStore = async (item) => {
    let stat = "";
    try {
        const jsonValue = JSON.stringify(item)
        await AsyncStorage.setItem(item["fileName"], jsonValue);
        stat = "ok";
    } catch (e) {
        console.log(e)
        stat = "fail";
    }
    
    return stat;
}

const getStoreKeysHandler = async () => {
    let keys = [];
    try {
        keys = await AsyncStorage.getAllKeys();
    } catch (e) {
        console.log(e)
        keys = null;
    }
    return keys;
}

const getFileInfoFromStore = async (key) => {
    let data = "";
    try {
        const itemString = await AsyncStorage.getItem(key);
        data = JSON.parse(itemString);
        // console.log(data)
    } catch (e) {
        console.log(e);
        data = null;
    }
    return data;
}

const clearStoreHandler = async () => {
    let keys = []
    let stat = ""
    try {
        keys = await AsyncStorage.getAllKeys();
        if (keys.length != 0) {
            await AsyncStorage.multiRemove(keys);
        }
        stat = "ok"
    } catch (e) {
        stat = "fail"
        console.log(e);
    }
    return stat;
}

const removeOneFile = async (fileKey) => {
    let stat = "";
    try {
        await AsyncStorage.removeItem(fileKey);
        stat = "ok"
    } catch (e) {
        stat = "fail"
        console.log(e);
    }
    return stat;
}

export { addItemInStore, getStoreKeysHandler, getFileInfoFromStore, clearStoreHandler, removeOneFile };