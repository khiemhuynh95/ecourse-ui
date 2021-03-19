import React from 'react'
import {View, Text, StyleSheet, FlatList, Dimensions} from 'react-native'
import colors from '../assets/colors'
import CourseItem from '../components/CourseItem'
import SubHeader from '../components/SubHeader'
import MyCourseItem from '../components/mycourse/MyCourseItem'
import BottomTab from '../components/bottomtab/BottomTab'


const windowHeight = Dimensions.get('window').height;
const course_data = [{},{}]
const my_course_data = [
    {
        icon: require('../assets/images/course-icon-1.png'),
        title: "Learn to Code Making Games",
        rating: "4.3",
        tag: ["C#", "Unity"],
        cost: "$30",
        duration: "/mo",
        length: "35 hours",
        completed: "80%"
    },
    {
        icon: require('../assets/images/course-icon-2.png'),
        title: "Make Your First 2D Game",
        rating: "4.2",
        tag: ["2D", "Games"],
        cost: "$25",
        duration: "/mo",
        length: "59 hours",
        completed: "30%"
    }
]
export default function HomeScreeen () {
    return(
        <View style={styles.root}>
            
            <View style={styles.textWrapper}>
                <Text style={styles.title}>Fundamentals Courses</Text>
                <Text style={styles.description}>Find the right iOS Game Development course for you. Answer a few questions to see what we'd recommend for you.</Text>
            </View>
            <View style={styles.courseList}>
                <FlatList
                        horizontal={true}
                        data={course_data}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={keyExtractor}
                        renderItem={renderItem}
                />
            </View>
            
            <SubHeader style={styles.subHeader} title="The Fundamentals" ></SubHeader>
            <MyCourseItem course={my_course_data[0]}/>
            <MyCourseItem course={my_course_data[1]}/>
            <View style={styles.bottomTabView}>
                <BottomTab style={styles.bottomTab}/>
            </View>
               
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
        zIndex: 0,
        height: '100%',
        flexDirection: 'column'
    },
    courseList: {

    },
    title: {
        marginBottom: 16,
        textAlign: 'left',
        color: colors.darkBlue,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 36,
        lineHeight: 36

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
        marginHorizontal: 24,
        marginTop: 70
    },
    subHeader: {
        marginHorizontal: 24,
        marginTop: 32,
        marginBottom: 24,
        
    },

    bottomTabView: {
        position: 'absolute',
        bottom: 30,
        width: '100%'
    },
    bottomTab: {
        marginHorizontal: 24,
        
        backgroundColor: 'white',
        
        zIndex: 1,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
         height: 35
        },
        shadowRadius: 12,
        shadowOpacity: 0.1,
        
    },  
})