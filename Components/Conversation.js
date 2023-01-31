import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../Constants/colors";
import { moderateScale, scale, verticalScale } from "../Context/scales";

const Conversation = ({ who, text, dateIn, timeIn }) => {

    const [tmVisiable, setTmVisiable] = useState(false);

    const timeVisiableHandler = () => {
        setTmVisiable(!tmVisiable);
    }

    return (
        <View style={[styles.container, who == "personOne" ? styles.pOneContainer : styles.pTwoContainer]} >
            <Pressable onPress={timeVisiableHandler}>
                <View style={[styles.alignContainer, who == "personOne" ? styles.pOneAlignCon : styles.pTwoAlignCon]}>
                    <Text style={[styles.textContainer, who == "personOne" ? styles.pOneText : styles.pTwoText]} >
                        {text}
                    </Text>
                    <Text style={[styles.dateInfo, who == "personOne" ? styles.pOneDateInfo : styles.pTwoDateInfo]} >
                        {dateIn}
                    </Text>
                </View>
            </Pressable>
            <Text style={[styles.timeInfo, tmVisiable ? { display: 'flex' } : { display: 'none' }]} >
                {timeIn}
            </Text>
        </View>
    );
}

export default Conversation;

const styles = StyleSheet.create({
    container: {
        marginBottom: verticalScale(5),
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
        paddingHorizontal: scale(15),
        paddingVertical: verticalScale(7),
        borderTopLeftRadius: scale(20),
        borderTopRightRadius: scale(20)
    },
    pOneAlignCon: {
        backgroundColor: Colors.primary800,
        borderBottomLeftRadius: scale(20)
    },
    pTwoAlignCon: {
        backgroundColor: Colors.secondary500,
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
        color: Colors.secondary800,
        marginRight: 'auto'
    },
    dateInfo: {
        fontSize: moderateScale(12),
        marginTop: verticalScale(1)
    },
    pOneDateInfo: {
        color: Colors.Primary400
    },
    pTwoDateInfo: {
        color: Colors.secondary700
    },
    timeInfo: {
        color: Colors.secondary400,
        fontSize: moderateScale(12)
    }
});