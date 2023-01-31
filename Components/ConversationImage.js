import { Image, StyleSheet, Text, View } from "react-native";
import { moderateScale, scale, verticalScale } from "../Context/scales";

const ConversationImage = () => {

    return (
        <View style={styles.container}>
            <View style={styles.block1}>
                <View style={styles.imageCon}>
                    <View style={styles.imgCon1}>
                        <Image style={styles.image} source={require('../assets/women1.png')} />
                    </View>
                </View>
                <View style={styles.chatCon}>
                    <View style={[styles.personChat1, styles.personChat11]}>
                        <View style={styles.line11}>
                            <View style={[styles.line, styles.line111]}></View>
                            <View style={[styles.line, styles.line112]}></View>
                        </View>
                        <View style={styles.line12}>
                            <View style={[styles.line, styles.line121]}></View>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.block2}>
                <View style={styles.chatCon}>
                    <View style={[styles.personChat2, styles.personChat21]}>
                        <View style={styles.line11}>
                            <View style={[styles.line, styles.line211]}></View>
                            <View style={[styles.line, styles.line212]}></View>
                        </View>
                        <View style={styles.line12}>
                            <View style={[styles.line, styles.line221]}></View>
                            <View style={[styles.line, styles.line222]}></View>
                        </View>
                    </View>
                </View>
                <View style={styles.imageCon}>
                    <View style={styles.imgCon2}>
                        <Image style={styles.image} source={require('../assets/men1.png')} />
                    </View>
                </View>
            </View>


            <View style={styles.block1}>
                <View style={styles.imageCon}>
                    <View style={styles.imgCon3}>
                        <Image style={styles.image} source={require('../assets/women2.png')} />
                    </View>
                </View>
                <View style={styles.chatCon}>
                    <View style={[styles.personChat1, styles.personChat12]}>
                        <View style={styles.line11}>
                            <View style={[styles.line, styles.line311]}></View>
                            <View style={[styles.line, styles.line312]}></View>
                        </View>
                        <View style={styles.line12}>
                            <View style={[styles.line, styles.line321]}></View>
                            <View style={[styles.line, styles.line322]}></View>
                        </View>
                    </View>
                </View>
            </View>


            <View style={styles.block2}>
                <View style={styles.chatCon}>
                    <View style={[styles.personChat2, styles.personChat22]}>
                        <View style={styles.line11}>
                            <View style={[styles.line, styles.line411]}></View>
                            <View style={[styles.line, styles.line412]}></View>
                        </View>
                        <View style={styles.line12}>
                            <View style={[styles.line, styles.line121]}></View>
                        </View>
                    </View>
                </View>
                <View style={styles.imageCon}>
                    <View style={styles.imgCon4}>
                        <Image style={styles.image} source={require('../assets/men2.png')} />
                    </View>
                </View>
            </View>
        </View>
    );
}

export default ConversationImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    block1: {
        flex: 1,
        width: '80%',
        flexDirection: 'row',
        marginTop: verticalScale(5)
    },
    block2: {
        flex: 1,
        width: '80%',
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginTop: verticalScale(5)
    },
    imageCon: {
        width: '25%',
        marginBottom: 0,
        marginTop: 'auto',
        alignItems: 'center',
        marginHorizontal: scale(6)
    },
    imgCon1: {
        height: 39,
        width: 36,
    },
    imgCon2: {
        height: 57,
        width: 38,
    },
    imgCon3: {
        height: 52,
        width: 52,
    },
    imgCon4: {
        height: 50,
        width: 49,
    },
    image: {
        height: '100%',
        width: '100%'
    },
    chatCon: {
        width: '75%'
    },
    personChat1: {
        borderTopRightRadius: scale(15),
        borderTopLeftRadius: scale(15),
        borderBottomRightRadius: scale(15),
        paddingVertical: scale(15),
        paddingHorizontal: scale(15)
    },
    personChat2: {
        borderTopRightRadius: scale(15),
        borderTopLeftRadius: scale(15),
        borderBottomLeftRadius: scale(15),
        paddingVertical: scale(15),
        paddingHorizontal: scale(15)
    },
    personChat11: {
        backgroundColor: '#f8a06b',
    },
    personChat21: {

        backgroundColor: '#92c0D7',

    },
    personChat12: {
        backgroundColor: '#fbd1a2',
    },
    personChat22: {
        backgroundColor: '#9dc183',
    },
    line11: {
        flexDirection: 'row',
        marginBottom: scale(8)
    },
    line: {
        borderBottomWidth: moderateScale(2),
        borderRadius: moderateScale(1)
    },
    line111: {
        borderColor: 'white',
        width: '35%',
        marginRight: '5%'
    },
    line112: {
        borderColor: 'white',
        width: '60%'
    },
    line12: {
        flexDirection: 'row',
    },
    line121: {
        borderColor: 'white',
        width: '70%'
    },
    line211: {
        borderColor: 'white',
        width: '20%',
        marginRight: '5%'
    },
    line212: {
        borderColor: 'white',
        width: '80%'
    },
    line221: {
        borderColor: 'white',
        width: '60%',
        marginRight: '5%'
    },
    line222: {
        borderColor: 'white',
        width: '20%'
    },
    line311: {
        borderColor: 'white',
        width: '55%',
        marginRight: '5%'
    },
    line312: {
        borderColor: 'white',
        width: '40%'
    },
    line321: {
        borderColor: 'white',
        width: '10%',
        marginRight: '5%'
    },
    line322: {
        borderColor: 'white',
        width: '60%'
    },
    line411: {
        borderColor: 'white',
        width: '30%',
        marginRight: '5%'
    },
    line412: {
        borderColor: 'white',
        width: '65%'
    },
});