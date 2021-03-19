import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import IconWithLabel from '../bottomtab/IconWithLabel'
import colors from '../../assets/colors'

export default function BottomTab (props) {
    const {style} = props
    return(
        <View style={[style, styles.root]}>
            <View style={styles.iconView}>
                <IconWithLabel name="home" size={25} label="Home" />
                <IconWithLabel name="search" size={25} label="Search" />
                <IconWithLabel name="bookmark" size={25} label="Bookmark" />
                <IconWithLabel name="user" size={25} label="User" />
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        
        borderRadius: 50,
        paddingVertical: 20,
        alignItems: 'center',
        
    },
    iconView: {
        
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      
    }

    
})