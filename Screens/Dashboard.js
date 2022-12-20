import { Button, StyleSheet, Text, View } from "react-native";

const Dashboard = ({navigation}) => {

    function chatScreen(){
        navigation.navigate('Chat')
    }

    return(
        <View style={styles.container}>
            <Text>Dashboard Screen</Text>
            <Button title="chat" onPress={chatScreen} />
        </View>
    );
}

export default Dashboard;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});