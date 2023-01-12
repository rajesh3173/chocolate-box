import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './Screens/Dashboard';
import Chat from './Screens/Chat';
import { StatusBar } from 'expo-status-bar';
import Colors from './Constants/colors';
import FileInfoContextProvider from './Context/fileInfoContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FileInfoContextProvider>
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
      </FileInfoContextProvider>
    </>
  );
}

