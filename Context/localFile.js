import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const documentPicker = async () => DocumentPicker.getDocumentAsync({type: 'text/plain'});

const fileReader = async (fileUrl) => FileSystem.readAsStringAsync(fileUrl, {encoding: 'utf8'});

export {documentPicker, fileReader};