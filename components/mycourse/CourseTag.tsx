import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../../assets/colors'

export default function CourseTag (props) {
    const {text, style} = props
    return (
        <View style={[styles.root, style]}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: colors.lightGray,
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 7
    },
    text: {
        color: colors.gray,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.02,
        paddingHorizontal: 8,
        paddingVertical: 4
    }
})