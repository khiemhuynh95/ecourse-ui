import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import colors from '../assets/colors'
import Illutrastion from '../assets/images/1.svg'

export default function WelcomeScreen () {
    return (
        <View style={styles.root}>
            <Illutrastion ></Illutrastion>
            <View style={styles.contentWrapper}>
                <Text style={styles.title}>Game Development Fundamentals Courses</Text>
                <Text style={styles.description}>Find the right iOS Game Development course for you. Answer a few questions to see what we'd recommend for you.</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnLabel}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        marginBottom: 16,
        textAlign: 'left',
        color: colors.darkBlue,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
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
    contentWrapper: {
        marginHorizontal: 32,
        marginTop: 68
    },
    btn: {
        backgroundColor: colors.blue,
        width: 140,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        borderRadius: 50,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
         height: 5
        },
        shadowRadius: 2,
        shadowOpacity: 0.2
    },
    btnLabel: {
        color: colors.white,
        fontSize: 16,
        lineHeight: 32,
        fontStyle: 'normal',
        fontWeight: 'bold',
        
    },
    image: {

    }
})