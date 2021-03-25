import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import colors from '../../assets/colors'

import Illustration from '../../assets/images/2.svg'

import { FontAwesome5 } from '@expo/vector-icons';
import Modal from 'react-native-modal'
import { AntDesign } from '@expo/vector-icons';
import CourseContent from '../course/CourseContent'

export default function CourseItem () {
    const [showModal, setShowModal] = useState(false)

    

    return(
        <TouchableOpacity style={styles.root}
            onPress={()=>{setShowModal(!showModal)}}>
            <Illustration/>

            <View style={styles.dimBox1}>
                <Text style={styles.label}>Popular</Text>
                <View style={styles.childView}>
                </View>
            </View>
            
            <View style={styles.dimBox2}>
            <View style={[styles.childView,{backgroundColor: colors.darkBlue}]}></View>
                <View style={styles.timeLine}>
                    <FontAwesome5 name="video" size={13} color={colors.gray} />
                </View>
                <Text style={styles.courseDescription}>
                    How to Create iOS 2D Games with SpriteKit and Swift 4
                </Text>
                
            </View>
            <Modal
                style={styles.modal}
                testID={'modal'}
                isVisible={showModal}
                backdropColor={colors.darkBlue}
                backdropOpacity={0.4}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}>
                
                <TouchableOpacity style={styles.closeModalBtn} onPress={()=>{setShowModal(false)}}>
                    <AntDesign name="close" size={24} color={colors.gray} />
                </TouchableOpacity>
                <CourseContent />
            </Modal>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    root: {
        justifyContent: 'center',
        marginLeft: 24,
    },
    image: {
        position: 'absolute'
    },
    childView: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.white,
        zIndex: 0,
        borderRadius: 20,
        opacity: 0.4
    },
    dimBox1: {
        flex: 1,
        position: 'absolute',
        borderRadius: 20,
        width: 92,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 24,
        top: 16,
    },
    label: {
        position: 'absolute',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 32,
        opacity: 1,
        color: 'white',
        zIndex: 1
    },
    
    dimBox2: {
        position: 'absolute',
        bottom: 24,
        width: 208,
        height: 120,
        marginLeft: 24,
        borderRadius: 20,
    },


    courseDescription: {
        position: 'absolute',
        textAlign: 'left',
        color: colors.white,
        marginHorizontal: 16,
        bottom: 17,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 20
    
        
    },
    timeLine: {
        position: 'absolute',
        flexDirection: 'row',
        marginLeft: 16,
        marginBottom: 11,
        top: 19,
        opacity: 0.6
    },
    modal: {
        borderRadius: 20,
        backgroundColor: colors.white,
        marginHorizontal: 24,
        
        marginBottom: 38,
        marginTop: 62,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    closeModalBtn: {
        marginLeft: 24,
        marginTop: 24,
    },
    

})
