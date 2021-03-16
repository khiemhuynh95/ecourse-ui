import React from 'react'
import { createPortal } from 'react-dom'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../assets/colors'

import Illustration from '../assets/images/2.svg'
import { Feather } from '@expo/vector-icons';

export default function CourseItem () {
    return(
        <View style={styles.root}>
            <Illustration/>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>Popular</Text>
            </View>
            <View style={styles.coureWrapper}>
                <View style={styles.timeLine}>
                <Feather name="video" size={14} color="white" />
                </View>
                <Text style={styles.courseDescription}>
                    How to Create iOS 2D Games with SpriteKit and Swift 4
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        marginLeft: 24
    },
    image: {
        position: 'absolute'
    },
    labelContainer: {
        position: 'absolute',
        backgroundColor: colors.white,
        borderRadius: 20,
        
        width: 92,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 24,
        top: 16
    },
    label: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 32,
        
    },
    
    coureWrapper: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 24,
        width: 208,
        height: 120,
        marginLeft: 24,
        borderRadius: 20
    },
    courseDescription: {
        textAlign: 'left',
        color: colors.white,
        marginHorizontal: 16,
        
    },
    timeLine: {
        flexDirection: 'row',
        marginLeft: 16,
        marginBottom: 11,
        marginTop: 19
    }




})
