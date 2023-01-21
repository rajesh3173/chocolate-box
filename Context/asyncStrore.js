import AsyncStorage from '@react-native-async-storage/async-storage';

const addItemInStore = async (item) => {
    try {
        const jsonValue = JSON.stringify(item)
        await AsyncStorage.setItem(item["fileName"], jsonValue);
    } catch (e) {
        console.log(e)
    }
}

const getStoreKeysHandler = async () => {
    let keys = [];
    try {
        keys = await AsyncStorage.getAllKeys();
    } catch (e) {
        console.log(e)
    }
    console.log(keys);
    return keys
}

const getFileInfoFromStore = async (key) => {
    try {
        const itemString = await AsyncStorage.getItem(key);
        return JSON.parse(itemString)
    } catch (e) {
        console.log(e);
    }
}

const clearStoreHandler = async () => {
    let keys = []
    try {
        keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys)
    } catch (e) {
        console.log(e);
    }
}

export { addItemInStore, getStoreKeysHandler, getFileInfoFromStore, clearStoreHandler };