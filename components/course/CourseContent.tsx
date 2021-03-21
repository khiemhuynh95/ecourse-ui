import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import colors from '../../assets/colors'
import RatingBox from '../../components/mycourse/RatingBox'
import IconWithText from '../course/IconWithText'

import Illustration from '../../assets/images/2.svg'
import PlaySVG from '../../assets/images/play.svg'

export default function CourseContent() {
    return(
        <View style={styles.root}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>Complete C# Unity Developer 3D: Learn to Code Making Games</Text>
                <Text style={styles.description}>Game development & design. Learn C# using Unity Engine. Your first 3D Unity games for web, Mac & PC.</Text>
                <Text style={styles.author}>GameDev.tv Team</Text>
            </View>
            <View style={styles.line1}>
                <RatingBox rating="4.3" />
                <IconWithText iconName="video" text="hours"/>
                <IconWithText iconName="user-alt" text="2,300"/>
            </View>
            
            <View style={styles.imageBox}>
                <Illustration />
                <TouchableOpacity style={styles.playBtn}>
                    <PlaySVG/>    
                </TouchableOpacity>
                
            </View>

            <View style={styles.line2}>
                <View style={styles.priceWrapper}>
                    <Text style={styles.price}>$30</Text>
                    <Text style={styles.subcription}>monthly</Text>
                </View>
                <TouchableOpacity style={styles.buyNowBtn}>
                    <Text style={styles.buyNowLabel}>Buy Now</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.wishlistBtn}>
                    <Text style={styles.wishlistLabel}>Add to Wishlist</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        
        width: '100%',
        
    },
    textWrapper: {
        marginHorizontal: 24,
        marginTop: 14
    },
    author: {
        marginTop: 5,
        color: colors.darkBlue,
        fontWeight: 'bold',
        fontSize: 13,
        lineHeight: 24
    },
    title: {
        color: colors.darkBlue,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 28,
        
    },
    description: {
        marginTop: 16,
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 24,
        color: colors.gray
    },
    line1: {
        flexDirection: 'row',
        marginTop: 24,
        alignItems: 'center',
        marginHorizontal: 24
    },
    imageBox: {
        flexDirection: 'row',
        marginTop: 30,
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        

    },
    playBtn: {
        position: 'absolute',
        
        justifyContent: 'center',
        opacity: 0.8
    },
    line2: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginHorizontal: 24,
        justifyContent: 'flex-end',
        marginTop: 24
    },
    priceWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    price: {
        color: colors.darkBlue,
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 28,

    },
    subcription: {
        color: colors.darkBlue,
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 28,
        marginLeft: 16
    },
    buyNowBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 50,
        marginLeft: 17
    },
    buyNowLabel: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 32,
        letterSpacing: 0.02
    },
    wishlistBtn: {
        marginTop: 16,  
        marginHorizontal: 24,
        borderRadius: 50,
        borderColor: 'rgba(110, 111, 139,0.2)',
        borderWidth: 2,
    
        paddingVertical: 16,
        alignItems: 'center'
    },
    wishlistLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 32,
        letterSpacing: 0.02,
        color: colors.gray
    }
})