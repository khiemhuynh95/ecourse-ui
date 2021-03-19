import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import CourseIconSVG from '../assets/images/course-icon-2.svg'

export default function MyCourseItem() {
    return (
        <View style={styles.root}>
            <CourseIconSVG style={styles.courseIcon}/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row'
    },
    courseIcon: {
        opacity: 1
    }
})