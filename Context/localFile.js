import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const documentPicker = async () => {
    let data = null;
    try {
        data = await DocumentPicker.getDocumentAsync({ type: 'text/plain' });
    } catch (error) {
        data = null;
    }

    return data;
}

const fileReader = async (fileUrl) => {
    let data = null;
    try {
        data = await FileSystem.readAsStringAsync(fileUrl, { encoding: 'utf8' });
    } catch (error) {
        data = null
    }

    return data;
}

export { documentPicker, fileReader };