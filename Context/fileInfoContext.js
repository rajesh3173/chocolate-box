import { createContext, useState } from "react";

export const FileInfoContext = createContext({
    fileInfoList: [],
    addFileInfo: (fileInfo) => { },
    removeFileInfo: (fileInfo) => { },

    fileKeys: [],
    addFileKey: (filekey) => { },
    removeFileKey: (filekey) => { },
    removeAll: ()=>{},

    isLoading: false,
    setLoading: (status)=>{}
});

const FileInfoContextProvider = ({ children }) => {

    const [fileInfoList, setFileInfoList] = useState([]);

    const [fileKeys, setFileKeys] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const addFileInfo = (fileInfo) => {
        setFileInfoList((currentFileInfos) => [fileInfo, ...currentFileInfos]);
    }

    const removeFileInfo = (fileInfo) => {
        setFileInfoList((currentFileInfos) => currentFileInfos.filter((currentFileInfo) => currentFileInfo != fileInfo));
    }

    const addFileKey = (fileKey) => {
        setFileKeys((currentFileKeys) => [fileKey, ...currentFileKeys]);
    }

    const removeFileKey = (fileKey) => {
        setFileKeys((currentFileKeys) => currentFileKeys.filter((currentFileKey)=> currentFileKey != fileKey));
    }

    const removeAll = () => {
        setFileInfoList([]);
        setFileKeys([]);
    }

    const setLoading = (status) => {
        setIsLoading(status);
    }

    const value = {
        fileInfoList: fileInfoList,
        addFileInfo: addFileInfo,
        removeFileInfo: removeFileInfo,

        fileKeys: fileKeys,
        addFileKey: addFileKey,
        removeFileKey: removeFileKey,

        removeAll: removeAll,

        isLoading: isLoading,
        setLoading: setLoading
    }

    return (
        <FileInfoContext.Provider value={value}>
            {children}
        </FileInfoContext.Provider>
    );
}

export default FileInfoContextProvider;