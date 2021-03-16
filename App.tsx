import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreeen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';

export default function App() {
  return (
    //<WelcomeScreen />
    <HomeScreeen/>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
