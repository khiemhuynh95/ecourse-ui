import React from 'react'
import {View, StyleSheet} from 'react-native'
import colors from '../../assets/colors'
export default function CourseProgressBar(props) {

    const{ style, percentage} = props
    return(
        <View style={[styles.root, style]}>
            <View style={[styles.progress, {width: percentage}]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        width: 40,
        height: 8,
        backgroundColor: colors.lightGray,
        borderRadius: 20,
    },
    progress: {
        borderRadius: 20,
        backgroundColor: colors.cyan,
        height: '100%',
    }
})