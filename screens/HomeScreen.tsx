import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import colors from '../assets/colors'
import CourseItem from '../components/CourseItem'
import SubHeader from '../components/SubHeader'
import MyCourseItem from '../components/MyCourseItem'

const course_data = [{},{}]

export default function HomeScreeen () {
    return(
        <View style={styles.root}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>Fundamentals Courses</Text>
                <Text style={styles.description}>Find the right iOS Game Development course for you. Answer a few questions to see what we'd recommend for you.</Text>
            </View>
            <FlatList
                    horizontal={true}
                    data={course_data}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
            />
            <SubHeader style={styles.subHeader} title="The Fundamentals" ></SubHeader>
            <MyCourseItem />
        </View>
    )
}
const keyExtractor = (item) => item.title;
const renderItem = ({item}) => {
    return (
      <CourseItem ></CourseItem>
    );
};
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
        lineHeight: 24,
        marginBottom: 27
    },
    textWrapper: {
        marginHorizontal: 32,
        marginTop: 68
    },
    subHeader: {
        marginHorizontal: 24,
        marginTop: 32
    }
})