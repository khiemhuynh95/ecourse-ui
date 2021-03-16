import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../assets/colors'
import CourseItem from '../components/CourseItem'

export default function HomeScreeen () {
    return(
        <View style={styles.root}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>Fundamentals Courses</Text>
                <Text style={styles.description}>Find the right iOS Game Development course for you. Answer a few questions to see what we'd recommend for you.</Text>
            </View>
            <CourseItem></CourseItem>

        </View>
    )
}

const styles = StyleSheet.create({
    root: {

    },
    title: {
        marginBottom: 16,
        textAlign: 'left',
        color: colors.darkBlue,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 32,
        lineHeight: 32

    },
    description: {
        textAlign: 'left',
        color: colors.gray,
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 24

    },
    textWrapper: {
        marginHorizontal: 32,
        marginTop: 68
    },
})