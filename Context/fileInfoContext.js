import { createContext, useState } from "react";

export const FileInfoContext = createContext({
    fileInfoList: [],
    addFileInfo: (fileInfo) => { },
    removeFileInfo: (fileInfo) => { }
});

const FileInfoContextProvider = ({ children }) => {

    const [fileInfoList, setFileInfoList] = useState([]);

    const addFileInfo = (fileInfo) => {
        setFileInfoList((currentFileInfos) => [fileInfo, ...currentFileInfos]);
    }

    const removeFileInfo = (fileInfo) => {
        setFileInfoList((currentFileInfos) => currentFileInfos.filter((currentFileInfo) => currentFileInfo != fileInfo));
    }

    const value = {
        fileInfoList: fileInfoList,
        addFileInfo: addFileInfo,
        removeFileInfo: removeFileInfo
    }

    return (
        <FileInfoContext.Provider value={value}>
            {children}
        </FileInfoContext.Provider>
    );
}

export default FileInfoContextProvider;