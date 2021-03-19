import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import colors from '../../assets/colors'
import { FontAwesome } from '@expo/vector-icons';

export default function RatingBox(props) {
    const {rating, style} = props
    return(
        <View style={[styles.root,style]}>
            <FontAwesome style={styles.icon} name="star" size={12} color={colors.white}/>
            <Text style={styles.text}>{rating}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        backgroundColor: colors.orange,
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        justifyContent: 'space-evenly',
    },
    text: {
        color: colors.white,
        fontSize: 14,
        lineHeight: 20,
    },
    icon: {
        marginRight: 5
    }
})