
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Welcome" component={welcomeScreen} />
          <Stack.Screen name="Home" component={homeScreen} />
          
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const homeScreen = ({ navigation }) => {
  return (
    <HomeScreen navigation = {navigation}/>
  );
};
const welcomeScreen = ({ navigation}) => {
  return <WelcomeScreen navigation = {navigation}></WelcomeScreen>
};