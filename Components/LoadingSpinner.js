import { ActivityIndicator, Modal, StyleSheet, ImageBackground } from "react-native";

const LoadingSpinner = () => {
    return (
        <Modal visible={true} animationType="none" statusBarTranslucent={true}>
            <ImageBackground
                source={require('../assets/loadBack.png')}
                resizeMode="cover"
                style={styles.container}
                imageStyle={styles.backgroundimg}
            >
                <ActivityIndicator size="large" color="#374562" />
            </ImageBackground>
        </Modal>
    );
}

export default LoadingSpinner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundimg: {
        opacity: 0.3
    }
})