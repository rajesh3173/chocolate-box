import { StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/colors";
import { moderateScale, scale } from "../Context/scales";

const Conversation = (props) => {
    const who = props.who;
    console.log(who)

    return (
        <View style={who == "personOne" ? [styles.container, styles.pOneContainer] : [styles.container, styles.pTwoContainer]} >
            <View style={who == "personOne" ? [styles.alignContainer, styles.pOneAlignCon] : [styles.alignContainer, styles.pTwoAlignCon]}>
                <Text style={who == "personOne" ? [styles.textContainer, styles.pOneText] : [styles.textContainer, styles.pTwoText]}>
                    Nullam Nullam id dolor id nibh ultricies vehicula ut id elit. Donec id elit non mi porta gravida at eget metus.
                </Text>
                <Text style={who == "personOne" ? [styles.timeInfo, styles.pOneTimeInfo] : [styles.timeInfo, styles.pTwoTimeInfo]}>
                    Wed 14 dec, 2022
                </Text>
            </View>
        </View>
    );
}

export default Conversation;

const styles = StyleSheet.create({
    container: {
        marginVertical: scale(5),
        width: '90%',
    },
    pOneContainer: {
        alignItems: 'flex-end',
        marginLeft: 'auto'
    },
    pTwoContainer: {
        alignItems: 'flex-start',
        marginRight: 'auto'
    },
    alignContainer: {
        padding: scale(15),
        borderTopLeftRadius: scale(20),
        borderTopRightRadius: scale(20)
    },
    pOneAlignCon: {
        backgroundColor: Colors.primary800,
        borderBottomLeftRadius: scale(20)
    },
    pTwoAlignCon: {
        backgroundColor: Colors.secondary800,
        borderBottomRightRadius: scale(20)
    },
    textContainer: {
        fontSize: moderateScale(16)
    },
    pOneText: {
        color: Colors.primaryText,
        marginLeft: 'auto'
    },
    pTwoText: {
        color: Colors.secondaryText,
        marginRight: 'auto'
    },
    timeInfo: {
        fontSize: moderateScale(14),
        marginTop: scale(6)
    },
    pOneTimeInfo: {
        color: Colors.primaryShadow
    },
    pTwoTimeInfo: {
        color: Colors.secondaryShadow
    }
});