import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import colors from '../../assets/colors'

export default function IconWithText (props) {
    const {style, iconName, text} = props

    return (
        <View style={styles.root}>
            <FontAwesome5 style={[styles.icon,style]} name={iconName} size={16} color={colors.lightGray} />
            <Text style={styles.text}>{text}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16
    },
    icon: {
        marginRight: 10
    },
    text: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.02,
        color: colors.gray
    },
})