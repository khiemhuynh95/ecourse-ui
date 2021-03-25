import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import colors from '../../assets/colors'
import { Feather } from '@expo/vector-icons';


export default function IconWithLabel (props) {

    const [pressed,setPressed] = useState(false) 
 
    const {style, name, label, size} = props

    return(
        <View style={styles.root}>
            <TouchableWithoutFeedback onPress={()=>setPressed(!pressed)} >
                <Feather name={name} size={size} color={pressed ? colors.blue : colors.gray} />
            </TouchableWithoutFeedback>
            {pressed && <Text style={styles.text}>{label}</Text>}
        </View>
        
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 32
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 20,
        color: colors.blue,
        marginLeft: 12
    }
})