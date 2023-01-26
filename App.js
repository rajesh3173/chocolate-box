import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Screens/Dashboard';
import Chat from './Screens/Chat';
import { StatusBar } from 'expo-status-bar';
import Colors from './Constants/colors';
import FileInfoContextProvider, { FileInfoContext } from './Context/fileInfoContext';
import { getFileInfoFromStore, getStoreKeysHandler } from './Context/asyncStrore';
import { useContext, useEffect } from 'react';

const Stack = createNativeStackNavigator();

const Root = () => {
  const fileInfoCtx = useContext(FileInfoContext);

  useEffect(() => {
    let keys = [];
    const getKeys = async () => {
      keys = await getStoreKeysHandler();
      if (keys == null) {
        return ;
      }
      for (let i = 0; i < keys.length; i++) {
        let fi = await getFileInfoFromStore(keys[i]);
        if (fi != null){
          fileInfoCtx.addFileKey(keys[i]);
          fileInfoCtx.addFileInfo(fi);
        }
      }
    }
    getKeys();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: Colors.primary800 },
        headerTintColor: Colors.PrimaryHeading,
        contentStyle: { backgroundColor: Colors.backgroundAll }
      }}>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ title: "ChocolateBox" }} />
        <Stack.Screen name='Chat' component={Chat} options={{ title: "Chat" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FileInfoContextProvider>
        <Root />
      </FileInfoContextProvider>
    </>
  );
}

