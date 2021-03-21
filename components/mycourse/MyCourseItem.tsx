import React from 'react'
import {View, Text, StyleSheet, Image, Alert} from 'react-native'
import colors from '../../assets/colors'
import RatingBox from './RatingBox'
import CourseTag from './CourseTag'
import { FontAwesome } from '@expo/vector-icons';
import CourseProgressBar from './CourseProgressBar'

export default function MyCourseItem(props) {
    const {course, style} = props
    
    return (
        <View style={[styles.root,style]}>
            <Image style={styles.courseIcon}
                    source={course.icon}
            />
            <View style={styles.rightWrapper}>
                <View style={styles.line1}>
                    <Text style={styles.title}>{course.title}</Text>
                    <RatingBox style={styles.ratingBox} rating={course.rating} />
                </View>
                
                <View style={styles.line2}>
                    { 
                        course.tag.map((element) => (<CourseTag key={element} text={element}/>))
                    }
                    
                    <View style={styles.costBox}>
                        <Text style={styles.cost}>{course.cost} </Text>
                        <Text style={styles.duration}>{course.duration}</Text>
                    </View>
                </View>
                <View style={styles.line3}>
                    <FontAwesome name="video-camera" size={16} color={colors.lightGray} />
                    <Text style={styles.course_length}>{course.length}</Text>
                    <CourseProgressBar style={styles.processbar} percentage={course.completed}/>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        
        flexDirection: 'row',
        marginHorizontal: 24,
        marginBottom: 24,
    },
    courseIcon: {
        
    },
    rightWrapper: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 16,
        
    },
    title: {
        color: colors.darkBlue,
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 20,
        width: '70%',
        flexShrink: 1,
    },
    ratingBox: {
        position: 'absolute',
        right: 0,
        top: 0
    },
    costBox:{
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 0
    },
    cost: {
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 20,
        color: colors.darkBlue
    },
    duration: {
        fontWeight: 'normal',
        fontSize: 16,
        lineHeight: 20,
        color: colors.darkBlue
    },
    course_length: {
        marginLeft: 12,
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.02,
        color: colors.gray
    },
    processbar: {
        position: 'absolute',
        right: 0
    },
    line1: {
        flexDirection: 'row',
        marginBottom: 7,
        alignItems: 'center',
        width: '100%',
    },
    line2: {
        flexDirection: 'row',
        marginBottom: 7,
        alignItems: 'center',
        marginTop: 7
    },
    line3: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})