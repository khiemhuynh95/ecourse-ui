import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../assets/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SubHeader({style,title}) {
    return (
        <View style={[styles.root,style]}>
            <Text style={styles.text}>{title}</Text>
            <TouchableOpacity style={styles.icon}>
                <MaterialCommunityIcons name="sort-variant" size={24} color={colors.gray} />
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        
        alignItems: 'center'
    },
    text: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 32,
        color: colors.darkBlue,
    },
    icon: {
        position: 'absolute',
        right: 0
    }
})